import { Metadata } from "next";
import ResultsSection from "@/components/ResultsSection";
import { APP_NAME } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Your Results",
  description: `See how you did in ${APP_NAME} - your final score, correct vs wrong breakdown, and the questions you missed. Retry the quiz or try another category.`,
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    title: `${APP_NAME} - Test your knowledge!`,
    description:
      "Challenge yourself with fun quizzes across multiple categories. Answer questions, track your score, and see results instantly.",
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Test your knowledge!`,
    description:
      "Challenge yourself with fun quizzes across multiple categories. Answer questions, track your score, and see results instantly.",
    images: ["/og-image.png"],
  },
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
