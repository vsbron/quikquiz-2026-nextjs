import { useState } from "react";
import { useRouter } from "next/router";

import Button from "@/components/ui/Button";

interface QuizEndProps {
  answers: string[];
  category: string;
  difficulty: string;
}

function QuizEnd({ answers, category, difficulty }: QuizEndProps) {
  // Create state value for submitting state and get the router
  const [isCalculating, setIsCalculating] = useState(false);
  const router = useRouter();

  // Finish the quiz handler
  const resultsHandler = async () => {
    try {
      // Enable calculating state
      setIsCalculating(true);

      // Fetch the results
      const res = await fetch(`/api/results`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, answers, difficulty }),
      });

      // Guard clause
      if (!res.ok) throw new Error("Failed to calculate results");

      // Extract the data
      const data = (await res.json()) as {
        score: number;
        total: number;
        summary?: unknown;
      };

      // Store results in sessionStorage
      sessionStorage.setItem(
        "quizResults",
        JSON.stringify({
          category,
          difficulty,
          answers,
          ...data,
        }),
      );

      // Redirect the user
      router.push(`/results/${category}`);
    } catch (e: unknown) {
      throw new Error(
        `Failed to calculate the results. (${e instanceof Error ? e.message : e})`,
      );
    } finally {
      // Disable calculating state
      setIsCalculating(false);
    }
  };

  // Returned JSX
  return (
    <div className="text-center max-w-160 mx-auto mt-8 max-sm:text-base">
      <h2 className="text-2xl">Congratulations ✨</h2>
      <p>
        You have reached the end of the quiz.
        <br />
        Great job sticking with it and answering all the questions.
      </p>
      <p>
        You&apos;re all set! Click the button below to calculate your final
        score and see an overall summary of your performance in the quiz.
      </p>
      <Button
        small
        asChild
        className="mt-5"
        onClick={resultsHandler}
        disabled={isCalculating}
      >
        {isCalculating ? "Calculating..." : "Calculate my results"}
      </Button>
    </div>
  );
}

export default QuizEnd;
