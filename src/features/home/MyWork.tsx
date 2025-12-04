import { FaGithub } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { RxOpenInNewWindow } from "react-icons/rx";

const myWorkData = [
  {
    image: "map.png",
    title: "Muni Ammamma Pickles ",
    description:
      "A complete full-stack pickle e-commerce platform built with React, TypeScript, Tailwind, ShadCN UI, TanStack Query, and a Spring Boot + PostgreSQL backend. Includes Razorpay payments, product/catalog management, secure APIs, optimized caching, admin workflows, and a smooth shopping experience rooted in traditional South Indian branding.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "TanStack Query",
      "Spring Boot",
      "PostgreSQL",
      "Razorpay",
      "Docker",
    ],
    githubLink: "https://github.com/afriddev/muniammammapickles.in",
    liveLink: "https://www.muniammammapickles.in/",
  },

  {
    image: "hm.png",
    title: "Hyderabad Metro Route Planner",
    description:
      "A fast, map-based metro planner that provides real-time routes, station details, timings, and travel insights for Hyderabad Metro users. Built with a clean, mobile-first UI and optimized client-side routing for instant search and navigation.",
    technologies: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    githubLink: "https://github.com/afriddev/hyderabadmetro-ui",
    liveLink: "https://hyderabadmetro.vercel.app/",
  },

  {
    image: "dp.png",
    title: "Creative Digital Solutions Agency Website",
    description:
      "A modern digital-agency platform showcasing services like web/app development, SEO, digital marketing, hosting, and maintenance. Includes animated service sections, metrics dashboard, growth pipeline (inspection → optimization → analysis), Google Ads integration, and a high-conversion landing design for client onboarding.",
    technologies: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
    githubLink: "https://github.com/afriddev/doothapromotions.com",
    liveLink: "https://dhootha-main.vercel.app/home",
  },
  {
    image: "cv.png",
    title: "Cortexvia ",
    description:
      "Built an advanced AI platform enabling document/video uploads, SmartRAG/LightRAG/GraphRAG retrieval, multi-model inference, analytics dashboards, secure API keys, SDK integrations, chatbot components, and high-speed model routing (up to 2500 tokens/sec) for developers and enterprises.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Vector DB",
      "RAG",
      "GraphRAG",
      "Embeddings",
    ],
    githubLink: "https://github.com/afriddev/cortexvia",
    liveLink: "https://cortexvia.afrid.live/",
  },
];

function MyWork() {
  return (
    <div>
      <div className="flex gap-4 items-center lg:ml-[4.5vw]">
        <label className="text-[#02ffff]">
          04.
          <span className="text-4xl text-white text-nowrap">My Work</span>
        </label>
        <div className="h-[0.4px] w-full lg:w-[20vw]   bg-[#02ffff]/40"></div>
      </div>

      <div className="lg:ml-[5vw] mt-10 flex flex-col gap-10 lg:gap-20 w-full">
        {myWorkData.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center  relative`}
            >
              <img
                src={item.image}
                className="rounded opacity-50 lg:w-[55vw] hidden lg:flex h-[50vh] object-cover"
              />
              <div
                className={` lg:absolute ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } bg-gray-300 p-5 lg:w-[40vw] rounded flex flex-col gap-4`}
              >
                <label className="text-[#00637c] gap-2 flex lg:items-center font-semibold text-lg flex-col lg:flex-row ">
                  Featured Project <MdArrowRightAlt className="hidden lg:flex" />
                  <span className="text-gray-700">{item.title}</span>
                </label>
                <p className="text-gray-700 text-xs lg:text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-3  ">
                  {item.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="border    px-2 text-xs lg:text-sm lg:px-4 py-1 border-[#298d8d] w-fit rounded-[1px] text-gray-700"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 justify-end ">
                  {item.githubLink && (
                    <FaGithub
                      onClick={() => {
                        window.open(item.githubLink);
                      }}

                      className="w-7 h-7 cursor-pointer text-[#000000] lg:hover:text-[#2b2e2e]"
                    />
                  )}
                  {item.liveLink && (
                    <RxOpenInNewWindow onClick={() => {
                        window.open(item.liveLink);
                      }}
                       className="w-7 h-7 cursor-pointer text-[#000000] lg:hover:text-[#2b2e2e]" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
