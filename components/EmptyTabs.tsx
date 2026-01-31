import Tab from "@/components/ui/Tab";

function EmptyTabs() {
  // Returned JSX
  return (
    <div className="flex gap-1">
      <Tab className="px-14 py-4" />
      <Tab className="px-14 py-4 bg-orange-50" />
      <Tab className="px-14 py-4 bg-orange-50" />
      <Tab className="px-14 py-4 bg-orange-50" />
    </div>
  );
}

export default EmptyTabs;
