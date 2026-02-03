import Image from "next/image";
import { useState } from "react";

import Button from "@/components/ui/Button";

// Props interface
interface QuestionsDisplayProps {
  questions: Question[];
  difficulty: string;
}

// The component
function QuestionsDisplay({ questions, difficulty }: QuestionsDisplayProps) {
  // Set state value for current question and selected answers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  // Selecting an answer handler
  const submitAnswer = (answer: string) => {
    setSelectedAnswers((curAnswers) => [...curAnswers, answer]);
    setCurrentIndex((i) => i + 1);
  };

  // Finish the quiz handler
  const resultsHandler = () => {};

  // Conditional return if the quiz is completed
  if (currentIndex >= questions.length)
    return (
      <div className="text-center max-w-160 mx-auto mt-8">
        <h2 className="text-2xl">Congratulations ✨</h2>
        <p>
          You have reached the end of the quiz.
          <br />
          Great job sticking with it and answering all the questions.
        </p>
        <p>
          Your results are ready. Visit the results page to view your final
          score and see an overall summary of your performance in the quiz.
        </p>
        <Button small asChild className="mt-5" onClick={resultsHandler}>
          Check my results
        </Button>
      </div>
    );

  // Returned JSX
  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center max-sm:flex-col max-sm:items-center sm:gap-3 mb-1 text-[15px] sm:text-base">
        <span>
          Question: {currentIndex + 1}/{questions.length}
        </span>
        <span className="max-sm:hidden">|</span>
        <span className="capitalize">Difficulty: {difficulty}</span>
      </div>
      <div className="overflow-hidden -mx-3">
        <div
          className="flex transition-transform duration-700 ease-in-out max-w-2xl mx-auto"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {questions.map(({ question, image, answers }, i) => (
            <div
              key={question}
              className={`w-full shrink-0 px-3 transition-opacity duration-700 ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-xl max-sm:min-h-70 sm:h-68 flex-center text-center shadow-md shadow-chocolate/50 pt-3 pb-5 px-4 sm:px-8 mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-merriweather">
                    {question}
                  </h2>
                  {image && (
                    <Image
                      src={image}
                      className="mt-2 mx-auto"
                      width={480}
                      height={200}
                      alt={question}
                    />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 content-stretch justify-stretch items-stretch">
                {answers.map((answer) => (
                  <Button
                    key={answer}
                    small
                    onClick={() => submitAnswer(answer)}
                  >
                    {answer}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionsDisplay;
