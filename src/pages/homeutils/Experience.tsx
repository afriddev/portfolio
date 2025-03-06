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

        <div className="mt-[5vh] flex flex-col gap-2">
          <Animate delay={300} type="slideLeft">
            <div className="relative bg-blue-700 py-5  w-full  flex flex-col lg:flex-row lg:items-center  rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Interim CTO</div>
              <div className="font-this text-foreground/80 text-sm w-full flex ">
                @ SkiLLoFin <br className="lg:hidden" /> 2025 - Currently
                working(Part Time)
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-white rounded-md flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row ">
                <div>
                  <img src="skillofin.png" className="lg:-ml-6 rounded-md w-42 h-20 object-cover" />
                </div>
                <div className="flex flex-col  gap-3 lg:flex-row lg:items-center">
                  <div className="flex items-center text-black">
                    <FaLocationDot className="w-5 h-6 text-black mr-3" /> Canada
                  </div>

                  <h1
                    className="flex items-center -ml-3 text-black cursor-pointer"
                    onClick={() => {
                      window.open("https://skillofin.com");
                    }}
                  >
                    <WiDirectionUpRight className="w-10 h-10 text-black lg:mt-1 text-black mr-1" />{" "}
                    www.skillofin.com
                  </h1>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw] text-black">
                As the Interim CTO at Skillofin, I lead the development of a platform connecting freelancers and clients, ensuring secure payments, real-time communication, and scalability. The platform integrates Next.js, React.js, MongoDB, WebSockets, and Stripe, with support for multiple payment methods and seamless future expansion.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:grid lg:grid-cols-6">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  React JS
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Next JS
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Typescript
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Tailwind
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Github
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Web sockets
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Mongo DB
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Scalability
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Stripe
                </div>
              </div>
            </div>
          </Animate>
        </div>

        <div className="mt-[5vh] flex flex-col gap-2 ">
          <Animate delay={500} type="slideLeft">
            <div className="relative bg-green-700 py-5  w-full  flex flex-col lg:flex-row lg:items-center  rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Frontend Developer</div>
              <div className="font-this text-foreground/80 text-sm w-full flex ">
                @ Railtel corporation of india Ltd <br className="lg:hidden" />{" "}
                2024 - Currently working
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-green-200 rounded-md flex flex-col gap-5">
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
                      window.open("https://umid.digitalir.in/web/");
                    }}
                  >
                    <WiDirectionUpRight className="w-10 h-10 text-black lg:mt-1 text-black mr-1" />{" "}
                    www.umid.digitalir.in
                  </h1>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw] text-black">
                  Currently, I am focused on frontend development, primarily
                  rebuilding the UMID project for RailTel Corporation using
                  Agile methodology. I am collaborating with a team of 10
                  members under a team leader. My tech stack includes Next.js,
                  NextUI, Tailwind CSS, and React, while using Jira for project
                  management and GitHub for version control.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:grid lg:grid-cols-6">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  React JS
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Next Ui
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Typescript
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Tailwind
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Github
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Jira
                </div>
              </div>
            </div>
          </Animate>
        </div>
        <div className="mt-[5vh] flex flex-col gap-2">
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
                  I contributed more then 60% of the code for two production
                  released projects and acted as a team lead for a team size of
                  5 and i am in the part of recruiting new team members and
                  making decision under CEO for srinine.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:grid lg:grid-cols-5">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Spring Boot
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  React
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Typescript
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Tailwind
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Tanstack Query
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Shadcn Ui
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Bitbucket
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
