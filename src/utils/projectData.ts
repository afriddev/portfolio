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
    title: "EmbeRankis  – Embedding and Reranking Platform",
    shortDesc:
      "High-performance AI service running dual models for embeddings and reranking, handling 1000+ requests per second with batching in PyTorch.",
    strategy: ["Scalability", "AI Infrastructure"],
    viewCode: true,
    openProject: false,
    private: false,
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
    codeLink:"https://github.com/afriddev/EmbeRankis"
  },
  {
    title: "Email Sender Flutter Package",
    shortDesc:
      "A scalable flutter package used to integrate email services in your applications for free and gives a better experience between server and client.",
    strategy: ["Open Source", "Cross-Platform"],
    viewCode: true,
    openProject: true,
    private: false,
    category: ["web", "API"],
    technologies: [
      "Dart"
    ],
    link:"https://pub.dev/packages/email_sender",
    codeLink:"https://github.com/afriddev/email_sender"
  },

  // {
  //   title: "Flutter-Based Client Applications",
  //   shortDesc:
  //     "Developed multiple client-facing apps using Flutter and Firebase, featuring authentication, data sync, and responsive UI.",
  //   strategy: ["Cross-Platform", "Performance","User Experience"],
  //   viewCode: true,
  //   openProject: false,
  //   private: false,
  //   category: ["app"],
  //   technologies: ["Flutter", "Dart", "Firebase", "Mongodb"],
  //   codeLink:"https://github.com/afriddev/tailoring-app"
  // },
  
  {
    title: "Devmailer - Email Sending API",
    shortDesc:
      "A lightweight FastAPI-based email service for sending emails via simple HTTP requests, easily integrable with Python, Dart, or any HTTP-enabled app.",
    strategy: ["Performance","Scalability"],
    viewCode: true,
    openProject: true,
    private: false,
    category: ["app"],
    technologies: ["FastAPI", "Python","Mongodb","React JS","Tailwind CSS"],
    codeLink:"https://github.com/afriddev/devmailer-api",
    link:"https://emailsender.afrid.live/"
  },

];
