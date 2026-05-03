const MAX_CHUNK_CHARS = 900;
const CHUNK_OVERLAP = 150;

export function normalizeText(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

export function splitIntoChunks(text: string) {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(text.length, start + MAX_CHUNK_CHARS);
    const slice = text.slice(start, end);
    chunks.push(slice);

    if (end === text.length) break;
    start = end - CHUNK_OVERLAP;
  }

  return chunks.filter(Boolean);
}

export function cosineSimilarity(a: number[], b: number[]) {
  if (a.length !== b.length || a.length === 0) return 0;
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}
