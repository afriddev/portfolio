/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import Animate from "../../utils/animations/Animate";
import { NAME } from "../../utils/AppConstants";
import { LiaDownloadSolid } from "react-icons/lia";
import DownwArrow from "../../utils/DownArraow";
import { useAppContext } from "../../utils/AppContext";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

function HomeBanner() {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const { dispatch } = useAppContext();

  function handleHireMeClick() {
    if (resumeRef?.current) {
      (resumeRef as any).current.click();
    }
  }
  function handleCompanyNameClick() {
    window.open("https://www.railtel.in/");
  }

  function handleEmailClick() {
    const mailtoUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=afridayan01@gmail.com&su=Hey";
    window.open(mailtoUrl, "_blank");
  }

  function handleOpenSocialLink(type: string) {
    switch (type) {
      case "INSTA":
        window.open("https://www.instagram.com/afrid.dev/");
        break;

      case "X":
        window.open("https://x.com/AFRIDANON");

        break;
      case "GITHUB":
        window.open("https://github.com/afriddev");

        break;
      case "LINKEDIN":
        window.open("https://www.linkedin.com/in/afriddev/");

        break;
    }
  }

  return (
    <div className="h-[83vh] lg:h-[80vh]   flex flex-col">
      <div className=" flex flex-col  justify-between   h-full w-full items-center">
        <div className="flex  flex-col ">
          <div className="w-full">
            <div className="flex flex-col  gap-3 lg:mt-10  lg:w-[50vw]  ">
              <Animate delay={450}>
                <h1 className="text-[#02ffff]">{"Hi, my name is"}</h1>
              </Animate>
              <Animate delay={450}>
                <h1 className=" -mt-4  text-[40px] text-gray-200 lg:text-[80px] font-bold ">
                  {NAME.toUpperCase()}
                  <p className="text-sm lg:text-xl font-normal pl-2 -mt-3 lg:-mt-5">
                    {" "}
                    — Full-Stack & AI Systems Engineer
                  </p>
                </h1>
              </Animate>
              <Animate delay={600}>
                <p className="lg:mt-5  text-gray-200   lg:text-[25px]  leading-tight">
                  {"I design and build high-performance, real-time, and AI-driven platforms with a focus on scalability and reliability.".toUpperCase()}
                </p>
              </Animate>

              <Animate delay={600}>
                <p className="  leading-6 lg:mt-2  lg:text-xl   text-gray-400 ">
                  {
                    "Experienced in Kubernetes, ELK, HA clusters, internal DNS, full-stack development, and LLM systems (RAG, KG-RAG, GraphRAG). Currently building automation, document workflows, and smart ID solutions at RailTel."
                  }
                  <span
                    onClick={handleCompanyNameClick}
                    className=" cursor-pointer text-[#02ffff]"
                  >
                    RailTel Corporation of India.
                  </span>
                </p>
              </Animate>

              <Animate delay={400}>
                <div className="flex   justify-between mt-5  lg:mt-10 items-center">
                  <div
                    onClick={handleHireMeClick}
                    className="  border text-[#02ffff] border-[#02ffff]     w-fit px-6  lg:px-12 lg:text-xl   cursor-pointer py-2 lg:py-3 flex items-center  "
                  >
                    Resume
                    <LiaDownloadSolid className="ml-2" />
                  </div>
                  <div className="flex items-center gap-3  lg:gap-5">
                    <h3
                      onClick={() => {
                        handleOpenSocialLink("GITHUB");
                      }}
                      className=" flex  i  bg-white/10  px-4 py-4 cursor-pointer lg:hover:text-[#02ffff] lg:hover:bg-[#112424] rounded-full"
                    >
                      <FaGithub className="lg:h-8 lg:w-8" />
                    </h3>

                    <h3
                      onClick={() => {
                        handleOpenSocialLink("LINKEDIN");
                      }}
                      className=" flex  i  bg-white/10  px-4 py-4 cursor-pointer lg:hover:text-[#02ffff] lg:hover:bg-[#112424] rounded-full"
                    >
                      <CiLinkedin className="   lg:h-8 lg:w-8" />
                    </h3>
                    <h3
                      onClick={handleEmailClick}
                      className=" flex  i  bg-white/10  px-4 py-4 cursor-pointer lg:hover:text-[#02ffff] lg:hover:bg-[#112424] rounded-full"
                    >
                      <IoMailOutline className="   lg:h-8 lg:w-8" />
                    </h3>
                  </div>
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
        </div>

        <div
          className=" flex items-center justify-center  "
          onClick={() => {
            dispatch({
              type: "setScrollView",
              payload: "ABOUTME",
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
      </div>
    </div>
  );
}

export default HomeBanner;
