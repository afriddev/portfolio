import { Route, Routes } from "react-router-dom";
import HomeMain from "./features/home/HomeMain";
import { useEffect, useState } from "react";
import AppSpinner from "./utils/AppSpinner";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 2300);
  }, []);

  if (loading) return <AppSpinner />;
  return (
    <div className=" relative bg-[#011030]  cursor-default text-foreground scroll-smooth ">
      <div className="z-[800] absolute inset-0   ">
        <Routes>
          <Route path="/" element={<HomeMain />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
