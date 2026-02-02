import Link from "next/link";

import Button from "@/components/ui/Button";
import { LINKS } from "@/utils/constants";

function HeroButtons() {
  // Returned JSX
  return (
    <div className="flex flex-wrap justify-center gap-5 sm:gap-8 my-8 sm:mt-10">
      <Button asChild>
        <Link
          href={LINKS.HOW_TO_PLAY}
          className="block px-2 py-1 sm:px-3 sm:py-1.5"
        >
          How To Play
        </Link>
      </Button>
      <Button asChild>
        <Link
          href={LINKS.CATEGORIES}
          className="block px-2 py-1 sm:px-3 sm:py-1.5"
        >
          Categories
        </Link>
      </Button>
      <Button asChild>
        <Link
          href={LINKS.RANDOM_QUIZ}
          className="block px-2 py-1 sm:px-3 sm:py-1.5"
        >
          Random quiz
        </Link>
      </Button>
    </div>
  );
}

export default HeroButtons;
