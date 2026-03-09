import { useState } from "react";
import Animate from "../../utils/animations/Animate";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  tools: string[];
  allTools: string[];
  companyLink: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "RailTel Corporation of India",
    role: "Software Engineer",
    duration: "Dec 2024 — Present",
    location: "Hyderabad",
    highlights: [
      "Leading a 4-member sub-team within a 10-member division, driving design, development, and deployment of enterprise-grade applications.",
      "Delivered 4 full-stack solutions including ID management systems, ticketing platforms, and AI prototypes.",
      "Built a HIS platform with Kubernetes, HA PostgreSQL, Redis, Kafka, ELK, gRPC microservices, and dual CI/CD pipelines.",
      "Engineered RAG-based AI systems for document intelligence and semantic search using FastAPI, pgvector, and LLM integration.",
    ],
    tools: ["React", "Next.js", "FastAPI", "NestJS", "PostgreSQL", "Kubernetes", "Docker", "Kafka", "ELK", "gRPC", "RAG"],
    allTools: ["React", "Next.js", "FastAPI", "NestJS", "PostgreSQL", "Kubernetes", "Docker", "Kafka", "ELK", "gRPC", "RAG", "Python", "TypeScript", "Tailwind CSS", "ShadCN UI", "Redis"],
    companyLink: "https://www.railtel.in/",
  },
  {
    company: "Srinine Technologies",
    role: "Associate Software Engineer",
    duration: "Jan 2024 — Dec 2024",
    location: "Hyderabad",
    highlights: [
      "Owned over 60% of frontend implementation using React, TypeScript, ShadCN UI, and Tailwind CSS.",
      "Built real-time features like ticketing systems and live notifications using WebSockets.",
      "Managed a team of 5 developers, participated in hiring, and made technical decisions alongside the CEO.",
      "Delivered advanced KYC workflows, multi-role functionalities, and scalable merchant management systems.",
    ],
    tools: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "MongoDB", "ShadCN UI", "Tailwind CSS", "Bitbucket"],
    allTools: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "MongoDB", "ShadCN UI", "Tailwind CSS", "Bitbucket", "REST APIs", "Agile", "TanStack Query"],
    companyLink: "https://companydev.cpd.net.in/",
  },
];

function ExperienceSection() {
  const [expandedTools, setExpandedTools] = useState<Record<number, boolean>>({});

  function HandleToggleTools(index: number) {
    setExpandedTools((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 lg:px-12">
        <Animate delay={100}>
          <span className="section-label">Experience</span>
        </Animate>

        <Animate delay={200}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-16">
            Work &{" "}
            <span className="font-playfair italic text-zinc-500 font-normal">
              Impact
            </span>
          </h2>
        </Animate>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedTools[index];
            const displayTools = isExpanded ? exp.allTools : exp.tools;
            const hiddenCount = exp.allTools.length - exp.tools.length;

            return (
              <Animate key={exp.company} delay={300 + index * 150}>
                <div className="exp-card">
                  <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
                    <div className="flex flex-row lg:flex-col gap-6 lg:gap-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                          Duration
                        </span>
                        <span className="text-sm font-semibold">
                          {exp.duration}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                          Location
                        </span>
                        <span className="text-sm font-medium text-zinc-600">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <h3 className="text-lg lg:text-xl font-bold mb-1 hover:text-zinc-600 transition-colors cursor-pointer">
                          {exp.company.toUpperCase()}
                        </h3>
                      </a>
                      <div className="flex items-center gap-2 mb-5">
                        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-600">
                          {exp.role}
                        </span>
                      </div>

                      <ul className="flex flex-col gap-3 mb-6">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                            <span className="text-zinc-300 mt-1.5 shrink-0">●</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground font-bold mr-1">
                          Tools :
                        </span>
                        {displayTools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] uppercase tracking-wider text-zinc-500 bg-zinc-50 border border-zinc-100 rounded px-2 py-0.5"
                          >
                            {tool}
                          </span>
                        ))}
                        {hiddenCount > 0 && (
                          <span
                            onClick={() => HandleToggleTools(index)}
                            className="text-[10px] uppercase tracking-wider text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition-colors px-2 py-0.5"
                          >
                            {isExpanded ? "Show less" : `+${hiddenCount} more`}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
