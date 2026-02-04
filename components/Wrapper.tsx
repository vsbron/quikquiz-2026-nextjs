import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <div className="wrapper shadow-big relative max-sm:flex max-sm:flex-col max-sm:min-h-[calc(100vh-50px)]">
      {children}
    </div>
  );
}

export default Wrapper;
