import { projectType, useAppContext } from "../utils/AppContext";
import NavBar from "../utils/NavBar";
import { MdChevronRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import BottomNav from "./homeutils/BottomNav";
import Animate from "../utils/animations/Animate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../utils/projectData";

function ProjectDetail() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const selectedProject: projectType =
    projectData[localStorage.getItem("selectedProject") as never];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSeeProject() {
    if (selectedProject?.openProject) {
      window.open(selectedProject?.openProjectLink);
    } else {
      window.open(selectedProject?.viewCodeLink);
    }
  }

  return (
    <div className=" w-full h-full flex flex-col  ">
      <div className="bg-background pt-[2vh] pl-2 ">
        <div>
          <NavBar />
        </div>
        <div className="mt-[10vh] px-[5vw]">
          <Animate delay={150} type="slideLeft">
            <div>
              <h1 className="text-[40px] font-semibold">
                {selectedProject?.projectTitle}
              </h1>
            </div>
          </Animate>
          <div className="mt-[5vh] mb-[5vh]">
            <Animate delay={300} type="slideLeft">
              <div className="flex text-foreground/60 items-center">
                <span
                  onClick={() => {
                    localStorage.setItem("selectedProject", null as never);

                    dispatch({
                      type: "setScrollView",
                      payload: "WORK",
                    });
                    navigate("/");
                  }}
                  className="cursor-pointer lg:hover:scale-105 lg:hover:border-b border-primary lg:hover:text-primary"
                >
                  Home
                </span>{" "}
                <MdChevronRight className="w-6 h-6" />{" "}
                {selectedProject?.projectTitle}
              </div>
            </Animate>
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <Animate delay={500} type="slideLeft">
                <div className="mt-[5vh]">
                  <p className="text-foreground/90 lg:w-[50vw]">
                    {selectedProject?.projectDesc}
                  </p>
                </div>{" "}
              </Animate>

              <div className="flex flex-col gap-4">
                <div className="mt-[5vh] flex justify-between gap-10 ">
                  <Animate delay={300} type="slideUp">
                    <div className="border-t border-foreground/40  pt-5 w-[40vw] lg:w-[10vw]">
                      <h1>Strategy</h1>
                      <div className="flex flex-col  mt-1">
                        {selectedProject?.strategy?.map((item, index) => (
                          <h2 className="text-foreground/70" key={index}>
                            {item}
                          </h2>
                        ))}
                      </div>
                    </div>
                  </Animate>
                  <Animate delay={600} type="slideUp">
                    <div className="border-t border-foreground/40 w-[40vw] lg:w-[10vw]  pt-5">
                      <h1>Client</h1>
                      <div className="flex flex-col  mt-1">
                        <h2 className="text-foreground/70">
                          {selectedProject?.client}
                        </h2>
                      </div>
                    </div>
                  </Animate>
                </div>

                <div className="mt-[5vh] flex justify-between gap-10">
                  <Animate delay={500} type="slideUp">
                    <div className="border-t border-foreground/40  pt-5 w-[40vw] lg:w-[10vw]">
                      <h1>Technology</h1>
                      <div className="flex flex-col  mt-1">
                        <h2 className="text-foreground/70">
                          {selectedProject?.technology}
                        </h2>
                      </div>
                    </div>
                  </Animate>
                </div>
              </div>
            </div>

            <div className="mt-[5vh]">
              <Animate delay={300} type="slideLeft">
                <h3
                  onClick={handleSeeProject}
                  className="flex items-center lg:hover:scale-105 lg:hover:border-b border-primary lg:hover:text-primary w-fit cursor-pointer"
                >
                  {selectedProject?.openProject ? "Open Project" : "See Code"}
                  <FaArrowRight className="w-5 h-5 ml-3 mt-[0.1rem]" />
                </h3>
              </Animate>
            </div>

            <div
              className={` mt-[5vh] justify-center items-center ${
                selectedProject?.mobileView
                  ? "flex flex-col lg:flex-row gap-4"
                  : "flex flex-col  gap-3  w-full  "
              }`}
            >
              {selectedProject?.images?.map((item, index) => {
                return (
                  <Animate type="slideLeft" delay={index * 200} key={index}>
                    <img
                      className={`rounded-sm  ${
                        selectedProject?.mobileView
                          ? "h-[60vh] w-[60vw] lg:h-[50vh] lg:w-[14vw]"
                          : "lg:max-w-[60vw]"
                      } `}
                      key={index}
                      src={item}
                    />
                  </Animate>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pb-[3vh] mt-[10vh]">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
export default ProjectDetail;
