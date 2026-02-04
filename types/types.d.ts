type Difficulty = "casual" | "moderate" | "pro";

type QuestionsPack = {
  slug: string;
  title: string;
  description: string;
  difficulties: Record<Difficulty, Question[]>;
};

type Question = {
  id: number;
  question: string;
  answers: string[];
  image?: string;
  correctAnswer: string;
};

type QuizResults = {
  category: string;
  difficulty: string;
  score: number;
  total: number;
};
