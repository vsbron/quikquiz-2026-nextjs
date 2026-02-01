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
      className={`text-[27px] font-cherry-swash bg-accent rounded-lg cursor-pointer group ${asChild ? "" : "px-5 py-4"} ${className}`}
    >
      <span className="block py-2 px-8 rounded-lg bg-orange-50 border border-chocolate/30 -translate-y-2 group-active:-translate-y-0.5 transition-transform">
        {children}
      </span>
    </button>
  );
}

export default Button;
