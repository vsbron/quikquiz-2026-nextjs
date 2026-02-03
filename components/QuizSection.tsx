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
        <QuestionsDisplay
          questions={questions.difficulties[difficulty]}
          difficulty={difficulty}
        />
      ) : (
        <div className="text-center text-section">
          <p className="text-xl">{questions.description}</p>
          <div className="text-center mt-12 text-2xl">
            Please select the Difficulty
          </div>
          <div className="flex max-sm:flex-col max-sm:items-center gap-6 mt-6 justify-center">
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
