import { ReactNode } from "react";

// Props interface
interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

// The component
function Button({ children, asChild, className }: ButtonProps) {
  // Returned JSX
  return (
    <button
      className={`border rounded-md  cursor-pointer ${asChild ? "" : "px-4 py-2"} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
