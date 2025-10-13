import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

function Experience() {
  const experienceData = [
    {
      title: "Software Engineer",
      shortCompanyName: "RailTel",
      company: "RailTel Corporation of India Ltd",
      duration: "2024 - Present",
      location: "Prakash Nagar, Hyderabad",
      description: [
  "Rebuilt the UMID-V2 project frontend using React, Tailwind CSS, and TypeScript under Agile workflow.",
  "Independently developed and deployed the eOffice-Support system with Vite, React, Next.js (API routes), PostgreSQL, and Docker.",
  "Developed an OPD ChatAI system for doctors under the HMIS project, a web-based and backend-integrated solution that assists with patient interactions and real-time record management.",
  "Built EmbedHub, a scalable embedding and reranking service running two models in parallel, handling up to 1000 requests per second with efficient batching using PyTorch.",
  "Currently working on a full-stack ID card generation system using jsReport, with deployment in progress.",
  "Actively contributing to both frontend and backend using modern tooling with version control (GitHub) and project tracking (Jira)."
]
,
      skills: [
        "Grpc",
        "Kafka",
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
        "KG-RAG",
        "React JS",
        "ShadCN UI",
        "Tailwind CSS",
        "NestJS",
        "GitHub",
        "Jira",
        "Python",
      ],
      website: "https://www.railtel.in/",
    },
    {
      title: "Associate Software Engineer",
      shortCompanyName: "Srinine",
      company: "Srinine Technologies Pvt. Ltd.",
      duration: "Jan 2024 - Dec 2024",
      location: "Narsingi, Hyderabad",
      description: [
        "Worked on two key production projects: CPD API Server and CPD API Client.",
        "Owned over 60% of frontend implementation using React, TypeScript, ShadCN UI, and Tailwind CSS.",
        "Built real-time features like ticketing systems and live notifications using WebSockets.",
        "Managed a team of 5 developers, took part in hiring, and made technical decisions alongside the CEO.",
        "Focused on secure and maintainable codebases using Spring Boot for backend services and Bitbucket for versioning.",
      ],
      skills: [
        "Spring Boot",
        "PostgreSQL",
        "MongoDB",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "ShadCN UI",
        "Bitbucket",
        "REST APIs",
        "Agile Methodology",
      ],
      website: "https://companydev.cpd.net.in/",
    },
  ];

  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<number>(0);

  function handleCompanyNameClick(link: string) {
    window.open(link);
  }

  return (
    <div>
      <div className=" flex  flex-col text-lg gap-10">
        <div className="flex gap-4 items-center lg:-ml-10">
          <label className="text-[#02ffff]">
            02.
            <span className="text-4xl  text-white ">Experience</span>
          </label>
          <div className="h-[0.4px] w-full lg:w-[20vw]   bg-[#02ffff]/40"></div>
        </div>

        <div className="flex  flex-col lg:flex-row gap-10">
          <div className="flex lg:flex-col">
            {experienceData?.map((item, index) => {
              return (
                <div
                  onClick={() => setSelectedCompanyIndex(index)}
                  key={index}
                  className={`px-10 lg:px-5 py-4 
    border-b lg:border-b-0 lg:border-l 
    cursor-pointer 
    ${
      index === selectedCompanyIndex
        ? "border-[#02ffff] border-b-4 lg:border-b-0 lg:border-l-[4px] -ml-[2px] bg-[#02ffff]/10 text-[#02ffff]"
        : " text-gray-500"
    } 
    lg:w-[10vw] rounded-tr-[1px] rounded-br-[1px]`}
                >
                  {item.shortCompanyName}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-100 text-xl flex-wrap">
              {experienceData[selectedCompanyIndex].title}
              <span
                onClick={() => {
                  handleCompanyNameClick(
                    experienceData[selectedCompanyIndex].website
                  );
                }}
                className="text-[#02ffff] cursor-pointer"
              >
                @{experienceData[selectedCompanyIndex].shortCompanyName}
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              {experienceData[selectedCompanyIndex].duration}
            </div>
            <div className="flex flex-col gap-4">
              {experienceData[selectedCompanyIndex].description.map(
                (item, index) => {
                  return (
                    <div className="flex gap-3" key={index}>
                      <div>
                        <FaCaretRight className=" mt-1 w-4 h-4 text-[#02ffff]" />
                      </div>
                      <p className="text-gray-400">{item}</p>
                    </div>
                  );
                }
              )}
            </div>
            <div className="flex items-center flex-wrap  gap-4 ml-5 mt-5">
              {experienceData[selectedCompanyIndex].skills.map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="border   text-gray-400 px-2 text-xs lg:text-sm lg:px-4 py-1 border-[#298d8d] rounded-[1px]"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
