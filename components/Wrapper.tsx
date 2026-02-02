import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <div className="wrapper shadow-big relative max-sm:flex max-sm:flex-col max-sm:min-h-screen">
      {children}
    </div>
  );
}

export default Wrapper;
