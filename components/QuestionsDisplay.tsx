import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Button from "@/components/ui/Button";

function QuestionsDisplay({ questions }: { questions: Question[] }) {
  // Set state value for current question
  const [currentIndex, setCurrentIndex] = useState(0);

  // Conditional return if the quiz is completed
  if (currentIndex >= questions.length)
    return (
      <div className="text-center">
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
        <Button small asChild className="mt-5">
          <Link href="/">Check my results</Link>
        </Button>
      </div>
    );

  // Returned JSX
  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center gap-3 mb-1 text-base">
        <span>
          Question: {currentIndex + 1}/{questions.length}
        </span>
        <span>|</span>
        <span>Difficulty: Pro</span>
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
              <div className="bg-white rounded-xl h-68 flex-center shadow-md shadow-chocolate/50 pt-3 pb-5 px-8 mb-8">
                <div>
                  <h2 className="text-2xl font-lora">{question}</h2>
                  {image && (
                    <Image
                      src="/bg.png"
                      className="mt-2 mx-auto"
                      width={300}
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
                    onClick={() => setCurrentIndex((i) => i + 1)}
                    className="text-xl!"
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
