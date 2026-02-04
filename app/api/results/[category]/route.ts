import { NextResponse } from "next/server";

import { CATEGORIES } from "@/data/categories";
import {
  MULTIPLIER_CASUAL,
  MULTIPLIER_MODERATE,
  MULTIPLIER_PRO,
} from "@/utils/constants";

export async function POST(req: Request) {
  // Get the request data
  const { category, answers, difficulty } = (await req.json()) as {
    category: string;
    answers: string[];
    difficulty: "casual" | "moderate" | "pro";
  };

  // Find the pack inside categories and pull the answers
  const questionsPack = CATEGORIES.find((pack) => pack.slug === category);

  // If not found, throw error
  if (!questionsPack) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  // Get the correct answers and set the multiplier
  const questions = questionsPack.difficulties[difficulty];
  const quizName = questionsPack.title;
  const correctAnswers = questions.map((q) => q.correctAnswer);
  let multiplier;
  switch (difficulty) {
    case "casual":
      multiplier = MULTIPLIER_CASUAL;
    case "moderate":
      multiplier = MULTIPLIER_MODERATE;
    case "pro":
      multiplier = MULTIPLIER_PRO;
    default:
      multiplier = MULTIPLIER_CASUAL;
  }

  // Calculate the score
  const score = correctAnswers.reduce((sum, correct, i) => {
    return sum + (answers[i] === correct ? 1 * multiplier : 0);
  }, 0);

  // Return the response
  return NextResponse.json({
    score,
    total: score / multiplier,
    category: quizName,
    difficulty,
  });
}
