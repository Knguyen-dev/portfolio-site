import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Spotlight Component (Smooth & Performant)
function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="tw-pointer-events-none tw-fixed tw-inset-0 tw-z-30 tw-transition-opacity tw-duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--x, -1000px) var(--y, -1000px), rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}

export default function RootLayout() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="tw-min-h-screen">
      <Spotlight />
      <Outlet />
    </div>
  );
}
