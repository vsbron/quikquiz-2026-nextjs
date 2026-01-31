import Link from "next/link";

import Tab from "@/components/ui/Tab";

function LogoTab() {
  // Returned JSX
  return (
    <Tab className="px-6 py-2">
      <Link className="text-xl flex items-center gap-2 leading-0" href="/">
        <span className="font-black text-3xl">QxQ</span>QuikQuiz
      </Link>
    </Tab>
  );
}

export default LogoTab;
