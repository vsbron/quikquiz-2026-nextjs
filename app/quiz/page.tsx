import { Metadata } from "next";
import CategoriesSection from "@/components/CategoriesSection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Quiz Categories",
  description: `Browse all ${APP_NAME} categories, pick what you want to play, choose a difficulty level, and start a 10-question quiz in seconds.`,
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.CATEGORIES}`,
    title: `Quiz Categories | ${APP_NAME}`,
    description: `Browse all ${APP_NAME} categories, pick what you want to play, choose a difficulty level, and start a 10-question quiz in seconds.`,
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
    title: `Quiz Categories | ${APP_NAME}`,
    description: `Browse all ${APP_NAME} categories, pick what you want to play, choose a difficulty level, and start a 10-question quiz in seconds.`,
    images: ["/og-image.png"],
  },
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
