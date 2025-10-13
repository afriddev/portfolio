export type projectDataType = {
  title: string;
  shortDesc: string;
  strategy: string[];
  viewCode: boolean;
  openProject: boolean;
  link?: string;
  category: ("web" | "app" | "openSource" | "API")[];
  technologies: string[];
  private?: boolean;
  codeLink?: string;
  backend?: boolean;
  backendCodeLink?: string;
};
export const projectData: projectDataType[] = [
  {
    title: "UMID-V2 Frontend Modernization",
    shortDesc:
      "Rebuilt and modernized the UMID-V2 project frontend using React, TypeScript, and Tailwind CSS under Agile workflow.",
    strategy: ["Modern UI", "Scalability"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web"],
    technologies: ["Reactjs", "Typescript", "Tailwindcss", "Vite"],
  },
  {
    title: "eOffice Support System",
    shortDesc:
      "Internal ticketing and support platform with real-time updates, role-based access, and scalable backend built using React, Next.js, PostgreSQL, and Docker.",
    strategy: ["Real-time", "UI/UX", "Ownership"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web", "API"],
    technologies: [
      "Vite",
      "Reactjs",
      "Typescript",
      "Tailwindcss",
      "Nextjs",
      "Postgresql",
      "Docker",
    ],
  },
  {
    title: "RailTel ID Card Generation System",
    shortDesc:
      "Full-stack system to generate employee ID cards with jsReport templates, integrating secure workflows and automated printing pipelines.",
    strategy: ["Automation", "Data Security"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web", "API"],
    technologies: [
      "Reactjs",
      "Nextjs",
      "Tailwindcss",
      "Jsreport",
      "Postgresql",
      "Docker",
    ],
  },
  {
    title: "EmbedHub – Embedding and Reranking Platform",
    shortDesc:
      "High-performance AI service running dual models for embeddings and reranking, handling 1000+ requests per second with batching in PyTorch.",
    strategy: ["Scalability", "AI Infrastructure"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["API", "web"],
    technologies: [
      "Fastapi",
      "Python",
      "Pytorch",
      "Postgresql",
      "Docker",
      "Reactjs",
      "Nextjs",
    ],
  },
  {
    title: "OPD ChatAI – Intelligent Doctor Assistant",
    shortDesc:
      "AI-powered web application for HMIS that assists doctors with patient interactions and record retrieval using LLMs and vector search.",
    strategy: ["AI Integration", "Healthcare"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web", "API"],
    technologies: [
      "Fastapi",
      "Python",
      "Reactjs",
      "Tailwindcss",
      "Postgresql",
      "LLM",
      "RAG",
    ],
  },
  {
    title: "3Lines Admin Dashboard with KYC & Chat",
    shortDesc:
      "Admin dashboard featuring KYC flow, live chat with WebSockets, role-based access, and real-time notifications for enterprise users.",
    strategy: ["Security", "Real-time UI"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web"],
    technologies: ["Reactjs", "Shadcn", "Tailwindcss", "Websocket"],
  },
  {
    title: "CPD API Management Dashboard",
    shortDesc:
      "Admin interface for API monitoring, provider setup, pricing management, and service logs with advanced access control.",
    strategy: ["API Control", "Provider Management"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web", "API"],
    technologies: ["Reactjs", "Typescript", "Shadcn", "Tailwindcss"],
  },
  {
    title: "Skillofin Talent Platform",
    shortDesc:
      "Performance-based freelancing platform supporting global trustless hiring, real-time payments, and proof-of-work validation.",
    strategy: ["Proof of Work", "Trustless Hiring"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web", "API"],
    technologies: [
      "Reactjs",
      "Nextjs",
      "Vite",
      "Typescript",
      "Tailwindcss",
      "Shadcn",
      "Stripe",
    ],
  },
  {
    title: "Flutter-Based Client Applications",
    shortDesc:
      "Developed multiple client-facing apps using Flutter and Firebase, featuring authentication, data sync, and responsive UI.",
    strategy: ["Cross-Platform", "Performance"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["app"],
    technologies: ["Flutter", "Dart", "Firebase", "Mongodb"],
  },
  {
    title: "Muniammamma Pickles E-Commerce Platform",
    shortDesc:
      "Full-stack online store for homemade products, supporting Razorpay payments with a Spring Boot backend and MongoDB.",
    strategy: ["E-commerce", "Performance"],
    viewCode: false,
    openProject: false,
    private: true,
    category: ["web", "API"],
    technologies: [
      "Reactjs",
      "Spring Boot",
      "Tailwindcss",
      "MongoDB",
      "Razorpay",
    ],
  },
];
