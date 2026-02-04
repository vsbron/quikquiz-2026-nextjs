import Link from "next/link";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { LINKS } from "@/utils/constants";

function ResultsSection({ results }: { results: QuizResults }) {
  // Destructure results
  const { score, total, category, difficulty } = results;

  // Returned JSX
  return (
    <section>
      <SectionTitle className="mb-3!">Quiz results</SectionTitle>
      <h2>Category: {category}</h2>
      <h3 className="capitalize">Difficulty: {difficulty}</h3>
      <p>Your score is: {score}</p>
      <p>You answered correctly on {total} out of 10 questions</p>
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
