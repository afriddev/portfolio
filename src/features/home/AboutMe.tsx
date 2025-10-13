import { FaCaretRight } from "react-icons/fa";

function AboutMe() {
  const recentTech = [
    "Grpc",
    "Kafka",
    "React",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Next.js",
    "Docker",
    "Kotlin",
    "AI",
    "LLMs",
    "Rag",
    "GraphRag",
    "KG-RAG"
  ];
  function handleCompanyNameClick() {
    window.open("https://www.railtel.in/");
  }

  return (
    <div className="w-full   flex text-lg mt-10">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="flex flex-col  gap-2">
          <div className="flex gap-4 items-center lg:-ml-10">
            <label className="text-[#02ffff]">
              01.
              <span className="text-4xl  text-white text-nowrap">
                About Me
              </span>
            </label>
            <div className="h-[0.4px] w-full lg:w-[20vw]   bg-[#02ffff]/40"></div>
          </div>

          <div className="flex flex-col  gap-6 mt-10">
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
              <span onClick={handleCompanyNameClick} className="text-[#02ffff] cursor-pointer">
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
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-gray-300 -ml-2">
              Technologies I’ve been working with recently:
            </p>
            <div className="grid grid-cols-2  lg:w-[40vw] gap-3">
              {recentTech?.map((item, index) => {
                return (
                  <div key={index} className="flex  gap-3">
                    <div className="w-3 h-3">
                      <FaCaretRight className="text-[#02ffff] w-3 h-3 mt-1"  />
                    </div>
                    <label className=" text-gray-400">{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex  lg:justify-start justify-center">
          <div className="lg:w-[20vw] w-[70vw] h-[40vh] lg:h-[20vh] mt-5 relative">
            <div className="lg:w-[20vw] w-[71vw] h-[33vh] lg:h-[43vh] absolute z-10  lg:left-3 left-2 top-2  lg:top-2 rounded"></div>
            <img src="favicon.ico" className="rounded z-50  absolute" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
