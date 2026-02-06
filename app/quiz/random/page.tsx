import { CATEGORIES } from "@/data/categories";
import { redirect } from "next/navigation";

function RandomQuizPage() {
  // Get the random category and redirect to this page
  const randomPack = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  redirect(`/quiz/${randomPack.slug}`);
}

export default RandomQuizPage;
