import EmptyTabs from "@/components/ui/EmptyTabs";
import LogoTab from "@/components/ui/LogoTab";

function Header() {
  // Returned JSX
  return (
    <header className="justify-between items-end px-5 hidden sm:flex">
      <LogoTab />
      <EmptyTabs />
    </header>
  );
}

export default Header;
