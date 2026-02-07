import { redirect } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { LINKS } from "@/utils/constants";
import { Metadata } from "next";

// Meta data
export const metadata: Metadata = {
  title: "Random Quiz",
  robots: { index: false, follow: false },
};

// The page
function RandomQuizPage() {
  // Get the random category and redirect to this page
  const randomPack = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  redirect(`${LINKS.CATEGORIES}/${randomPack.slug}`);
}

export default RandomQuizPage;
