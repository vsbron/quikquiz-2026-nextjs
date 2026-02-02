"use client";
import Link from "next/link";

import SectionTitle from "@/components/ui/SectionTitle";

import { LINKS } from "@/utils/constants";

function error() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Oops! You&apos;re lost!</SectionTitle>
      <p>Looks like the category you&apos;re looking for does not exist.</p>
      <p>
        Please navigate to <Link href={LINKS.HOME}>our homepage</Link> or{" "}
        <Link href={LINKS.CATEGORIES}>choose correct category</Link>.
      </p>
    </section>
  );
}

export default error;
