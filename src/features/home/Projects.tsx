/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../../utils/projectData";
function Projects() {
  const [showMore, setShowMore] = useState<boolean>(false);


  return (
    <div className="">
      <div className="flex gap-4 items-center lg:ml-[4.5vw]">
        <label className="text-[#02ffff]">
          04.
          <span className="text-2xl text-white text-nowrap">
            My Projects
          </span>
        </label>
        <div className="h-[0.4px] w-full lg:w-[20vw]   bg-[#02ffff]/40"></div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 ">
        <div className="flex items-center justify-center ">
          <div className="flex flex-grow flex-wrap gap-3 items-center justify-center ">
            {projectData
              .slice(0, showMore ? projectData.length + 1 : 6)
              .map((item, index) => {
                return (
                  <div key={index}>
                    <ProjectCard projectData={item} />
                  </div>
                );
              })}
          </div>
        </div>
        <div
          onClick={() => {
            setShowMore(!showMore);
          }}
          className="mt-10   border lg:text-[#02ffff]/60 lg:hover:text-[#02ffff]    border-[#02ffff]/70 lg:hover:border-[#02ffff]  w-fit px-6  lg:px-12  cursor-pointer py-2 lg:py-3 flex items-center text-[#02ffff] border-[#02ffff]  "
        >
          {showMore ? "Show Less" : "Show More"}
        </div>
      </div>
    </div>
  );
}

export default Projects;
