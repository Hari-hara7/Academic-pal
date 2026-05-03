import hashlib
import os
import uuid
from io import BytesIO
from math import sqrt
from typing import Dict, List, Literal, Tuple

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pypdf import PdfReader
import google.generativeai as genai

MAX_FILE_SIZE = 5 * 1024 * 1024
MAX_CHUNK_CHARS = 900
CHUNK_OVERLAP = 150
TOP_K = 4
LOCAL_EMBED_DIM = 512

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
if not GEMINI_API_KEY:
  raise RuntimeError("GEMINI_API_KEY is not set")

genai.configure(api_key=GEMINI_API_KEY)

def normalize_text(text: str) -> str:
  return " ".join(text.split()).strip()

def split_into_chunks(text: str) -> List[str]:
  chunks: List[str] = []
  start = 0
  length = len(text)
  while start < length:
    end = min(length, start + MAX_CHUNK_CHARS)
    chunks.append(text[start:end])
    if end == length:
      break
    start = end - CHUNK_OVERLAP
  return [chunk for chunk in chunks if chunk]

def cosine_similarity(a: List[float], b: List[float]) -> float:
  if len(a) != len(b) or not a:
    return 0.0
  dot = 0.0
  norm_a = 0.0
  norm_b = 0.0
  for i in range(len(a)):
    dot += a[i] * b[i]
    norm_a += a[i] * a[i]
    norm_b += b[i] * b[i]
  denom = (norm_a ** 0.5) * (norm_b ** 0.5)
  return 0.0 if denom == 0 else dot / denom

def hash_embedding(text: str, dims: int = LOCAL_EMBED_DIM) -> List[float]:
  vector = [0.0] * dims
  for token in text.split():
    digest = hashlib.md5(token.encode("utf-8")).digest()
    index = int.from_bytes(digest[:2], "big") % dims
    vector[index] += 1.0
  norm = sqrt(sum(value * value for value in vector))
  if norm == 0:
    return vector
  return [value / norm for value in vector]

def embed_text(text: str) -> List[float]:
  result = genai.embed_content(
    model="models/text-embedding-004",
    content=text,
    task_type="retrieval_document",
  )
  return result["embedding"]

def embed_with_fallback(text: str) -> Tuple[List[float], Literal["gemini", "local"]]:
  try:
    return embed_text(text), "gemini"
  except Exception:
    return hash_embedding(text), "local"

def answer_with_context(question: str, context: str) -> str:
  prompt = (
    "You are AcademicPal AI Assistant. Answer ONLY using the notes context below. "
    "If the answer is not in the notes, say: \"I couldn't find that in your notes.\" "
    "Keep responses concise and student-friendly.\n\n"
    f"Notes context:\n{context}\n\nQuestion: {question}\nAnswer:"
  )
  model = genai.GenerativeModel("models/gemini-3-flash-preview")
  response = model.generate_content(prompt)
  return response.text or ""

class NoteChunk:
  def __init__(self, chunk_id: str, text: str, embedding: List[float]):
    self.id = chunk_id
    self.text = text
    self.embedding = embedding

class NoteSession:
  def __init__(
    self,
    session_id: str,
    filename: str,
    chunks: List[NoteChunk],
    embedding_mode: Literal["gemini", "local"],
  ):
    self.id = session_id
    self.filename = filename
    self.chunks = chunks
    self.embedding_mode = embedding_mode

store: Dict[str, NoteSession] = {}

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000"],
  allow_credentials=True,
  allow_methods=["*"] ,
  allow_headers=["*"] ,
)

@app.post("/notes-qa/upload")
async def upload_notes(file: UploadFile = File(...)):
  if file.content_type not in {"application/pdf", "text/plain"}:
    raise HTTPException(status_code=400, detail="Only PDF or TXT files are supported.")

  data = await file.read()
  if len(data) > MAX_FILE_SIZE:
    raise HTTPException(status_code=413, detail="File too large (max 5MB).")

  text = ""
  if file.content_type == "application/pdf":
    reader = PdfReader(BytesIO(data))
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
  else:
    text = data.decode("utf-8", errors="ignore")

  normalized = normalize_text(text)
  if not normalized:
    raise HTTPException(status_code=400, detail="No readable text found in file.")

  chunks = split_into_chunks(normalized)
  embedded_chunks: List[NoteChunk] = []
  embedding_mode: Literal["gemini", "local"] = "gemini"

  for chunk in chunks:
    if embedding_mode == "gemini":
      embedding, mode = embed_with_fallback(chunk)
      embedding_mode = mode
    else:
      embedding = hash_embedding(chunk)
    embedded_chunks.append(NoteChunk(str(uuid.uuid4()), chunk, embedding))

  session_id = str(uuid.uuid4())
  store[session_id] = NoteSession(
    session_id,
    file.filename or "notes",
    embedded_chunks,
    embedding_mode,
  )

  return {
    "success": True,
    "noteId": session_id,
    "filename": file.filename,
    "chunkCount": len(embedded_chunks),
  }

@app.post("/notes-qa/ask")
async def ask_notes(payload: dict):
  note_id = str(payload.get("noteId", "")).strip()
  question = str(payload.get("question", "")).strip()

  if not note_id or not question:
    raise HTTPException(status_code=400, detail="noteId and question are required.")

  session = store.get(note_id)
  if not session:
    raise HTTPException(status_code=404, detail="Notes not found.")

  if session.embedding_mode == "local":
    question_embedding = hash_embedding(question)
  else:
    question_embedding, mode = embed_with_fallback(question)
    session.embedding_mode = mode
  scored = sorted(
    (
      {
        "chunk": chunk,
        "score": cosine_similarity(question_embedding, chunk.embedding),
      }
      for chunk in session.chunks
    ),
    key=lambda item: item["score"],
    reverse=True,
  )[:TOP_K]

  context = "\n\n".join(
    f"Chunk {index + 1}: {item['chunk'].text}" for index, item in enumerate(scored)
  )

  answer = answer_with_context(question, context)

  return {
    "success": True,
    "text": answer,
    "sources": [
      {
        "id": item["chunk"].id,
        "score": round(float(item["score"]), 4),
        "snippet": item["chunk"].text[:220],
      }
      for item in scored
    ],
  }
