import { NextResponse } from "next/server";

const API_BASE =
  process.env.NOTES_QA_API_URL ??
  process.env.NEXT_PUBLIC_NOTES_QA_API ??
  "http://localhost:8000";

export async function POST(req: Request) {
  try {
    const payload = await req.json().catch(() => ({}));
    const upstream = await fetch(`${API_BASE}/notes-qa/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await upstream.json().catch(() => ({ error: "Answering failed." }));
    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    console.error("Notes Q&A error:", error);
    return NextResponse.json({ error: "Answering failed." }, { status: 502 });
  }
}
