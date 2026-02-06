import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

// Props interface
interface QuizEndProps {
  answers: string[];
  category: string;
  difficulty: Difficulty;
}

// The component
function QuizEnd({ answers, category, difficulty }: QuizEndProps) {
  // Create state value for submitting state and get the router
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Finish the quiz handler
  const resultsHandler = async () => {
    try {
      // Reset error and enable calculating state
      setError(null);
      setIsCalculating(true);

      // Fetch the results
      const res = await fetch(`/api/results/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, answers, difficulty }),
      });

      // Guard clause
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Failed to calculate results");
      }

      // Extract the data
      const data = (await res.json()) as {
        score: number;
        total: number;
        correctCount: number;
        quizName: string;
      };

      // Store results in sessionStorage
      sessionStorage.setItem(
        "quizResults",
        JSON.stringify({
          difficulty,
          ...data,
        }),
      );

      // Redirect the user
      router.push(`/results`);
    } catch (e: unknown) {
      // Disable calculating state
      setIsCalculating(false);

      // Set error
      setError(e instanceof Error ? e.message : String(e));
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
      {error && <p className="mt-3 text-red-500">{error}</p>}
      <Button
        small
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
