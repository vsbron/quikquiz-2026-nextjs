import Link from "next/link";

import { nav } from "@/utils/nav";

function Nav() {
  // Returned JSX
  return (
    <nav className="flex gap-4">
      {nav.map(({ url, label }) => (
        <Link href={url} key={url}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
