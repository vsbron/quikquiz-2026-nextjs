import { Metadata } from "next";
import AppInfoSection from "@/components/AppInfoSection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "App Info",
  description: `Learn what ${APP_NAME} is, how it works, and what makes it fun - categories, difficulty levels, instant results, and a clean quiz experience built for speed and simplicity.`,
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.APP_INFO}`,
    title: `App Info | ${APP_NAME}`,
    description: `Learn what ${APP_NAME} is, how it works, and what makes it fun - categories, difficulty levels, instant results, and a clean quiz experience built for speed and simplicity.`,
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
    title: `App Info | ${APP_NAME}`,
    description: `Learn what ${APP_NAME} is, how it works, and what makes it fun - categories, difficulty levels, instant results, and a clean quiz experience built for speed and simplicity.`,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.APP_INFO}`,
  },
};

// The page
function AppInfoPage() {
  // Returned JSX
  return <AppInfoSection />;
}

export default AppInfoPage;
