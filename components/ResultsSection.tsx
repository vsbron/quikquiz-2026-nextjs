import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import ChartDonut from "@/components/ui/ChartDonut";
import SectionTitle from "@/components/ui/SectionTitle";
import Share from "@/components/ui/Share";

import { LINKS } from "@/utils/constants";
import { getMultiplier } from "@/utils/helpers";

function ResultsSection({ results }: { results: QuizResults }) {
  // Get the router and ref for results stats
  const router = useRouter();
  const shareRef = useRef<HTMLDivElement>(null);

  // Destructure results
  const {
    score,
    total,
    correctCount,
    quizName,
    quizSlug,
    difficulty,
    wrongQuestions,
  } = results;

  // Get the multiplier
  const multiplier = getMultiplier(difficulty);

  // Returned JSX
  return (
    <section>
      <SectionTitle className="mb-3!">Quiz results</SectionTitle>
      <div className="flex-center">
        <div className="pt-2 pb-4 px-8" ref={shareRef}>
          <h2 className="text-center text-xl sm:text-2xl font-bold font-merriweather mb-2">
            {quizName} (<span className="capitalize">{difficulty}</span>)
          </h2>
          <p className="text-center">
            Your score is: <b className="text-[18px] sm:text-[20px]">{score}</b>
            <span className="text-[15px] block -mt-0.5">
              ({correctCount} x {multiplier} multiplier)
            </span>
          </p>

          {/* Chart donut */}
          <div className="mb-2">
            <ChartDonut correct={correctCount} wrong={total - correctCount} />
          </div>
        </div>
      </div>

      {/* Share UI */}
      <Share
        ref={shareRef}
        score={score}
        quizName={quizName}
        quizSlug={quizSlug}
        difficulty={difficulty}
      />

      <div className="max-w-132 mx-auto">
        {/* List of wrong questions */}
        {wrongQuestions.length > 0 && (
          <div className="mb-8 text-[15px]">
            <h3 className="font-bold mb-1 text-[18px]">
              Questions you answered wrong:
            </h3>
            <div className="flex flex-col gap-1">
              {wrongQuestions.map((question, i) => (
                <div key={i} className="grid grid-cols-[25px_1fr] gap-2">
                  <span>{`#${i + 1}:`}</span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final notes */}
        <p>
          Thanks for playing! Think you can do better?{" "}
          <Link href={`${LINKS.CATEGORIES}/${quizSlug}`}>Try again</Link> and go
          for a perfect score - or jump into{" "}
          <Link href={LINKS.CATEGORIES}>another category</Link> and keep the
          streak going.
        </p>
      </div>
    </section>
  );
}

export default ResultsSection;
