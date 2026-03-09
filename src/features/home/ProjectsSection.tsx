import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Animate from "../../utils/animations/Animate";

type ProjectFilter = "all" | "fullstack" | "ai";

interface ProjectData {
  title: string;
  description: string;
  categories: ProjectFilter[];
  categoryLabel: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const PROJECTS: ProjectData[] = [
  {
    title: "Cortexvia",
    description:
      "Full-scale AI knowledge platform with SmartRAG, LightRAG, GraphRAG retrieval, multi-model inference, and React chatbot SDK.",
    categories: ["fullstack", "ai"],
    categoryLabel: "AI Platform",
    image: "cv.png",
    githubLink: "https://github.com/afriddev/cortexvia",
    liveLink: "https://cortexvia.afrid.live/",
  },
  {
    title: "Muni Ammamma Pickles",
    description:
      "Full-stack e-commerce with Razorpay payments, product management, and mobile-optimized shopping experience.",
    categories: ["fullstack"],
    categoryLabel: "E-Commerce",
    image: "map.png",
    githubLink: "https://github.com/afriddev/muniammammapickles.in",
    liveLink: "https://www.muniammammapickles.in/",
  },
  {
    title: "Hyderabad Metro",
    description:
      "Map-based metro planner with real-time routes, station details, and travel insights for Hyderabad Metro.",
    categories: ["fullstack"],
    categoryLabel: "Web App",
    image: "hm.png",
    githubLink: "https://github.com/afriddev/hyderabadmetro-ui",
    liveLink: "https://hyderabadmetro.vercel.app/",
  },
  {
    title: "EmbeRankis",
    description:
      "High-performance embedding and reranking engine for RAG pipelines with dual-model orchestration and batching.",
    categories: ["ai"],
    categoryLabel: "AI Infrastructure",
    image: "dp.png",
    githubLink: "https://github.com/afriddev/EmbeRankis",
  },
];

const FILTERS: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "AI", value: "ai" },
];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <Animate delay={100}>
              <span className="section-label">Portfolio</span>
            </Animate>
            <Animate delay={200}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4">
                Featured{" "}
                <span className="font-playfair italic text-zinc-500 font-normal">
                  Works
                </span>
              </h2>
            </Animate>
          </div>

          <Animate delay={300}>
            <div className="flex items-center gap-0 mt-6 lg:mt-0 bg-zinc-100 rounded-full p-1 w-full lg:w-auto">
              {FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`flex-1 lg:flex-none text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 font-medium text-center ${
                    activeFilter === filter.value
                      ? "bg-foreground text-white"
                      : "text-zinc-500 hover:text-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Animate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <Animate key={project.title} delay={200 + index * 100}>
              <div className="group">
                <div className="project-card aspect-[4/3] bg-zinc-100 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2 ml-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-hover-rotate text-zinc-400 hover:text-foreground transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-hover-tilt text-zinc-400 hover:text-foreground transition-colors"
                      >
                        <HiArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-1 group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
