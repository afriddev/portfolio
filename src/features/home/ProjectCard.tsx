import { CiFolderOn, CiShare1 } from "react-icons/ci";
import { projectDataType } from "../../utils/projectData";
import { FaGithub } from "react-icons/fa";
import { MdPrivateConnectivity } from "react-icons/md";
import { LuDatabaseZap } from "react-icons/lu";
import { IoCodeOutline } from "react-icons/io5";

interface ProjectCardInterface {
  projectData: projectDataType;
}

function ProjectCard({ projectData }: ProjectCardInterface) {
  function handleGithubClick(link: string) {
    window.open(link);
  }

  function handleLiveClick(link: string) {
    window.open(link);
  }

  return (
    <div className="border border-gray-700 rounded p-6   lg:max-w-[20vw] lg:h-[40vh]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex  items-center gap-10 w-full justify-between  ">
          <CiFolderOn className="text-[#02ffff] h-10 w-10" />
          <div className="flex  items-center gap-3">
            {projectData.private && (
              <MdPrivateConnectivity
                title="Private"
                className="w-7 h-7  text-[#45b7b7] lg:hover:text-[#02ffff]"
              />
            )}
            <div className="flex flex-row items-center gap-4">
              {projectData.viewCode && (
                <div className="relative" title="Frontend Code">
                  <FaGithub
                    onClick={() => {  
                      if (projectData.codeLink)
                        handleGithubClick(projectData.codeLink);
                    }}
                    className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]"
                  />
                  <IoCodeOutline className="w-3 -right-1 -top-2 absolute  h-3 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]" />
                </div>
              )}
              {projectData.backend && (
                <div className="relative " title="Backend Code">
                  <LuDatabaseZap className="w-3 -right-1 -top-2 absolute  h-3 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]" />
                  <FaGithub
                    onClick={() => {
                      if (projectData.backendCodeLink)
                        handleGithubClick(projectData.backendCodeLink);
                    }}
                    className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]"
                  />
                </div>
              )}

              {projectData.openProject && (
                <CiShare1
                  title="Live"
                  onClick={() => {
                    if (projectData.link) handleLiveClick(projectData.link);
                  }}
                  className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]"
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-gray-200 h-14 text-md  font-bold">
          {projectData.title}
        </div>
        <div className="text-gray-400 lg:h-[12vh] text-sm">{projectData.shortDesc}</div>
        <div className="flex flex-grow flex-wrap   ">
          {projectData?.strategy?.map((item, index) => {
            return (
              <div className="text-[12px] border  text-foreground  px-3" key={index}>
                {item}
                {index < projectData?.strategy.length - 1 && ","}
              </div>
            );
          })}
        </div>

        <div className="flex flex-grow flex-wrap mt-3">
          {projectData?.technologies?.map((item, index) => {
            return (
              <div className="text-[12px]  text-foreground" key={index}>
                {item}
                {index < projectData?.technologies.length - 1 && ","}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
