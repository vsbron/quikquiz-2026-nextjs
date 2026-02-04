"use client";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";

import { LINKS } from "@/utils/constants";
import ResultsSection from "@/components/ResultsSection";

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
