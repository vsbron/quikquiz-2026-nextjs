import { Metadata } from "next";
import AppInfoSection from "@/components/AppInfoSection";
import { APP_NAME, LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "App Info",
  description: `Learn what ${APP_NAME} is, how it works, and what makes it fun - categories, difficulty levels, instant results, and a clean quiz experience built for speed and simplicity.`,
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
