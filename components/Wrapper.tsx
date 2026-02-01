import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <div className="wrapper shadow-big relative max-sm:h-screen max-sm:flex max-sm:flex-col max-sm:justify-between">
      {children}
    </div>
  );
}

export default Wrapper;
