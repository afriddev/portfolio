/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useAppContext } from "../../utils/AppContext";
import BottomNav from "../../utils/BottomNav";
import Experience from "./Experience";
import Projects from "./Projects";
import HomeBanner from "./HomeBanner";
import NavBar from "../../utils/NavBar";
import AboutMe from "./AboutMe";
import MyExpertise from "./MyExpertise";

function HomeMain() {
  const { scrollView, dispatch } = useAppContext();
  const targetDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const temp = scrollView;

    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
      dispatch({
        type: "setScrollView",
        payload: undefined,
      });
    }
    localStorage.setItem("selectedProject", null as never);

    dispatch({
      type: "setScrollView",
      payload: temp,
    });
  }, [scrollView, targetDivRef]);

  return (
    <div className=" w-full h-full flex flex-col">
      <NavBar />
      <div className="bg-[#030011] items-center justify-center flex flex-col lg:gap-[15vh]">
        <div className="flex flex-col lg:w-[60vw] lg:gap-[15vh] w-full p-5">
          <HomeBanner />
          <AboutMe /> {/*Scroll*/}
          <div ref={scrollView === "EXPERIENCE" ? targetDivRef : null}>
            <Experience />
          </div>
          <MyExpertise scrollView={scrollView} targetDivRef={targetDivRef} />
        </div>

        <div className=" flex flex-col lg:w-[70vw] lg:gap-[15vh] w-full p-5">
          
          <div ref={scrollView === "WORK" ? targetDivRef : null}>
            <Projects />
          </div>

          

          <div ref={scrollView === "CONTACT" ? targetDivRef : null}>
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeMain;
