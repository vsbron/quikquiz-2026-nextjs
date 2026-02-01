import Nav from "@/components/Nav";

function Footer() {
  // Returned JSX
  return (
    <footer className="px-8 py-4 border-t border-stone-300 flex justify-between text-[16px] items-center flex-col md:flex-row mt-auto">
      <div className="flex flex-col gap-0.5 max-md:items-center">
        <div className="max-sm:hidden">
          <Nav />
        </div>
        <div className="text-[15px] max-md:text-center">
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
      <div className="flex items-end gap-0.5 md:flex-col">
        <div className="max-md:hidden">
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
