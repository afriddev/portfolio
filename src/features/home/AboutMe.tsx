

function AboutMe() {
  
  function handleCompanyNameClick() {
    window.open("https://www.railtel.in/");
  }

  return (
    <div className="w-full   flex lg:text-base  mt-10">
      <div className="flex lg:flex-row justify-center  items-center flex-col gap-10">
        <div className="flex flex-col  gap-2 ">
          <div className="flex gap-4 items-center lg:-ml-10">
            <label className="text-[#02ffff]">
              01.
              <span className="text-4xl  text-white text-nowrap">About Me</span>
            </label>
            <div className="h-[0.4px] w-full lg:w-[20vw]   bg-[#02ffff]/40"></div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-6 lg:mt-10 ">
            <p className="lg:w-[35vw] text-gray-400">
              Hi, I’m Shaik Afrid — a full stack and LLM developer passionate
              about crafting fast, intelligent, and user-focused applications
              across web and mobile platforms. My interest began with backend
              APIs and frontend design, later expanding into real-world work
              across startups and large organizations.
            </p>

            <p className="lg:w-[35vw] text-gray-400">
              Currently, I’m working at{" "}
              <span
                onClick={handleCompanyNameClick}
                className="text-[#02ffff] cursor-pointer"
              >
                RailTel Corporation of India
              </span>
              ,  Where I deployed a new HIS platform using a
              scalable Kubernetes cluster, HA PostgreSQL, Redis, ELK, and full
              CI/CD automation, and developed three internal projects leveraging
              RAG/GraphRAG for document intelligence, smart search, and workflow
              automation.
            </p>

            <p className="lg:w-[35vw] text-gray-400">
              Outside of work, I love building side projects, publishing
              developer libraries, contributing to open source, and exploring
              LLM pipelines and performance optimization.
            </p>

            <p className="lg:w-[35vw] text-gray-400">
              I also specialize in Kubernetes, ELK, HA clusters, internal DNS,
              and scalable microservices — enabling resilient, production-grade
              deployments.
            </p>
          </div>

        </div>
        <div className="w-full hidden lg:flex  lg:justify-start justify-center lg:-mt-32">
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
