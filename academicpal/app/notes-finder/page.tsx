"use client";

import { useMemo, useState } from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Search, Sparkles } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

type ApiResult =
  | {
      success: true;
      message: string;
      semester: string;
      cycle: string;
      subject: string;
      keywords: string;
      notes_link: string;
      score: number;
      maxScore: number;
      confidence: number;
    }
  | {
      success: false;
      message: string;
      score?: number;
      maxScore?: number;
      confidence?: number;
    };

const examples = [
  "maths notes chemistry cycle",
  "python notes physics",
  "give me BEE notes",
  "cyber security notes",
];

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export default function NotesFinderPage() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ApiResult | null>(null);

  const confidencePercent = useMemo(() => {
    if (!result?.confidence) return 0;
    return clampPercent(result.confidence * 100);
  }, [result]);

  const handleSearch = async (q?: string) => {
    const finalQuery = (q ?? query).trim();
    setQuery(finalQuery);

    if (!finalQuery) {
      setResult({ success: false, message: "Please enter a query." });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/notes-finder/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: finalQuery }),
      });

      const data = (await res.json()) as ApiResult;
      setResult(data);
    } catch {
      setResult({
        success: false,
        message: "There was an error searching notes. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white relative overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_55%)]" />
      </div>

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white/80">ML-powered notes finder</span>
              <Badge className="bg-blue-500 text-white hover:bg-blue-600">AcademicPal</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Find notes using plain English
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              Type what you need (subject, cycle, semester) and get the best match.
            </p>
          </div>

          <Card className="border-blue-500/20 bg-black/60 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" />
                Notes Finder
              </CardTitle>
              <CardDescription>
                Examples: try “maths notes chemistry cycle” or “python notes physics”.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void handleSearch();
                }}
                className="space-y-3"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., I want maths notes from chemistry cycle"
                    className="h-12 bg-black/40 border-white/10 text-white caret-white placeholder:text-white/50 focus-visible:ring-blue-500/40"
                  />
                  <Button
                    type="submit"
                    className="h-12 bg-blue-500 hover:bg-blue-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Searching…" : "Find Notes"}
                  </Button>
                </div>
              </form>

              <div className="flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    onClick={() => void handleSearch(ex)}
                    className="text-left"
                  >
                    <Badge
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                    >
                      {ex}
                    </Badge>
                  </button>
                ))}
              </div>

              <Separator className="bg-white/10" />

              {result && (
                <div className="space-y-4">
                  {result.success ? (
                    <div className="space-y-4">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                            Semester: {result.semester}
                          </Badge>
                          <Badge variant="secondary">Cycle: {result.cycle}</Badge>
                          <Badge variant="secondary">Subject: {result.subject}</Badge>
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed">
                          Keywords: <span className="text-white/85">{result.keywords}</span>
                        </p>

                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-white/70">Confidence</span>
                            <span className="text-white/80">{confidencePercent}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-blue-500"
                              style={{ width: `${confidencePercent}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={result.notes_link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button className="w-full bg-blue-500 hover:bg-blue-600">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open Notes
                          </Button>
                        </a>
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto border-blue-500/40 text-blue-300 hover:bg-blue-500/10"
                          onClick={() => {
                            setResult(null);
                          }}
                        >
                          New Search
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="font-semibold">No match</p>
                      <p className="text-white/70 text-sm mt-1">{result.message}</p>

                      {typeof result.confidence === "number" && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-white/70">Confidence</span>
                            <span className="text-white/80">{confidencePercent}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-blue-500"
                              style={{ width: `${confidencePercent}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-4 text-sm text-white/70">
                        Try one of the examples above or include the subject + cycle.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>

            <CardFooter className="border-t border-white/10 justify-between">
              <p className="text-xs text-white/50">
                Tip: include both subject and cycle for best results.
              </p>
              <a
                href="/home"
                className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                Back to Home
                <ExternalLink className="w-3 h-3" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
