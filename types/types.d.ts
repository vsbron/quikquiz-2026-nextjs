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
  quizName: string;
  quizSlug: string;
  difficulty: Difficulty;
  score: number;
  total: number;
  correctCount: number;
  wrongQuestions: string[];
};
