import { NextResponse, NextRequest } from "next/server";
import * as fs from "fs";
import path from "path";
import { encode } from "gpt-3-encoder";

const dataPath = path.resolve(process.cwd(), "data/faq.json");
let data: { question: string; answer: string }[] = [];

// Load and parse data once during startup
try {
  data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
} catch (error) {
  console.error("Error loading FAQ data:", error);
}

// Helper function: Compute cosine similarity
const cosineSimilarity = (a: number[], b: number[]): number => {
  const dotProduct = a.reduce((sum, ai, idx) => sum + ai * b[idx], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
};

// Embed query using GPT tokenizer
const embedText = (text: string): number[] => encode(text);

// API endpoint
export const GET = async (req: NextRequest, res: NextResponse) => {
  console.log("Hello, world!");
  return res.status(200).json({ message: "Hello, world!" });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  // Embed the user query
  const queryEmbedding = embedText(question);

  // Compute similarity scores
  const scores = data.map((item) => ({
    question: item.question,
    answer: item.answer,
    score: cosineSimilarity(queryEmbedding, embedText(item.question)),
  }));

  // Sort by highest score
  scores.sort((a, b) => b.score - a.score);
  const bestMatch = scores[0];

  if (!bestMatch || bestMatch.score < 0.5) {
    return res.status(404).json({
      error: "No relevant answer found.",
      match: null,
      score: null,
    });
  }

  return res.status(200).json({
    answer: bestMatch.answer,
    match: bestMatch.question,
    score: bestMatch.score,
  });
};
