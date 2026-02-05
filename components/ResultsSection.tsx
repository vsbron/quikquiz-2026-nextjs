import Link from "next/link";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { LINKS } from "@/utils/constants";

function ResultsSection({ results }: { results: QuizResults }) {
  // Destructure results
  const { score, total, correctCount, quizName, difficulty, wrongQuestions } =
    results;

  // Returned JSX
  return (
    <section>
      <SectionTitle className="mb-3!">Quiz results</SectionTitle>
      <h2>Category: {quizName}</h2>
      <h3 className="capitalize">Difficulty: {difficulty}</h3>
      <p>Your score is: {score}</p>
      <p>
        You answered correctly on {correctCount} out of {total} questions
      </p>
      <div>
        {wrongQuestions.map((wQ) => (
          <div key={wQ}>{wQ}</div>
        ))}
      </div>
      <Button asChild>
        <Link href={LINKS.HOME}>Home</Link>
      </Button>
      <Button asChild>
        <Link href={LINKS.CATEGORIES}>Categories</Link>
      </Button>
    </section>
  );
}

export default ResultsSection;
