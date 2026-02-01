import Nav from "@/components/Nav";

function Footer() {
  // Returned JSX
  return (
    <footer className="px-8 py-4 border-t border-stone-300 flex justify-between text-[16px]">
      <div className="flex flex-col gap-0.5">
        <Nav />
        <div className="text-[15px]">
          Built by VSBroN as a{" "}
          <a
            href="https://github.com/vsbron/quikquiz-2026-nextjs"
            target="_blank"
            className="underline"
          >
            portfolio project
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end gap-0.5">
        <div>
          <span className="font-bold">QxQ</span> QuikQuiz
        </div>
        <div className="text-[15px]">
          ©{new Date().getFullYear()}. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
