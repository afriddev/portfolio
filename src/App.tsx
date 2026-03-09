import { Route, Routes } from "react-router-dom";
import HomeMain from "./features/home/HomeMain";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="animate-spin-slow"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="#e4e4e7"
              strokeWidth="1.5"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.5"
              strokeDasharray="60 170"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-2xl font-black tracking-tight text-foreground animate-pulse-subtle">
            A
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-background cursor-default scroll-smooth">
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </div>
  );
}

export default App;
