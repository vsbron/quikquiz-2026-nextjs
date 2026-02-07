import { Metadata } from "next";
import ResultsSection from "@/components/ResultsSection";
import { APP_NAME } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Your Results",
  description: `See how you did in ${APP_NAME} - your final score, correct vs wrong breakdown, and the questions you missed. Retry the quiz or try another category.`,
  robots: {
    index: false,
    follow: false,
  },
};

// The page
function ResultsPage() {
  // Returned JSX
  return <ResultsSection />;
}

export default ResultsPage;
