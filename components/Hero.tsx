import Link from "next/link";

import Button from "@/components/ui/Button";

function HeroSection() {
  // Returned JSX
  return (
    <section className="flex flex-col items-center gap-1 sm:my-8">
      <div className="text-6xl font-black">QxQ</div>
      <h1>QuikQuiz</h1>
      <p>
        Welcome to a place where you can test your knowledge by taking fun,
        quick quizzes.
      </p>
      <p>
        Choose from multiple categories, each with two difficulty levels -
        perfect for both casual players and trivia nerds.
      </p>
      <p>
        Start by learning the rules, explore quiz categories, or jump straight
        into a random quiz!
      </p>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8 my-8 sm:mt-10">
        <Button asChild>
          <Link href="/how-to-play" className="block px-2 py-1 sm:px-4 sm:py-2">
            How To Play
          </Link>
        </Button>
        <Button asChild>
          <Link href="/quiz" className="block px-2 py-1 sm:px-4 sm:py-2">
            Categories
          </Link>
        </Button>
        <Button asChild>
          <Link href="/quiz/random" className="block px-2 py-1 sm:px-4 sm:py-2">
            Random quiz
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
