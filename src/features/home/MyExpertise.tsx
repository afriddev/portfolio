import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

interface MyExpertiseInterface {
  scrollView: string | undefined;
  targetDivRef: React.RefObject<HTMLDivElement>;
}

function MyExpertise({ scrollView, targetDivRef }: MyExpertiseInterface) {
  const expertise = [
  {
    heading: "Fullstack",
    headingContemt: "Frontend • Backend • App",
    desc: [
      {
        point:
          "Built modern and responsive UIs using React, TypeScript, Vite, Tailwind CSS, ShadCN UI, and Next.js.",
      },
      {
        point:
          "Developed and deployed scalable full-stack systems like UMID-V2, eOffice-Support, and ID Card Management using FastAPI, Next.js (API routes), and PostgreSQL.",
      },
      {
        point:
          "Integrated PostgreSQL, MongoDB, and Firebase for secure, reliable, and high-performance data management.",
      },
      {
        point:
          "Created internal tools and automated workflows including jsReport-based ID card generation systems.",
      },
      {
        point:
          "Built cross-platform mobile and web apps using Flutter, Kotlin, and modern REST APIs.",
      },
      { point: "Deployed production-grade apps using Docker, PM2, and Nginx." },
      {
        point:
          "Experienced working in Linux environments with strong CLI and server management skills.",
      }
    ],
  },
  {
    heading: "DSA",
    headingContemt: "LeetCode • HackerRank",
    desc: [
      { point: "Solved over 200 problems across LeetCode and HackerRank." },
      { point: "Earned 5⭐ in Python and Java on HackerRank." },
      {
        point:
          "Strong understanding of algorithms, data structures, and problem-solving patterns applied in real projects.",
      },
    ],
  },
  {
    heading: "Workflow",
    headingContemt: "Git • Agile • CI/CD",
    desc: [
      { point: "Worked with GitHub, Bitbucket, and Jira in Agile environments." },
      { point: "Implemented CI/CD pipelines and deployed systems with Docker and PM2." },
      {
        point:
          "Led small dev teams, conducted code reviews, and maintained multiple repositories under the RailTel AI division.",
      },
    ],
  },
  {
    heading: "AI",
    headingContemt: "RAG • GraphRAG • KG-RAG • Embeddings • PyTorch",
    desc: [
      {
        point:
          "Built scalable AI-driven platforms like EmbedHub for embedding and reranking, handling up to 1000 requests per second using PyTorch and batching.",
      },
      {
        point:
          "Developed OPD ChatAI, a web-based AI assistant for HMIS, integrating LLMs and retrieval pipelines to support doctors in real time.",
      },
      {
        point:
          "Experienced in designing and deploying intelligent systems combining RAG, KG-RAG, and GraphRAG architectures with vector databases.",
      },
      {
        point:
          "Worked on prompt engineering, structured output extraction, and feedback loops for adaptive model behavior.",
      },
    ],
  },
];

  const [selectedExpertiseIndex, setSelectedExpertiseIndex] =
    useState<number>(0);

  return (
    <div>
      <div
        className="text-lg flex  flex-col  gap-10 mt-10"
        ref={scrollView === "EXPERTISE" ? targetDivRef : null}
      >
        <div className="flex gap-4 items-center lg:-ml-10">
          <label className="text-[#02ffff]">
            03.
            <span className="text-4xl  text-white text-nowrap">Expertise</span>
          </label>
          <div className="h-[0.4px] w-full lg:w-[20vw]   bg-[#02ffff]/40"></div>
        </div>
        <div className="flex  flex-col lg:flex-row gap-10 ">
          <div className="flex lg:flex-col lg:overflow-hidden overflow-auto">
            {expertise?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedExpertiseIndex(index);
                  }}
                  key={index}
                  className={`px-10 lg:px-5 py-4 
    border-b lg:border-b-0 lg:border-l 
    cursor-pointer 
    ${
      index === selectedExpertiseIndex
        ? "border-[#02ffff] border-b-4 lg:border-b-0 lg:border-l-[4px] -ml-[2px] bg-[#02ffff]/10 text-[#02ffff]"
        : " text-gray-500"
    } 
    lg:w-[20vw] rounded-tr-[1px] rounded-br-[1px]`}
                >
                  {item.heading}
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-100 ">
              {expertise[selectedExpertiseIndex].headingContemt}
              <span className="text-[#02ffff] cursor-pointer"></span>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {expertise[selectedExpertiseIndex].desc.map((item, index) => {
                return (
                  <div className="flex gap-3" key={index}>
                    <div>
                      <FaCaretRight className=" mt-1 w-4 h-4 text-[#02ffff]" />
                    </div>
                    <p className="text-gray-400">{item.point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExpertise;
