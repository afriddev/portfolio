import { CiFolderOn, CiShare1 } from "react-icons/ci";
import { projectDataType } from "../../utils/projectData";
import { FaGithub } from "react-icons/fa";

interface ProjectCardInterface {
  projectData: projectDataType
}

function ProjectCard({ projectData }: ProjectCardInterface) {
  return (
    <div className="border border-gray-700 rounded p-10 lg:max-w-[25vw] lg:h-[50vh]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex  items-center gap-10 w-full justify-between  ">
          <CiFolderOn className="text-[#02ffff] h-10 w-10" />
          <div className="flex flex-row items-center gap-4">
            <FaGithub className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]" />

            <CiShare1 className="w-7 h-7 cursor-pointer text-[#45b7b7] lg:hover:text-[#02ffff]" />
          </div>

        </div>
        <div className="text-gray-200 text-lg font-bold" >{projectData.title}</div>
        <div className="text-gray-400 text-sm">{projectData.shortDesc}</div>
        <div className="flex flex-grow flex-wrap  mt-5">
          {
            projectData?.strategy?.map((item,index)=>{
              return <div className="text-xs text-gray-100 border-gray-700 px-3 py-1 border" key={index} >{item}</div>
            })
          }
        </div>
        
        <div className="flex flex-grow flex-wrap ">
          {
            projectData?.technologies?.map((item,index)=>{
              return <div className="text-xs text-gray-100 border-gray-700 px-3 py-1 border" key={index} >{item}</div>
            })
          }
        </div>

      </div>


    </div>
  );
}

export default ProjectCard;
