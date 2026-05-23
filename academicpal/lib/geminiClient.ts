import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const embeddingModel = genAI.getGenerativeModel({
  model: "embedding-001",
});

export async function embedText(text: string) {
  const result = await embeddingModel.embedContent(text);
  return result.embedding.values;
}

export default model;

