import { useMemo, useState } from "react";

import QuizEnd from "@/components/QuizEnd";
import QuestionCard from "@/components/QuestionCard";

import { shuffleAnswers } from "@/utils/helpers";

// Props interface
interface QuestionsDisplayProps {
  questions: Question[];
  difficulty: string;
  category: string;
}

// The component
function QuestionsDisplay({
  questions,
  category,
  difficulty,
}: QuestionsDisplayProps) {
  // Set state value for current question and selected answers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  // Shuffle the answers
  const shuffledQuestions = useMemo(
    () => questions.map((q) => ({ ...q, answers: shuffleAnswers(q.answers) })),
    [questions],
  );

  // Selecting an answer handler
  const submitAnswer = (answer: string) => {
    setSelectedAnswers((curAnswers) => [...curAnswers, answer]);
    setCurrentIndex((i) => i + 1);
  };

  // Conditional return if the quiz is completed
  if (currentIndex >= questions.length)
    return (
      <QuizEnd
        answers={selectedAnswers}
        category={category}
        difficulty={difficulty}
      />
    );

  // Returned JSX
  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center max-sm:flex-col max-sm:items-center sm:gap-3 mb-1 text-[15px] sm:text-base">
        <span>
          Question: {currentIndex + 1}/{shuffledQuestions.length}
        </span>
        <span className="max-sm:hidden">|</span>
        <span className="capitalize">Difficulty: {difficulty}</span>
      </div>
      <div className="overflow-hidden -mx-3">
        <div
          className="flex transition-transform duration-700 ease-in-out max-w-2xl mx-auto"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {shuffledQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              curQuestion={q}
              index={currentIndex}
              submitHandler={submitAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionsDisplay;
