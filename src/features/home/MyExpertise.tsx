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
            "Built modern UIs using React, TypeScript, Vite, Tailwind CSS, ShadCN UI, Hero UI, and Next.js.",
        },
        {
          point:
            "Developed scalable APIs with Spring Boot, NestJS, Django, and FastAPI.",
        },
        {
          point:
            "Integrated PostgreSQL, MongoDB, and Firebase for secure and efficient data management.",
        },
        {
          point:
            "Built cross-platform mobile apps with Flutter and Kotlin for Android and iOS.",
        },
        { point: "Deployed production apps using Docker, PM2, and Nginx." },
        {
          point:
            "Worked in Linux environments with strong command-line proficiency.",
        },
        { point: "Explored cybersecurity and ethical hacking fundamentals." },
      ],
    },
    {
      heading: "DSA",
      headingContemt: "LeetCode • HackerRank",
      desc: [
        { point: "Solved over 150 problems across LeetCode and HackerRank." },
        { point: "5⭐ in Python and 3⭐ in Java on HackerRank." },
        {
          point: "Strong command of algorithms and real-world problem solving.",
        },
      ],
    },
    {
      heading: "Workflow",
      headingContemt: "Git • Agile • CI/CD",
      desc: [
        { point: "Worked with GitHub, Bitbucket, and Jira in Agile teams." },
        { point: "Built CI/CD pipelines and deployed with Docker and PM2." },
        {
          point:
            "Actively contributed to open-source and team collaboration workflows.",
        },
      ],
    },
    {
      heading: "LLM",
      headingContemt: "RAG • Embeddings • JSON Extraction",
      desc: [
        {
          point:
            "Built document intelligence systems with vector DBs and LLMs.",
        },
        {
          point:
            "Integrated Phi, TinyLlama, and custom fine-tuned models for structured output.",
        },
        {
          point:
            "Worked on real-time extraction, prompt engineering, and feedback loops.",
        },
      ],
    },
  ];
  const [selectedExpertiseIndex, setSelectedExpertiseIndex] =
    useState<number>(0);

  return (
    <div>
      <div
        className=" flex  flex-col gap-10 mt-10"
        ref={scrollView === "EXPERTISE" ? targetDivRef : null}
      >
        <div className="flex gap-4 items-center lg:-ml-10">
          <label className="text-[#02ffff]">
            03.
            <span className="text-2xl  text-white text-nowrap">Expertise</span>
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
    lg:w-[10vw] rounded-tr-[1px] rounded-br-[1px]`}
                >
                  {item.heading}
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-100 text-xl">
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
