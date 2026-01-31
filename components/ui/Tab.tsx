import { ReactNode } from "react";

// Props interface
interface TabProps {
  children?: ReactNode;
  className?: string;
}

// The component
function Tab({ children, className }: TabProps) {
  // Returned JSX
  return (
    <div
      className={`bg-background rounded-t-lg border-b-0 shadow-big ${className}`}
    >
      {children}
    </div>
  );
}

export default Tab;
