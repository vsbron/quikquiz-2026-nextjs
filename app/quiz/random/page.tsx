import { redirect } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { LINKS } from "@/utils/constants";

function RandomQuizPage() {
  // Get the random category and redirect to this page
  const randomPack = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  redirect(`${LINKS.CATEGORIES}/${randomPack.slug}`);
}

export default RandomQuizPage;
