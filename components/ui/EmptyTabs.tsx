"use client";
import { usePathname } from "next/navigation";
import Tab from "@/components/ui/Tab";
import { nav } from "@/utils/nav";
import { LINKS } from "@/utils/constants";

function EmptyTabs() {
  // Get the current pathname
  const pathname = usePathname();

  // Set the class for inactive tab
  const inactiveClass = "bg-[linear-gradient(to_bottom,#f9f9f9_40%,#ffe8c5)]";

  // Returned JSX
  return (
    <div className="flex gap-1 max-lg:hidden">
      {/* Tabs that correspond the nav */}
      {nav.slice(0, -2).map(({ url }) => {
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
      {/* Additional tab for results and app info */}
      <Tab
        className={`px-14 py-4 ${pathname.startsWith(LINKS.RESULTS) ? "bg-background" : inactiveClass}`}
      />{" "}
      <Tab
        className={`px-14 py-4 ${pathname.startsWith(LINKS.APP_INFO) ? "bg-background" : inactiveClass}`}
      />
    </div>
  );
}

export default EmptyTabs;
