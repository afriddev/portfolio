import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/projectDetail";

function App() {
  const selectedProject = localStorage.getItem("selectedProject")

  return (
    <div className=" relative cursor-default text-foreground scroll-smooth ">
      {!selectedProject && (
        <div className="relative w-full h-full  ">
          <div className="absolute h-[100vh] bg-black/25 inset-0  z-[201]"></div>
          <div className="absolute  h-full w-full  min-h-[100vh] z-[200] ">
            <img src="cover.jpg" className="object-cover h-full w-full" />
          </div>
          <div className="circle h-[50px] w-[50px]  rounded-full z-[202] absolute top-[22.5vh] left-[56vw] animate-move-left-right"></div>
        </div>
      )}

      <div className="z-[998] absolute inset-0   ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectdetail" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
