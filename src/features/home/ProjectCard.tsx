import { CiFolderOn, CiShare1 } from "react-icons/ci";
import { projectDataType } from "../../utils/projectData";
import { FaGithub } from "react-icons/fa";
import { MdPrivateConnectivity } from "react-icons/md";

interface ProjectCardInterface {
  projectData: projectDataType;
}

function ProjectCard({ projectData }: ProjectCardInterface) {
  return (
    <div className="border border-gray-700 rounded p-6 lg:max-w-[20vw] lg:h-[45vh]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex  items-center gap-10 w-full justify-between  ">
          <CiFolderOn className="text-[#02ffff] h-10 w-10" />
          {projectData.private ? (
            <MdPrivateConnectivity className="w-7 h-7  text-[#45b7b7] lg:hover:text-[#02ffff]" />
          ) : (
            <div className="flex flex-row items-center gap-4">
              {projectData.viewCode && (
                <FaGithub className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]" />
              )}

              {projectData.openProject && (
                <CiShare1 className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]" />
              )}
            </div>
          )}
        </div>
        <div className="text-gray-200 text-sm font-bold">
          {projectData.title}
        </div>
        <div className="text-gray-400 text-xs">{projectData.shortDesc}</div>
        <div className="flex flex-grow flex-wrap  mt-5">
          {projectData?.strategy?.map((item, index) => {
            return (
              <div className="text-[12px] text-gray-500  px-1" key={index}>
                {item}
                {index < projectData?.strategy.length - 1 && ","}
              </div>
            );
          })}
        </div>

        <div className="flex flex-grow flex-wrap ">
          {projectData?.technologies?.map((item, index) => {
            return (
              <div className="text-[12px] text-gray-500  px-1" key={index}>
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
