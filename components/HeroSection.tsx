import Image from "next/image";

import HeroButtons from "@/components/HeroButtons";
import SectionTitle from "@/components/ui/SectionTitle";

import { APP_NAME } from "@/utils/constants";

function HeroSection() {
  // Returned JSX
  return (
    <section className="text-section flex flex-col gap-1 sm:my-8">
      <div className="flex-center gap-5 mb-8">
        <Image src="/logo.svg" width={175} height={96} alt={`${APP_NAME} Logo`} />
        <SectionTitle className="mb-0! text-[50px]!">QuikQuiz</SectionTitle>
      </div>
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
