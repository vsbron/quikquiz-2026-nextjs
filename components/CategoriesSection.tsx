import Link from "next/link";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

import { CATEGORIES } from "@/data/categories";
import { LINKS } from "@/utils/constants";

function CategoriesSection() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Choose a Category</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-12">
        {CATEGORIES.map(({ title, slug, description }) => (
          <div
            key={slug}
            className="grid grid-rows-[auto_1fr_auto] justify-items-start max-sm:pb-7 max-sm:border-b last:border-0 border-chocolate/50"
          >
            <h2 className="text-xl sm:text-2xl font-merriweather font-bold">
              <Link href={`${LINKS.CATEGORIES}/${slug}`}>{title}</Link>
            </h2>
            <p className="text-[14px] sm:text-base">{description}</p>
            <Button small asChild className="mt-1 sm:mt-1.5">
              <Link href={`${LINKS.CATEGORIES}/${slug}`}>Start quiz</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
