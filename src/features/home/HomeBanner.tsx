import { useRef } from "react";
import Animate from "../../utils/animations/Animate";
import NavBar from "../../utils/NavBar";
import { NAME } from "../../utils/AppConstants";
import { LiaDownloadSolid } from "react-icons/lia";
import DownwArrow from "../../utils/DownArraow";
import { useAppContext } from "../../utils/AppContext";

function HomeBanner() {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const { dispatch } = useAppContext();

  function handleHireMeClick() {
    if (resumeRef?.current) {
      (resumeRef as any).current.click();
    }
  }
  return (
    <div className="min-h-[100vh]  flex flex-col">
      <div className=" p-5  flex flex-col justify-between py-10 h-[85vh] w-full items-center">
        <div className="w-full lg:pl-[15vw]">
          <div className="flex flex-col  gap-3   lg:w-[50vw]  ">
            <Animate delay={450}>
              <h1 className="text-[#02ffff]">{"Hi, my name is"}</h1>
            </Animate>
            <Animate delay={450}>
              <h1 className=" -mt-4  text-[40px] text-gray-200 lg:text-[80px] font-bold ">
                {NAME.toUpperCase()}
              </h1>
            </Animate>
            <Animate delay={600}>
              <p className=" text-xl text-gray-300   lg:text-[40px]  leading-tight">
                {"I build intelligent systems for the web.".toUpperCase()}
              </p>
            </Animate>

            <Animate delay={600}>
              <p className=" leading-6  lg:text-xl  lg:text-[20px] text-gray-400 ">
                {
                  "I’m a full stack and LLM developer focused on creating fast, real-time, and AI-powered applications. Currently, I’m building internal support tools, document intelligence systems, and ID card solutions at RailTel Corporation of India."
                }
              </p>
            </Animate>

            <Animate delay={400}>
              <div
                onClick={handleHireMeClick}
                className="mt-10   border text-[#02ffff]/60 lg:hover:text-[#02ffff]    border-[#02ffff]/70 lg:hover:border-[#02ffff]  w-fit px-6  lg:px-12 lg:text-xl   cursor-pointer py-2 lg:py-3 flex items-center  "
              >
                Resume
                <LiaDownloadSolid className="ml-2" />
              </div>
            </Animate>
          </div>
        </div>
        <div className=" flex   w-full ">
          <a
            href="Shaik afrid - Resume.pdf"
            download={true}
            ref={resumeRef}
            className="hidden"
          >
            Resume
          </a>
        </div>

        <Animate delay={750}>
          <div
            className=" w-full flex items-center justify-center"
            onClick={() => {
              dispatch({
                type: "setScrollView",
                payload: "EXPERTISE",
              });
              setTimeout(() => {
                dispatch({
                  type: "setScrollView",
                  payload: undefined,
                });
              }, 400);
            }}
          >
            <DownwArrow />
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default HomeBanner;
