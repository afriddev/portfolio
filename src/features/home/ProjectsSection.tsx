import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Animate from "../../utils/animations/Animate";

type ProjectFilter =
  | "all"
  | "fullstack"
  | "frontend"
  | "mobile"
  | "ai"
  | "dsa"
  | "opensource";

const FILTER_LABELS: Record<Exclude<ProjectFilter, "all">, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  mobile: "Mobile App",
  ai: "AI",
  dsa: "DSA",
  opensource: "Open Source",
};

const PROJECT_ACTION_LINK_CLASS =
  "group/action flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-500 shadow-[0_8px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] lg:h-9 lg:w-9";

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
    title: "DoothaPromotions",
    description:
      "A promotional website helping businesses and individuals promote products and services through professional website building and video creation.",
    categories: ["frontend"],
    categoryLabel: "Frontend",
    image: "dp.png",
    githubLink: "https://github.com/afriddev/doothapromotions.com",
    liveLink: "https://www.doothapromotions.com/",
  },
  {
    title: "Tailoring App",
    description:
      "A hybrid online cloth stitching and delivery mobile application built with Flutter and Dart, using MongoDB-backed services for scalable data handling.",
    categories: ["mobile"],
    categoryLabel: "Mobile App",
    image: "AAA.jpg",
    githubLink: "https://github.com/afriddev/tailoring-app",
  },
  {
    title: "EmbeRankis",
    description:
      "Open-source, production-ready embeddings and cross-encoder reranking service optimized for RAG, KG-RAG, and Graph-RAG pipelines with high throughput on small GPUs.",
    categories: ["ai"],
    categoryLabel: "AI Infrastructure",
    image: "llm.png",
    githubLink: "https://github.com/afriddev/EmbeRankis",
  },
  {
    title: "LeetCode Solutions",
    description:
      "A collection of 70+ LeetCode solutions in Python and JavaScript showcasing strong problem-solving in data structures and algorithms with efficient, well-commented code.",
    categories: ["dsa"],
    categoryLabel: "DSA",
    image: "leetcode.png",
    githubLink: "https://github.com/afriddev/leetcode",
  },
  {
    title: "Email Sender",
    description:
      "A scalable Flutter package for integrating email services into applications for free, improving the experience between server and client.",
    categories: ["opensource"],
    categoryLabel: "Open Source",
    image: "email-sender.png",
    githubLink: "https://github.com/afriddev/email_sender",
    liveLink: "https://pub.dev/packages/email_sender",
  },
  {
    title: "Email Sender Frontend",
    description:
      "A minimal, modern frontend for the Email API that lets developers explore and use the service from the browser, with links to official SDKs for Python, Dart, JavaScript, and Java.",
    categories: ["frontend"],
    categoryLabel: "Frontend",
    image: "email-service.png",
    githubLink: "https://github.com/afriddev/devmailer-ui",
    liveLink: "https://emailsender.afrid.live/",
  },
  {
    title: "Hyderabad Metro",
    description:
      "A full-stack metro platform providing real-time schedules, routes, and station locations for seamless travel planning and live connectivity updates.",
    categories: ["fullstack"],
    categoryLabel: "Transit Platform",
    image: "metro.png",
    githubLink: "https://github.com/afriddev/hyderabadmetro-ui",
    liveLink: "https://hyderabadmetro.vercel.app/",
  },
];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const availableCategories = Array.from(
    new Set(PROJECTS.flatMap((project) => project.categories))
  );
  const filters: { label: string; value: ProjectFilter }[] = [
    { label: "All", value: "all" },
    ...availableCategories.map((category) => ({
      label: FILTER_LABELS[category],
      value: category,
    })),
  ];

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
              <span className="section-label">Projects</span>
            </Animate>
            <Animate delay={200}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4">
                Personal{" "}
                <span className="font-playfair italic text-zinc-500 font-normal">
                  Work
                </span>
              </h2>
            </Animate>
          </div>

          {availableCategories.length > 1 && (
            <Animate delay={300}>
              <div className="mt-8 w-full rounded-[1.75rem] border border-zinc-200/80 bg-white/80 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.045)] backdrop-blur-sm lg:mt-0 lg:w-auto lg:max-w-none lg:rounded-full lg:border-0 lg:bg-zinc-100 lg:p-1 lg:shadow-none lg:backdrop-blur-0">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:items-center lg:justify-end lg:gap-0">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setActiveFilter(filter.value)}
                      className={`flex min-h-[46px] items-center justify-center rounded-2xl border px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 lg:min-h-0 lg:flex-none lg:rounded-full lg:border-transparent lg:px-4 lg:py-2 lg:font-medium lg:tracking-wider ${
                        activeFilter === filter.value
                          ? "border-foreground bg-foreground text-white shadow-[0_12px_28px_rgba(26,26,26,0.18)] lg:shadow-none"
                          : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-foreground lg:bg-transparent"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </Animate>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 w-[95%] md:w-full mx-auto">
          {filteredProjects.map((project, index) => (
            <Animate key={project.title} delay={200 + index * 100}>
              <div className="group/project">
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
                  <div className="ml-auto flex items-center gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={PROJECT_ACTION_LINK_CLASS}
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FaGithub className="block h-[18px] w-[18px] -translate-x-[0.5px] transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:scale-110 lg:h-4 lg:w-4" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={PROJECT_ACTION_LINK_CLASS}
                        aria-label={`${project.title} live project link`}
                      >
                        <HiArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5 lg:h-4 lg:w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="mb-1 text-base font-semibold transition-colors group-hover/project:text-zinc-600">
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
