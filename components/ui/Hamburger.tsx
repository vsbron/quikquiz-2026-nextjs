"use client";
import { useEffect, useRef, useState } from "react";
import MobileNav from "@/components/ui/MobileNav";

function Hamburger() {
  // Set state value for opened menu and ref to a wrapper
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Use effect function that handles outside taps
  useEffect(() => {
    // Check if menu closed
    if (!isMenuOpen) return;

    // Tap handler
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      // Get the target, and check if it exists
      const target = e.target as Node | null;
      if (!target) return;

      // If click/tap is outside the hamburger+menu wrapper => close
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    // Add listeners
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isMenuOpen]);

  // Returned JSX
  return (
    <div ref={wrapperRef}>
      <div
        className={`block w-8 h-8 relative flex-center cursor-pointer transition-transform ${isMenuOpen ? "rotate-180" : "rotate-0"}`}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <div
          className={`absolute left-0 right-0 h-1.5 bg-chocolate rounded-lg transition-all ${isMenuOpen ? "top-3.5 rotate-45" : "top-1 rotate-0"}`}
        />
        <div
          className={`w-full h-1.5 bg-chocolate rounded-lg transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`absolute left-0 right-0 h-1.5 bg-chocolate rounded-lg transition-all ${isMenuOpen ? "bottom-3 -rotate-45" : "bottom-1 rotate-0"}`}
        />
      </div>
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default Hamburger;
