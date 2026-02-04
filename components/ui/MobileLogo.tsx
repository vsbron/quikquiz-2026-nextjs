import Link from "next/link";
import Image from "next/image";

import { APP_NAME, LINKS } from "@/utils/constants";

function MobileLogo() {
  // Returned JSX
  return (
    <Link
      href={LINKS.HOME}
      className="flex items-center font-merriweather font-bold gap-2"
    >
      <Image src="/logo.svg" width={60} height={33} alt={`${APP_NAME} Logo`} />{" "}
      QuickQuiz
    </Link>
  );
}

export default MobileLogo;
