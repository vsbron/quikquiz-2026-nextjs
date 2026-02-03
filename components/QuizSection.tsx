"use client";
import { useState } from "react";

import QuestionsDisplay from "@/components/QuestionsDisplay";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

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
      <SectionTitle className="mb-3!">{`${questions.title} Quiz`}</SectionTitle>
      {difficulty ? (
        <QuestionsDisplay questions={questions.difficulties[difficulty]} />
      ) : (
        <div>
          <p>{questions.description}</p>
          <div className="text-center mt-12 text-xl">
            Please select the Difficulty
          </div>
          <div className="flex gap-6 mt-8 justify-center">
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
