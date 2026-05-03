import { NextResponse } from "next/server";

const API_BASE =
  process.env.NOTES_QA_API_URL ??
  process.env.NEXT_PUBLIC_NOTES_QA_API ??
  "http://localhost:8000";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const upstream = await fetch(`${API_BASE}/notes-qa/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await upstream.json().catch(() => ({ error: "Upload failed." }));
    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    console.error("Notes upload error:", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 502 });
  }
}
