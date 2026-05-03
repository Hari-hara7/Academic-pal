import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

export const embeddingModel = genAI.getGenerativeModel({
  model: "embedding-001",
});

export async function embedText(text: string) {
  const result = await embeddingModel.embedContent(text);
  return result.embedding.values;
}

export default model;

