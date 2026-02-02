import Link from "next/link";

import Tab from "@/components/ui/Tab";

import { LINKS } from "@/utils/constants";

function LogoTab() {
  // Returned JSX
  return (
    <Tab className="px-6 py-2">
      <Link
        className="text-xl flex items-center gap-2 leading-0"
        href={LINKS.HOME}
      >
        <span className="font-black text-3xl">QxQ</span>
        <span className="font-merriweather">QuikQuiz</span>
      </Link>
    </Tab>
  );
}

export default LogoTab;
