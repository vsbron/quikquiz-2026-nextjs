type Difficulty = "casual" | "moderate" | "pro";

type QuestionsPack = {
  slug: string;
  title: string;
  description: string;
  difficulties: Record<Difficulty, Question[]>;
};

type Question = {
  question: string;
  answers: string[];
  image?: string;
  correctAnswer: string;
};
