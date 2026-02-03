// Props interface
interface SectionTitleProps {
  children: string;
  className?: string;
}

// The component
function SectionTitle({ children, className = "" }: SectionTitleProps) {
  // Returned JSX
  return (
    <h1
      className={`font-merriweather text-[40px] font-bold text-center mb-8 ${className}`}
    >
      {children}
    </h1>
  );
}

export default SectionTitle;
