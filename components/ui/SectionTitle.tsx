function SectionTitle({ children }: { children: string }) {
  // Returned JSX
  return (
    <h1 className="font-merriweather text-[40px] font-bold text-center mb-4">
      {children}
    </h1>
  );
}

export default SectionTitle;
