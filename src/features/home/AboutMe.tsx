import { FaCaretRight } from "react-icons/fa";

function AboutMe() {
  const recentTech = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "WebSockets",
    "FastAPI",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Next.js",
    "Docker",
    "Flutter",
    "Kotlin",
    "LLMs (BERT, Mistral)",
  ];

  return (
    <div className="w-full items-center justify-center  flex">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="flex flex-col  gap-2">
          <div className="flex gap-4 items-center ">
            <label className="text-[#02ffff]">
              01.
              <span className="text-2xl ml-3 text-white text-nowrap">
                About Me
              </span>
            </label>
            <div className="h-[0.4px] w-full   bg-[#02ffff]/40"></div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="lg:max-w-[40vw] text-gray-400">
              Hi, I’m Shaik Afrid — a full stack and LLM developer passionate
              about crafting fast, intelligent, and user-focused applications
              across web and mobile platforms. My interest in development
              sparked from experimenting with backend APIs and frontend design,
              eventually growing into real-world experience across startups and
              large organizations.
            </p>
            <p className="lg:max-w-[40vw] text-gray-400">
              Currently, I’m working at{" "}
              <span className="text-[#02ffff] cursor-pointer">
                RailTel Corporation of India
              </span>
              , where I’ve built internal platforms like eOffice-Support and
              MediRetrieve_AI — blending frontend engineering with AI-powered
              document intelligence and vector search.
            </p>

            <p className="lg:max-w-[40vw] text-gray-400">
              Outside of work, I love building side projects, publishing
              developer libraries, contributing to open source, and exploring
              LLM pipelines and performance optimization.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-300">
              Technologies I’ve been working with recently:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:w-[40vw] gap-3">
              {recentTech?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3">
                      <FaCaretRight className="text-[#02ffff] w-3 h-3" />
                    </div>
                    <label className="text-nowrap">{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex  lg:justify-start justify-center">
          <div className="lg:w-[20vw] w-[70vw] h-[40vh] lg:h-[20vh] mt-5 relative">
            <div className="lg:w-[20vw] w-[70vw] h-[34vh] lg:h-[43vh] absolute z-10 border  border-[#02ffff] lg:left-3 left-2 top-4  lg:top-2 rounded"></div>
            <img src="favicon.ico" className="rounded z-50  absolute" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
