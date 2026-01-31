import EmptyTabs from "@/components/EmptyTabs";
import LogoTab from "@/components/LogoTab";

function Header() {
  // Returned JSX
  return (
    <header className="flex justify-between items-end px-5">
      <LogoTab />
      <EmptyTabs />
    </header>
  );
}

export default Header;
