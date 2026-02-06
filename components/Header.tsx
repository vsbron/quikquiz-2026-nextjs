import EmptyTabs from "@/components/ui/EmptyTabs";
import Hamburger from "@/components/ui/Hamburger";
import LogoTab from "@/components/ui/LogoTab";
import MobileLogo from "@/components/ui/MobileLogo";

function Header() {
  // Returned JSX
  return (
    <header className="justify-between items-center sm:items-end px-5 flex max-sm:border-b border-chocolate max-sm:px-5 max-sm:py-2 max-sm:sticky top-0 z-50 max-sm:bg-background">
      <div className="hidden sm:contents">
        <LogoTab />
        <EmptyTabs />
      </div>
      <div className="contents sm:hidden">
        <MobileLogo />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
