/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Animate from "../../utils/animations/Animate";
import ProjectCard from "./ProjectCard";
import { useUpdateProjectDetails } from "../../hooks/appHooks";

function Projects() {
  const [selectedType, setSelectedType] = useState<
    "ALL" | "WEB" | "APP" | "API" | "OPENSOURCE"
  >("ALL");

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
                  11
                </div>
                <h3
                  className={`${
                    selectedType === "ALL"
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
                    setSelectedType("WEB");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  6
                </div>
                <h3
                  className={`${
                    selectedType === "WEB"
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
                    setSelectedType("APP");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  1
                </div>
                <h3
                  className={`${
                    selectedType === "APP"
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
                  3
                </div>
                <h3
                  className={`${
                    selectedType === "API"
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
                    setSelectedType("OPENSOURCE");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  1
                </div>
                <h3
                  className={`${
                    selectedType === "OPENSOURCE"
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

      <div className="flex flex-col  items-center justify-center mt-[5vh] pb-[5vh]">
        <div className="flex flex-col lg:flex-row gap-10 pt-[5vh]">
          {(selectedType === "WEB" || selectedType === "ALL") && (
            <div className="flex flex-col lg:flex-row gap-10">
              <Animate delay={300} type="slideUp">
                <ProjectCard
                  callBack={() => {
                    handleCallBack("3LINES");
                  }}
                  category="Web Development"
                  title="3 Lines UI"
                  image="cpd/cover.png"
                />
              </Animate>
            </div>
          )}
          {(selectedType === "WEB" || selectedType === "ALL") && (
            <div className="flex flex-col lg:flex-row gap-10">
              <Animate delay={300} type="slideUp">
                <ProjectCard
                  callBack={() => {
                    handleCallBack("CPD");
                  }}
                  category="Web Development"
                  title="CPD Apiserver UI"
                  image="apiserver/cover.png"
                />
              </Animate>
            </div>
          )}
          {(selectedType === "WEB" || selectedType === "ALL") && (
            <div className="flex flex-col lg:flex-row gap-10">
              <Animate delay={300} type="slideUp">
                <ProjectCard
                  callBack={() => {
                    handleCallBack("EMAILAPI");
                  }}
                  category="Web Development"
                  title="Free Email API"
                  image="emailapi/cover.png"
                />
              </Animate>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-[5vh]">
          {(selectedType === "WEB" || selectedType === "ALL") && (
            <Animate delay={600} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("FININFOLIB");
                }}
                category="Web Development"
                title="Fininfolib Company"
                image="fininfolib/cover.PNG"
              />
            </Animate>
          )}
          {(selectedType === "WEB" || selectedType === "ALL") && (
            <Animate delay={900} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("DHOOTHA");
                }}
                category="Web Development"
                title="Dhootha Promotions"
                image="dhootha/cover.PNG"
              />
            </Animate>
          )}
          {(selectedType === "WEB" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("FRESHSLICE");
                }}
                category="Web Development"
                title="Fresh SLice"
                image="freshslice/cover.PNG"
              />
            </Animate>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-[5vh]">
          {(selectedType === "OPENSOURCE" || selectedType === "ALL") && (
            <Animate delay={600} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("EMAILSENDER");
                }}
                category="Open Source Contribution"
                title="Email Sender"
                image="emailapihost/cover.PNG"
              />
            </Animate>
          )}

          {(selectedType === "APP" || selectedType === "ALL") && (
            <Animate delay={900} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("APP");
                }}
                category="App Development"
                title="Tailoring App"
                image="app/cover.png"
              />
            </Animate>
          )}

          {(selectedType === "API" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("FASTAPI");
                }}
                category="API Development"
                title="Fast API"
                image="fastapi/cover.png"
              />
            </Animate>
          )}
        </div>

        {(selectedType == "API" || selectedType === "ALL") && (
          <div className="flex flex-col lg:flex-row gap-10 pt-[5vh]">
            <Animate delay={600} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("TAILORINGAPI");
                }}
                category="API Development"
                title="Tailoring API"
                image="database/cover2.png"
              />
            </Animate>
            <Animate delay={900} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("FININFOLIBAPI");
                }}
                category="API Development"
                title="Fininfolib API"
                image="database/cover.png"
              />
            </Animate>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
