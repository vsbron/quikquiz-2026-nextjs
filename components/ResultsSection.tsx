import Link from "next/link";

import ChartDonut from "@/components/ui/ChartDonut";
import SectionTitle from "@/components/ui/SectionTitle";

import { LINKS } from "@/utils/constants";
import { getMultiplier } from "@/utils/helpers";

function ResultsSection({ results }: { results: QuizResults }) {
  // Destructure results
  const { score, total, correctCount, quizName, difficulty, wrongQuestions } =
    results;

  // Get the multiplier
  const multiplier = getMultiplier(difficulty);

  // Returned JSX
  return (
    <section>
      <SectionTitle className="mb-3!">Quiz results</SectionTitle>
      <h2 className="text-center text-xl sm:text-2xl font-bold font-merriweather mb-2">
        {quizName} (<span className="capitalize">{difficulty}</span>)
      </h2>
      <p className="text-center">
        Your score is: <b className="text-[18px] sm:text-[20px]">{score}</b> (
        {correctCount} x {multiplier} multiplier)
      </p>

      {/* Chart donut */}
      <div className="mb-4">
        <ChartDonut correct={correctCount} wrong={total - correctCount} />
      </div>

      {/* List of wrong questions */}
      {wrongQuestions.length > 0 && (
        <div className="mb-8 text-[15px]">
          <h3 className="font-bold mb-1 text-[18px]">
            Questions you answered wrong:
          </h3>
          <div className="flex flex-col gap-1">
            {wrongQuestions.map((question, i) => (
              <div key={i}>{question}</div>
            ))}
          </div>
        </div>
      )}

      {/* Final notes */}
      <p>
        Thanks for playing! Try{" "}
        <Link href={LINKS.CATEGORIES}>another category</Link> to expand your
        knowledge - or return to the <Link href={LINKS.HOME}>homepage</Link> and
        start a new quiz anytime.
      </p>
    </section>
  );
}

export default ResultsSection;
