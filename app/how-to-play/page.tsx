import { Metadata } from "next";
import HowToPlaySection from "@/components/HowToPlaySection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "How to Play - Rules, Scoring & Tips",
  description: `Learn how to play ${APP_NAME}: pick a category, choose a difficulty, answer 10 questions, and get instant results with score breakdown, chart stats, and wrong answers review.`,
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.HOW_TO_PLAY}`,
    title: `How to Play - Rules, Scoring & Tips | ${APP_NAME}`,
    description: `Learn how to play ${APP_NAME}: pick a category, choose a difficulty, answer 10 questions, and get instant results with score breakdown, chart stats, and wrong answers review.`,
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
    title: `How to Play - Rules, Scoring & Tips | ${APP_NAME}`,
    description: `Learn how to play ${APP_NAME}: pick a category, choose a difficulty, answer 10 questions, and get instant results with score breakdown, chart stats, and wrong answers review.`,
    images: ["/og-image.png"],
  },
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
