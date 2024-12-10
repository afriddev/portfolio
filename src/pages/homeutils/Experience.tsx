import Animate from "../../utils/animations/Animate";
import { FaLocationDot } from "react-icons/fa6";
import { WiDirectionUpRight } from "react-icons/wi";

function Experience() {
  return (
    <div className="w-full px-4 flex  flex-col justify-center items-center mt-[5vh]">
      <Animate delay={200} type="slideLeft">
        <div>
          <h2 className="text-4xl lg:text-[50px] font-semibold text-center ">
            Professional Experience
          </h2>
        </div>
      </Animate>

      <div className="mt-[5vh] flex flex-col gap-2">
        <Animate delay={350} type="slideLeft">
          <div className="relative bg-[#740cdc] py-5  w-full  flex flex-col lg:flex-row lg:items-center  rounded-md px-6 font-semibold lg:gap-5">
            <div className="lg:text-nowrap">Associate Software Engineer</div>
            <div className="font-this text-foreground/60 text-sm w-full flex ">
              @ srinine technologies PVT LTD <br className="lg:hidden"/> 2024 - 2024 - 11 Months
            </div>
          </div>
        </Animate>

        <Animate delay={500} type="slideLeft">
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
                I develop web applications with a focus on user friendly designs
                and secure features on React.js and tailwindcss librarys
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="flex gap-2">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Spring Boot
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  React
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Typescript
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Tailwind
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Tanstack Query
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Shadcn Ui
                </div>

                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Router
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default Experience;
