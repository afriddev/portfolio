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
    headingContemt: "Frontend • Backend • Web & Mobile",
    desc: [
      {
        point:
          "Built responsive and modern UIs using React, Next.js, TypeScript, Tailwind CSS, ShadCN UI, and Vite.",
      },
      {
        point:
          "Developed and deployed scalable full-stack systems like UMID-V2, eOffice-Support, MediRetrieve_AI, and ID Card Management using FastAPI, Next.js API routes, and PostgreSQL.",
      },
      {
        point:
          "Integrated PostgreSQL, MongoDB, and Firebase for secure, high-performance data storage.",
      },
      {
        point:
          "Built jsReport-based document automation and internal workflow tools for enterprise use.",
      },
      {
        point:
          "Developed cross-platform mobile and web apps using Flutter, Kotlin, and REST APIs.",
      },
      {
        point: "Deployed production systems using Docker, Nginx, PM2, and Linux servers.",
      },
      {
        point:
          "Strong Linux, CLI, and server-side debugging capabilities across distributed systems.",
      }
    ],
  },

  {
    heading: "AI Engineering",
    headingContemt: "RAG • KG-RAG • GraphRAG • Embeddings • PyTorch",
    desc: [
      {
        point:
          "Built EmbedHub, a scalable embedding + reranking engine processing ~1000 requests/sec using PyTorch batching and async pipelines.",
      },
      {
        point:
          "Created OPD ChatAI for HMIS — a real-time doctor assistant combining LLMs, retrieval, and structured output flows.",
      },
      {
        point:
          "Developed enterprise-grade AI systems using RAG, KG-RAG, and GraphRAG for document intelligence and semantic search.",
      },
      {
        point:
          "Implemented vector search, embeddings, chunking strategies, and model-driven data pipelines.",
      },
      {
        point:
          "Designed robust prompt engineering flows with output validation, guards, and feedback loops.",
      },
    ],
  },

  {
    heading: "DevOps & Infra",
    headingContemt: "Kubernetes • HA • ELK • CI/CD",
    desc: [
      {
        point:
          "Deployed large-scale HIS platform using Kubernetes with auto-scaling, load balancing, and rolling updates.",
      },
      {
        point:
          "Configured HA PostgreSQL, Redis, and distributed microservices with resilience and failover.",
      },
      {
        point:
          "Implemented centralized logging and observability using the ELK Stack (Elasticsearch, Logstash, Kibana).",
      },
      {
        point:
          "Set up internal DNS, ingress routing, Nginx reverse proxies, and secure production networking.",
      },
      {
        point:
          "Built CI/CD pipelines using GitHub Actions and Docker for automated builds, testing, and deployments.",
      },
    ],
  },

  {
    heading: "DSA",
    headingContemt: "LeetCode • HackerRank",
    desc: [
      { point: "Solved 200+ problems across LeetCode and HackerRank." },
      { point: "Earned 5⭐ badges in Python and Java on HackerRank." },
      {
        point:
          "Strong understanding of algorithms, data structures, and problem-solving patterns used in real engineering work.",
      },
    ],
  },

  {
    heading: "Workflow",
    headingContemt: "Git • Agile • Team Leadership",
    desc: [
      {
        point: "Worked with GitHub, Bitbucket, and Jira in fast-paced Agile environments.",
      },
      {
        point:
          "Implemented CI/CD automation and managed deployments across dev, test, and production.",
      },
      {
        point:
          "Led small dev teams, reviewed code, and maintained multiple repositories under RailTel’s AI division.",
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
          <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-0 ">
            {expertise?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedExpertiseIndex(index);
                  }}
                  key={index}
                  className={`px-10 lg:px-5 py-4 
    border-b lg:border-b-0 border-l border-r border-t lg:border-r-0 lg:border-t-0 
    cursor-pointer 
    ${
      index === selectedExpertiseIndex
        ? "border-[#02ffff] border-b-4 lg:border-b-0 lg:border-l-[4px] -ml-[2px] bg-[#02ffff]/10  text-[#02ffff] border-l border-r border-t  lg:border-r-0  lg:border-t-0 "
        : " text-gray-500"
    } 
    lg:w-[10vw] w-[40vw] flex  lg:items-start items-center lg:justify-start justify-center rounded-tr-[1px] rounded-br-[1px] text-sm text-center lg:text-base`}
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
