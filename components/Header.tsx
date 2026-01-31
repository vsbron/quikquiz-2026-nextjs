import EmptyTabs from "./EmptyTabs";
import LogoTab from "./LogoTab";

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
