import Animate from "../../utils/animations/Animate";
import { FaLocationDot } from "react-icons/fa6";
import { WiDirectionUpRight } from "react-icons/wi";

function Experience() {
  return (
    <div>
      <div className="w-full px-4 flex  flex-col justify-center items-center mt-[5vh]">
        <Animate delay={300} type="slideLeft">
          <div>
            <h2 className="text-4xl lg:text-[50px] font-semibold text-center ">
              Professional Experience
            </h2>
          </div>
        </Animate>

        <div className="mt-[5vh] flex flex-col gap-2 ">
          <Animate delay={500} type="slideLeft">
            <div className="relative bg-green-700 py-5  w-full  flex flex-col lg:flex-row lg:items-center  rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Software Engineer</div>
              <div className="font-this text-foreground/80 text-sm w-full flex ">
                @ Railtel corporation of india Ltd <br className="lg:hidden" />{" "}
                2024 - Currently working
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-green-200 rounded-md flex flex-col gap-5 lg:w-[60vw]">
              <div className="flex flex-col gap-3 lg:flex-row ">
                <div>
                  <img src="hmis-logo.png" className="rounded-md" />
                </div>
                <div className="flex flex-col  gap-3 lg:flex-row lg:items-center">
                  <div className="flex items-center text-black">
                    <FaLocationDot className="w-5 h-6 text-black mr-3" />{" "}
                    Prakash nagar, Hyderabad{" "}
                  </div>

                  <h1
                    className="flex items-center -ml-3 text-black cursor-pointer"
                    onClick={() => {
                      window.open("https://www.railtel.in/");
                    }}
                  >
                    <WiDirectionUpRight className="w-10 h-10 text-black lg:mt-1 mr-1" />{" "}
                    https://www.railtel.in/
                  </h1>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw] text-black">
                  I’m a frontend developer currently focused on rebuilding the
                  UMID project for RailTel Corporation using Agile methodology.
                  I work in a 10-member team under a team lead, primarily using
                  React, Next.js, NextUI, and Tailwind CSS, with Jira for
                  project management and GitHub for version control. I’ve also
                  developed the eOffice Helpdesk portal from scratch using
                  React, Next.js, and PostgreSQL. Recently, I’ve been
                  collaborating on full-stack development with React, NestJS,
                  and PostgreSQL, contributing actively to both frontend and
                  backend tasks.
                </div>
              </div>
              <div className="flex-wrap flex  gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  React JS
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  Next.js
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  Next UI
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  Shadcn UI
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  TypeScript
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  Tailwind CSS
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  PostgreSQL
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  NestJS
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  GitHub
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  Jira
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white text-nowrap">
                  Agile Methodology
                </div>
              </div>
            </div>
          </Animate>
        </div>
        <div className="mt-[5vh] flex flex-col gap-2 lg:w-[60vw] ">
          <Animate delay={300} type="slideLeft">
            <div className="relative bg-[#740cdc] py-5  w-full  flex flex-col lg:flex-row lg:items-center  rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Associate Software Engineer</div>
              <div className="font-this text-foreground/60 text-sm w-full flex ">
                @ Srinine technologies PVT LTD <br className="lg:hidden" /> 2024
                - 2024 - 11 Months(Jan - Dec)
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-secondary/30 rounded-md flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row ">
                <div>
                  <img src="srinine.PNG" className="rounded-md" />
                </div>
                <div className="flex flex-col  gap-3 lg:flex-row lg:items-center">
                  <div className="flex items-center text-foreground/70">
                    <FaLocationDot className="w-5 h-6 text-secondary mr-3" />{" "}
                    Narsingi, Hyderabad{" "}
                  </div>

                  <h1
                    className="flex items-center -ml-3 text-foreground/70 cursor-pointer"
                    onClick={() => {
                      window.open("https://companydev.cpd.net.in/");
                    }}
                  >
                    <WiDirectionUpRight className="w-10 h-10 lg:mt-1 text-secondary mr-1" />{" "}
                    companydev.cpd.net.in
                  </h1>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw]">
                  At Srinine, I worked for 11 months, where I contributed over
                  60% of the code for two production-released projects. I also
                  took on the role of team lead for a team of 5 developers,
                  actively participating in recruiting new team members and
                  making key technical decisions in coordination with the CEO.
                  This experience sharpened both my technical leadership and
                  decision-making skills in a fast-paced startup environment.
                </div>
              </div>
              <div className="flex-wrap flex  gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  Spring Boot
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  React
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  TypeScript
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  Tailwind CSS
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  TanStack Query
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  ShadCN UI
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  Bitbucket
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  REST APIs
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700 text-white">
                  Agile Methodology
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default Experience;
