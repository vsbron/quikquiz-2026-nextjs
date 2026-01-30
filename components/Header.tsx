import Nav from "./Nav";

function Header() {
  // Returned JSX
  return (
    <header className="px-6 py-3 border-b border-stone-300 flex justify-between">
      <div>QuikQuiz logo</div>
      <Nav />
    </header>
  );
}

export default Header;
