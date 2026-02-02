import Link from "next/link";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import HeroButtons from "./HeroButtons";

function HeroSection() {
  // Returned JSX
  return (
    <section className="flex flex-col gap-1 sm:my-8">
      <div className="text-6xl font-black text-center">QxQ</div>
      <SectionTitle>QuikQuiz</SectionTitle>
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
      <HeroButtons />
    </section>
  );
}

export default HeroSection;
