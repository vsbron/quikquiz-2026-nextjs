import Link from "next/link";
import { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import { LINKS } from "@/utils/constants";

// Meta data
export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "This quiz category doesn't exist. Go back and choose a different category.",
  robots: { index: false, follow: true },
};

// The page
function NotFoundPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Oops! You&apos;re lost!</SectionTitle>
      <p>
        Looks like the quiz category you&apos;re looking for does not exist.
      </p>
      <p>
        Please go back to <Link href={LINKS.HOME}>the homepage</Link> or{" "}
        <Link href={LINKS.CATEGORIES}>choose a different category</Link>.
      </p>
    </section>
  );
}

export default NotFoundPage;
