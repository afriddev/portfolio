import { Route, Routes } from "react-router-dom";
import HomeMain from "./features/home/HomeMain";

function App() {
  return (
    <div className="relative bg-background cursor-default scroll-smooth">
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </div>
  );
}

export default App;
