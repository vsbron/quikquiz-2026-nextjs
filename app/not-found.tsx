import Link from "next/link";
import { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import { LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "This page doesn't exist. Browse categories and start a new quiz.",
  robots: { index: false, follow: true },
};

// The page
function NotFoundPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Page not found</SectionTitle>
      <p>The page you&apos;re looking for does not exist or has been moved.</p>
      <p>
        You can go back to <Link href={LINKS.HOME}>the homepage</Link> or try
        again later.
      </p>
    </section>
  );
}

export default NotFoundPage;
