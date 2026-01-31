"use client";
import { usePathname } from "next/navigation";

import Tab from "@/components/ui/Tab";

import { nav } from "@/utils/nav";

function EmptyTabs() {
  // Get the current pathname
  const pathname = usePathname();

  // Set the class for inactive tab
  const inactiveClass = "bg-[linear-gradient(to_bottom,#FFFAF0_50%,#FFEDD5)]";

  // Returned JSX
  return (
    <div className="flex gap-1">
      {/* Tabs that correspond the nav */}
      {nav.slice(0, -1).map(({ url }) => {
        // Check if pathname fits the tab
        const isActive =
          url === "/" ? pathname === "/" : pathname.startsWith(url);

        // Return the tab with appropriate class
        return (
          <Tab
            key={url}
            className={`px-14 py-4 ${isActive ? "bg-background" : inactiveClass}`}
          />
        );
      })}

      {/* Additional tab for results (not in the nav) */}
      <Tab
        className={`px-14 py-4 ${pathname.startsWith("/results") ? "bg-background" : inactiveClass}`}
      />
    </div>
  );
}

export default EmptyTabs;
