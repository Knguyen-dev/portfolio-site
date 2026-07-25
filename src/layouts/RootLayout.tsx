import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { APIData } from "../types";

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

const CACHE_KEY = "apiDataCache";
const NUM_MINUTES = 24 * 60 // One day of caching
const CACHE_DURATION = NUM_MINUTES * 60 * 1000; // 1 minute in milliseconds

export default function RootLayout() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<APIData | null>(null);

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() => {
    const getData = async () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        const now = Date.now();
        if (now - parsed.timestamp < CACHE_DURATION) {
          // Use cached data
          setData(parsed.data);
          setLoading(false);
          return;
        }
      }

      // ATP, no cached data, or existing cached data went over the duration, so continue fetching response
      try {
        // 
        const response = await fetch("https://api.jsonbin.io/v3/b/68216f538a456b79669bf65a")
        if (!response.ok) {
          throw new Error("Error getting data!")
        }
        const data = (await response.json()).record
        
        setData(data)
        // Save to cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: data,
          timestamp: Date.now()
        }));
      } catch (err: any) {
        console.error(err.message || "Network error it seems!")
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  if (loading) {
    return (
      <div className="tw-min-h-screen tw-bg-slate-900 tw-flex tw-justify-center tw-items-center">
        <p className="tw-text-white">Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="tw-min-h-screen">
      <Spotlight />
      <Outlet context={{ data }}/>
    </div>
  );
}
