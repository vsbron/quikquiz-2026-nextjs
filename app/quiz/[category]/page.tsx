import QuizSection from "@/components/QuizSection";
import { notFound } from "next/navigation";

// Props interface
interface QuestionsPageProps {
  params: Promise<{ category: string }>;
}

// The component
async function QuestionsPage({ params }: QuestionsPageProps) {
  // Get the params and fetch the data
  const { category } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/categories/${category}`,
    {
      cache: "no-store",
    },
  );

  // Guard clause
  if (!res.ok) notFound();

  // Get the actual data and destructure it
  const questionsPack = (await res.json()) as QuestionsPack;

  // Returned JSX
  return <QuizSection questions={questionsPack} />;
}

export default QuestionsPage;
