import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/projectDetail";
import Animate from "./utils/animations/Animate";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import AppSpinner from "./utils/AppSpinner";
import { useEffect, useState } from "react";

function App() {
  const selectedProject = localStorage.getItem("selectedProject");
  const location = useLocation();

  function handleEmailClick() {
    const mailtoUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=afridayan01@gmail.com&su=Hey";
    window.open(mailtoUrl, "_blank");
  }

  function handleOpenSocialLink(type: string) {
    switch (type) {
      case "INSTA":
        window.open("https://www.instagram.com/afrid.dev/");
        break;

      case "X":
        window.open("https://x.com/AFRIDANON");

        break;
      case "GITHUB":
        window.open("https://github.com/afriddev");

        break;
      case "LINKEDIN":
        window.open("https://www.linkedin.com/in/afriddev/");

        break;
    }
  }



  const [loading,setLoading] = useState<boolean>(true)


  useEffect(()=>{
    setTimeout(()=>{setLoading(!loading)},600)
  },[])




  return (
    <div className=" relative cursor-default text-foreground scroll-smooth ">

      {
        loading && <AppSpinner />
      }
      {(!selectedProject ||
        selectedProject === "null" ||
        location.pathname === "/") && (
        <div className="relative w-full h-full  ">
          <div className="absolute h-[100vh] bg-black/25 inset-0  z-[201]"></div>
          <div className="absolute  h-full w-full  min-h-[100vh] z-[200] ">
            <img src="cover.jpg" className="object-cover h-full w-full" />
          </div>
          <div className="circle h-[50px] w-[50px]  rounded-full z-[202] absolute top-[22.5vh] left-[56vw] animate-move-left-right"></div>
          <div className="fixed z-[999]  bottom-10 flex-row justify-between w-full px-[2vw]  hidden lg:flex ">
            <div>
              <Animate delay={700}>
                <div className="flex flex-row gap-6 rotate-90 items-center ml-[-12vw] justify-center">
                  <div className="text-center flex  items-center justify-center gap-4">
                    <h3
                      onClick={() => {
                        handleOpenSocialLink("GITHUB");
                      }}
                      className=" -rotate-90 flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
                    >
                      {" "}
                      <FaGithub className=" h-6 w-5" />
                    </h3>
                    <h3
                      onClick={() => {
                        handleOpenSocialLink("LINKEDIN");
                      }}
                      className=" -rotate-90 flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
                    >
                      <CiLinkedin className=" h-6 w-5" />
                    </h3>
                    <h3
                      onClick={() => {
                        handleOpenSocialLink("X");
                      }}
                      className=" -rotate-90 flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
                    >
                      <FaXTwitter className=" h-6 w-5" />
                    </h3>
                    <h3
                      onClick={() => {
                        handleOpenSocialLink("INSTA");
                      }}
                      className=" -rotate-90 flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
                    >
                      <CiInstagram className=" h-6 w-5" />
                    </h3>
                  </div>
                  <div className="w-[17vw] h-[1px] bg-[#02ffff] "></div>
                </div>
              </Animate>
            </div>

            <div>
              <Animate delay={700}>
                <div className="flex flex-row gap-6 rotate-90 items-center -mr-[7vw]">
                  <div
                    onClick={handleEmailClick}
                    className="text-xs cursor-pointer   lg:hover:scale-105 lg:hover:text-primary "
                  >
                    afridayan01@gmail.com
                  </div>
                  <div className="w-[10vw] h-[1px] bg-[#02ffff] "></div>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      )}

      <div className="z-[998] absolute inset-0   ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectdetail" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
