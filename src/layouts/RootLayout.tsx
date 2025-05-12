import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { APIData } from "../types";

const CACHE_KEY = "apiDataCache";
const NUM_MINUTES = 24 * 60 // One day of caching
const CACHE_DURATION = NUM_MINUTES * 60 * 1000; // 1 minute in milliseconds


export default function RootLayout() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<APIData | null>(null);

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  // You'd want to cache this later I think
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
    <div className="tw-min-h-screen tw-bg-slate-900">
      <Outlet context={{ data }}/>
    </div>
  );
}
