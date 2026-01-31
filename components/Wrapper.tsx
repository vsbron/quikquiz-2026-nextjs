import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  // Returned JSX
  return <div className="wrapper shadow-big relative">{children}</div>;
}

export default Wrapper;
