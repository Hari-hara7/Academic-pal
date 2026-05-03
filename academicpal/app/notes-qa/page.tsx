"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, Sparkles, FileText, MessageSquare } from "lucide-react";

type UploadResult = {
  success: boolean;
  noteId?: string;
  filename?: string;
  chunkCount?: number;
  error?: string;
};

type AnswerResult = {
  success: boolean;
  text?: string;
  sources?: { id: string; score: number; snippet: string }[];
  error?: string;
};

export default function NotesQaPage() {
  const apiBase = process.env.NEXT_PUBLIC_NOTES_QA_API ?? "http://localhost:8000";
  const [file, setFile] = useState<File | null>(null);
  const [noteId, setNoteId] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [uploading, setUploading] = useState(false);
  const [asking, setAsking] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [answerResult, setAnswerResult] = useState<AnswerResult | null>(null);

  const canAsk = useMemo(() => Boolean(noteId && question.trim()), [noteId, question]);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setUploadResult(null);
    setAnswerResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${apiBase}/notes-qa/upload`, {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as UploadResult;
      if (!res.ok) {
        setUploadResult({ success: false, error: data.error ?? "Upload failed." });
        setNoteId(null);
        return;
      }

      setUploadResult(data);
      setNoteId(data.noteId ?? null);
    } catch {
      setUploadResult({ success: false, error: "Upload failed. Try again." });
      setNoteId(null);
    } finally {
      setUploading(false);
    }
  };

  const handleAsk = async () => {
    if (!noteId) return;
    const finalQuestion = question.trim();
    if (!finalQuestion) return;

    setAsking(true);
    setAnswerResult(null);

    try {
      const res = await fetch(`${apiBase}/notes-qa/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ noteId, question: finalQuestion }),
      });

      const data = (await res.json()) as AnswerResult;
      if (!res.ok) {
        setAnswerResult({ success: false, error: data.error ?? "Answering failed." });
        return;
      }

      setAnswerResult(data);
    } catch {
      setAnswerResult({ success: false, error: "Answering failed. Try again." });
    } finally {
      setAsking(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute top-12 left-8 w-44 h-44 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-12 right-6 w-52 h-52 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-white/5 px-3 py-1.5">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-white/80">Context-aware notes Q&A</span>
              <Badge className="bg-blue-500 text-white">AcademicPal</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Ask questions based on your notes
            </h1>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Upload a PDF or TXT file, then ask anything. Answers are grounded only in your material.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">PDF or TXT</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Context-only answers</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Fast retrieval</span>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-blue-500/20 bg-black/70">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-2 text-white">
                  <UploadCloud className="h-5 w-5 text-blue-400" />
                  Upload Notes
                </CardTitle>
                <p className="text-sm text-white/60">
                  Choose your syllabus notes and let AcademicPal prepare them for Q&A.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3">
                  <Input
                    type="file"
                    accept=".pdf,.txt"
                    onChange={(event) => {
                      const selected = event.target.files?.[0] ?? null;
                      setFile(selected);
                    }}
                    className="bg-black/60 border-white/10 text-white file:text-white"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleUpload}
                      disabled={!file || uploading}
                      className="flex-1 bg-blue-500 hover:bg-blue-600"
                    >
                      {uploading ? "Uploading..." : "Process Notes"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-blue-400/50 text-blue-200 bg-blue-950/40 hover:bg-blue-900/40 hover:text-white"
                      onClick={() => {
                        setFile(null);
                        setUploadResult(null);
                        setNoteId(null);
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </div>

                {uploadResult && (
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                    {uploadResult.success ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-300">
                          <FileText className="h-4 w-4" />
                          <span>Ready: {uploadResult.filename}</span>
                        </div>
                        <p className="text-white/70">
                          Split into {uploadResult.chunkCount} chunks. You can start asking questions.
                        </p>
                      </div>
                    ) : (
                      <p className="text-red-300">{uploadResult.error}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-black/70">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-2 text-white">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  Ask a Question
                </CardTitle>
                <p className="text-sm text-white/60">
                  Ask about formulas, definitions, or concepts from your uploaded notes.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="e.g., Explain Kirchhoff's laws from these notes."
                  className="min-h-[140px] bg-black/60 border-white/10 text-white"
                />
                <Button
                  onClick={handleAsk}
                  disabled={!canAsk || asking}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  {asking ? "Thinking..." : "Ask from Notes"}
                </Button>

                {answerResult && (
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
                    {answerResult.success ? (
                      <>
                        <p className="text-white/90 leading-relaxed">{answerResult.text}</p>
                        {answerResult.sources && answerResult.sources.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs uppercase text-white/50">Top matched excerpts</p>
                            <div className="space-y-2">
                              {answerResult.sources.map((source, index) => (
                                <div
                                  key={source.id}
                                  className="rounded-lg border border-white/10 bg-black/50 p-3 text-xs text-white/70"
                                >
                                  <div className="flex items-center justify-between text-[11px] text-white/50">
                                    <span>Snippet {index + 1}</span>
                                    <span>Score {source.score}</span>
                                  </div>
                                  <p className="mt-2">{source.snippet}...</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="text-red-300">{answerResult.error}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
