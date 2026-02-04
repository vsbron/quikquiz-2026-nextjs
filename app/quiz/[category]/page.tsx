import QuizSection from "@/components/QuizSection";

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
  if (!res.ok) throw new Error("Category not found");

  // Get the actual data and destructure it
  const questionsPack = (await res.json()) as QuestionsPack;

  // Returned JSX
  return <QuizSection questions={questionsPack} />;
}

export default QuestionsPage;
