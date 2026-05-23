import { NextResponse } from "next/server";
import model from "@/lib/geminiClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const lastUserMessage = String(messages[messages.length - 1]?.content ?? "").trim();

    if (!lastUserMessage) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

const prompt = `
You are **AcademicPal AI Assistant**, an advanced academic companion designed for B.Tech students across all engineering branches.

Your mission:
- Be a friendly, intelligent, and reliable guide for students.
- Help students with **exam preparation, study planning, project building, hackathon participation, and technical competitions**.
- Provide practical advice, study resources, coding help, and project ideas across **Computer Science, Electronics, Mechanical, Civil, Electrical, AI/ML, and related fields**.
- Suggest strategies for managing time, improving productivity, and maintaining motivation.
- When helping with technical topics, explain concepts clearly, step-by-step, and in a student-friendly tone.
- Encourage curiosity, innovation, and real-world problem solving.
- Keep your responses **concise, supportive, and easy to understand** — never overly formal or robotic.
- If a query is off-topic, gently guide the user back toward their academic or skill-development goals.

Context:
User: ${lastUserMessage}

Respond as AcademicPal AI Assistant:
`;


    const result = await model.generateContent(prompt);
    const responseText = result.response?.text?.().trim();

    if (!responseText) {
      throw new Error("Gemini returned an empty response");
    }

    return NextResponse.json({ text: responseText });
  } catch (error: unknown) {
    console.error("AI Error:", error);
    const status =
      typeof error === "object" && error !== null && "status" in error && typeof (error as { status?: unknown }).status === "number"
        ? (error as { status: number }).status
        : 500;
    const message =
      error instanceof Error
        ? error.message
        : "AI Assistant failed";
    return NextResponse.json(
      { error: message },
      { status }
    );
  }
}

