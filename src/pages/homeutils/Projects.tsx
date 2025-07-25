/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Animate from "../../utils/animations/Animate";
import ProjectCard from "./ProjectCard";
import { useUpdateProjectDetails } from "../../hooks/appHooks";
import { projectData, projectDataType } from "../../utils/projectData";

function Projects() {
  const [selectedType, setSelectedType] = useState<
    "web" | "app" | "openSource" | "API" | "all"
  >("all");

  const { updateProjectDetails } = useUpdateProjectDetails();

  function handleCallBack(project: string) {
    updateProjectDetails(project);
  }

  return (
    <div className="mt-[10vh] px-4">
      <div className="text-xs flex flex-col gap-5 lg:items-center justify-center lg:gap-2  lg:flex-row hover:text-foreground/50">
        <div className="flex gap-3">
          <Animate type="slideDown" delay={200}>
            <div className="cursor-pointer  flex items-center ">
              <div
                className="relative flex "
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("ALL");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  {projectData.length}
                </div>
                <h3
                  className={`${selectedType === "all"
                    ? "scale-105 border-b border-primary text-primary"
                    : "text-foreground/50"
                    }  hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Filer by ALL
                </h3>
              </div>
              <div className=" ml-4 lg:ml-2"> /</div>
            </div>
          </Animate>

          <Animate type="slideDown" delay={400}>
            <div className="cursor-pointer  flex items-center gap-3">
              <div
                className="relative flex "
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("web");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  {projectData.filter((item: projectDataType) => item.category.includes("web")).length}
                </div>
                <h3
                  className={`${selectedType === "web"
                    ? "scale-105 border-b border-primary text-primary"
                    : "text-foreground/50"
                    }  hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Web Development
                </h3>
              </div>
              <div className=" ml-4 lg:ml-2 hidden lg:block"> /</div>
            </div>
          </Animate>
        </div>

        <div className="flex gap-3">
          <Animate type="slideDown" delay={600}>
            <div className="cursor-pointer  flex items-center ">
              <div
                className="relative flex "
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("app");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  {projectData.filter((item: projectDataType) => item.category.includes("app")).length}
                </div>
                <h3
                  className={`${selectedType === "app"
                    ? "scale-105 border-b border-primary text-primary"
                    : "text-foreground/50"
                    }  hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  App Development
                </h3>
              </div>
              <div className=" ml-4 lg:ml-2"> /</div>
            </div>
          </Animate>
          <Animate type="slideDown" delay={800}>
            <div className="cursor-pointer  flex items-center ">
              <div
                className="relative flex "
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("API");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  {projectData.filter((item: projectDataType) => item.category.includes("API")).length}
                </div>
                <h3
                  className={`${selectedType === "API"
                    ? "scale-105 border-b border-primary text-primary"
                    : "text-foreground/50"
                    }  hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  API Developemnt
                </h3>
              </div>
              <div className=" ml-4 lg:ml-2"> /</div>
            </div>
          </Animate>
        </div>

        <div className="flex">
          <Animate type="slideDown" delay={800}>
            <div className="cursor-pointer  flex items-center ">
              <div
                className="relative flex "
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("openSource");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  {projectData.filter((item: projectDataType) => item.category.includes("openSource")).length}
                </div>
                <h3
                  className={`${selectedType === "openSource"
                    ? "scale-105 border-b border-primary text-primary"
                    : "text-foreground/50"
                    }  hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Open Source Contribution
                </h3>
              </div>
            </div>
          </Animate>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center justify-center w-[90vw]  ">
          <div className="flex flex-grow flex-wrap gap-3 items-center justify-center ">
            {
              projectData.map((item, index) => {
                return <div key={index}>
                  <ProjectCard projectData={item} />
                </div>
              })
            }

          </div>
        </div>
      </div>
    </div >
  );
}

export default Projects;
