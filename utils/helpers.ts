import {
  MULTIPLIER_CASUAL,
  MULTIPLIER_MODERATE,
  MULTIPLIER_PRO,
} from "./constants";

// Function that shuffles the order of possible answers
export function shuffleAnswers(answers: string[]): string[] {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }

  return answers;
}

// Function that gets the correct multiplier
export function getMultiplier(difficulty: Difficulty) {
  // Set the difficulty
  const multiplierByDifficulty = {
    casual: MULTIPLIER_CASUAL,
    moderate: MULTIPLIER_MODERATE,
    pro: MULTIPLIER_PRO,
  } as const;

  // Return the correct multiplier
  return multiplierByDifficulty[difficulty];
}
