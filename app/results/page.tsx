"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";

import { APP_NAME, LINKS } from "@/utils/constants";
import ResultsSection from "@/components/ResultsSection";

// Meta data
export const metadata: Metadata = {
  title: "Your Results",
  description: `See how you did in ${APP_NAME} - your final score, correct vs wrong breakdown, and the questions you missed. Retry the quiz or try another category.`,
};

// The page
function ResultsPage() {
  // Get the router
  const router = useRouter();

  // Create state value for results stored in the session storage
  const [results] = useState<QuizResults | null>(() => {
    try {
      // Get the raw data
      const raw = sessionStorage.getItem("quizResults");

      // Guard clause
      if (!raw) redirect(LINKS.CATEGORIES);

      // Set the state with parsed data
      return JSON.parse(raw) as QuizResults;
    } catch {
      return null;
    }
  });

  // Use effect that checks the results and clears the session storage
  useEffect(() => {
    if (!results) {
      router.replace(LINKS.CATEGORIES);
      return;
    }
    sessionStorage.removeItem("quizResults");
  }, [results, router]);

  // Guard clause
  if (!results) redirect(LINKS.CATEGORIES);

  // Returned JSX
  return <ResultsSection results={results} />;
}

export default ResultsPage;
