import Link from "next/link";

function Footer() {
  // Returned JSX
  return (
    <footer className="px-8 py-4 border-t border-stone-300 flex justify-between text-[15px]">
      <div className="flex flex-col">
        <div>
          <Link href="/app-info">App info</Link> |{" "}
          <a
            href="https://github.com/vsbron/quikquiz-2026-nextjs"
            target="_blank"
          >
            GitHub repository
          </a>
        </div>
        <div>Built by VSBroN as a portfolio project</div>
      </div>
      <div className="flex flex-col items-end">
        <div>Small QuikQuiz logo</div>
        <div>©{new Date().getFullYear()}. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
