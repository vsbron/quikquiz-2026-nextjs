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
      className={`text-[18px] sm:text-[27px] font-merriweather bg-accent rounded-lg cursor-pointer group ${asChild ? "" : "sm:px-5 sm:py-4"} ${className}`}
    >
      <span className="block py-1 px-4  sm:py-2 sm:px-8 rounded-lg bg-orange-50 border-3 border-chocolate/60 -translate-y-2 group-active:-translate-y-0.5 transition-transform">
        {children}
      </span>
    </button>
  );
}

export default Button;
