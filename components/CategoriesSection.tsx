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
      <div className="grid grid-cols-2 gap-x-5 gap-y-10">
        {CATEGORIES.map(({ title, slug, description }) => (
          <div
            key={slug}
            className="grid grid-rows-[auto_1fr_auto] justify-items-start"
          >
            <h2 className="text-xl font-merriweather font-bold">
              <Link href={`${LINKS.CATEGORIES}/${slug}`}>{title}</Link>
            </h2>
            <p className="text-[16px]">{description}</p>
            <Button asChild className="mt-2">
              <Link href={`${LINKS.CATEGORIES}/${slug}`}>Start quiz</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
