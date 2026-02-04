"use client";
import Link from "next/link";
import ErrorMessage from "@/components/ui/ErrorMessage";
import SectionTitle from "@/components/ui/SectionTitle";
import { LINKS } from "@/utils/constants";

function Error({ error }: { error: Error }) {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Sorry, this Quiz is broken</SectionTitle>
      <p>
        There was an error loading this quiz. We are already looking into it.
      </p>
      <ErrorMessage error={error} />
      <p>
        Please go back to <Link href={LINKS.HOME}>the homepage</Link> or{" "}
        <Link href={LINKS.CATEGORIES}>choose different category</Link>.
      </p>
    </section>
  );
}

export default Error;
