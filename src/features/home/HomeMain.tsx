/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useUpdateProjectDetails } from "../../hooks/appHooks";
import Animate from "../../utils/animations/Animate";
import { useAppContext } from "../../utils/AppContext";
import ExpertiseCard from "../../utils/ExpertiseCard";
import BottomNav from "../../utils/BottomNav";
import Experience from "./Experience";
import Projects from "./Projects";
import HomeBanner from "./HomeBanner";
import NavBar from "../../utils/NavBar";
import AboutMe from "./AboutMe";
import MyExpertise from "./MyExpertise";
import MyWork from "./MyWork";

function HomeMain() {
  const { updateProjectDetails } = useUpdateProjectDetails();

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
      <div className="bg-[#030011]">
        <HomeBanner />
        <AboutMe />
        <MyExpertise scrollView={scrollView} targetDivRef={targetDivRef} />
        <MyWork
          scrollView={scrollView}
          targetDivRef={targetDivRef}
          updateProjectDetails={updateProjectDetails}
        />
        <Projects />
        <div ref={scrollView === "EXPERIENCE" ? targetDivRef : null}>
          <Experience />
        </div>
        <div ref={scrollView === "CONTACT" ? targetDivRef : null}>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
export default HomeMain;
