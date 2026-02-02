"use client";
import { useState } from "react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import QuestionsDisplay from "./QuestionsDisplay";

function QuizSection({ questions }: { questions: QuestionsPack }) {
  // Create state value for Difficulty
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  // Click handler for difficulty select button
  const buttonHandler = (selection: Difficulty) => {
    setDifficulty(selection);
  };

  // Returned JSX
  return (
    <section>
      <SectionTitle>{`${questions.title} Quiz`}</SectionTitle>
      {difficulty ? (
        <QuestionsDisplay questions={questions.difficulties[difficulty]} />
      ) : (
        <div>
          <div>Please select the Difficulty</div>
          <div className="flex gap-6 mt-8">
            <Button onClick={() => buttonHandler("casual")}>Casual</Button>
            <Button onClick={() => buttonHandler("moderate")}>Moderate</Button>
            <Button onClick={() => buttonHandler("pro")}>Pro</Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default QuizSection;
