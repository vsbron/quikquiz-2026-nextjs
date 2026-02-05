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
    difficulty: Difficulty;
  };

  // Find the pack inside categories and pull the answers
  const questionsPack = CATEGORIES.find((pack) => pack.slug === category);

  // If not found, throw error
  if (!questionsPack) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  // Get the correct answers (while checking difficulty)
  const questions = questionsPack.difficulties[difficulty];
  if (!questions) {
    return NextResponse.json(
      { error: "Invalid difficulty for this category" },
      { status: 400 },
    );
  }
  const quizName = questionsPack.title;

  // Check if we have correct length of answers
  if (!Array.isArray(answers) || answers.length !== questions.length) {
    return NextResponse.json(
      { error: "Invalid answers payload" },
      { status: 400 },
    );
  }

  // Set the multiplier
  const multiplierByDifficulty = {
    casual: MULTIPLIER_CASUAL,
    moderate: MULTIPLIER_MODERATE,
    pro: MULTIPLIER_PRO,
  } as const;
  const multiplier = multiplierByDifficulty[difficulty];

  // Get the wrong questions
  const wrongQuestions = questions.reduce<string[]>((arr, q, i) => {
    if (answers[i] !== q.correctAnswer) arr.push(`#${q.id}: ${q.question}`);
    return arr;
  }, []);

  // Calculate the score and number of correct answers
  const correctCount = questions.length - wrongQuestions.length;
  const score = correctCount * multiplier;

  // Return the response
  return NextResponse.json({
    score,
    total: questions.length,
    correctCount,
    quizName,
    wrongQuestions,
  });
}
