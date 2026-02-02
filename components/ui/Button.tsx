import { ReactNode } from "react";

// Props interface
interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  small?: boolean;
}

// The component
function Button({ children, asChild, className, small = false }: ButtonProps) {
  // Preset button variant classes
  const buttonBig = "text-[18px] sm:text-[25px]";
  const buttonSmall = "text-[16px] sm:text-[18px]";
  const spanBig = "py-1 sm:py-2 px-4 sm:px-8 -translate-y-2 ";
  const spanSmall = "py-1 sm:py-2 px-3 sm:px-5 -translate-y-1.5";

  // Returned JSX
  return (
    <button
      className={`font-merriweather bg-accent rounded-lg cursor-pointer group ${small ? buttonSmall : buttonBig} ${asChild ? "" : "sm:px-5 sm:py-4"} ${className}`}
    >
      <span
        className={`${small ? spanSmall : spanBig} block rounded-lg bg-orange-50 border-3 border-chocolate/60 group-active:-translate-y-0.5 transition-transform`}
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
