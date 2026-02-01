import EmptyTabs from "@/components/EmptyTabs";
import LogoTab from "@/components/LogoTab";

function Header() {
  // Returned JSX
  return (
    <header className="justify-between items-end px-5 hidden md:flex">
      <LogoTab />
      <EmptyTabs />
    </header>
  );
}

export default Header;
