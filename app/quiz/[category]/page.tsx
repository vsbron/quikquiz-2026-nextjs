import { Metadata } from "next";
import { notFound } from "next/navigation";

import QuizSection from "@/components/QuizSection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Props interface
interface QuestionsPageProps {
  params: Promise<{ category: string }>;
}

// Generate metadata function
export async function generateMetadata({
  params,
}: QuestionsPageProps): Promise<Metadata> {
  // Get the params and fetch the data
  const { category } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/categories/${category}`,
    { cache: "no-store" },
  );

  // Guard clause
  if (!res.ok) notFound();

  // Get the actual data and destructure it
  const questionsPack = (await res.json()) as QuestionsPack;

  // Returned Metadata
  return {
    title: `${questionsPack.title} Quiz`,
    description: `Play the ${questionsPack.title} quiz on ${APP_NAME}. Choose a difficulty, answer 10 questions, and get instant results.`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.CATEGORIES}/${category}`,
    },
  };
}

// The component
async function QuestionsPage({ params }: QuestionsPageProps) {
  // Get the params and fetch the data
  const { category } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/categories/${category}`,
    { cache: "no-store" },
  );

  // Guard clause
  if (!res.ok) notFound();

  // Get the actual data and destructure it
  const questionsPack = (await res.json()) as QuestionsPack;

  // Returned JSX
  return <QuizSection questions={questionsPack} />;
}

export default QuestionsPage;
