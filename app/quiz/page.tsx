import { Metadata } from "next";
import CategoriesSection from "@/components/CategoriesSection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Quiz Categories",
  description: `Browse all ${APP_NAME} categories, pick what you want to play, choose a difficulty level, and start a 10-question quiz in seconds.`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.CATEGORIES}`,
  },
};

// The page
function QuizPage() {
  // Returned JSX
  return <CategoriesSection />;
}

export default QuizPage;
