import { Metadata } from "next";
import HowToPlaySection from "@/components/HowToPlaySection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "How to Play - Rules, Scoring & Tips",
  description: `Learn how to play ${APP_NAME}: pick a category, choose a difficulty, answer 10 questions, and get instant results with score breakdown, chart stats, and wrong answers review.`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.HOW_TO_PLAY}`,
  },
};

// The page
function HowToPlayPage() {
  // Returned JSX
  return <HowToPlaySection />;
}

export default HowToPlayPage;
