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
    title: "Skillofin Talent Platform",
    shortDesc:
      "Performance-based freelancing platform that supports trustless global hiring, real-time payments with Stripe, and proof-of-work validation.",
    strategy: ["Trustless Hiring", "Proof of Work"],
    viewCode: false,
    openProject: true,
    private: true,
    link: "https://www.skillofin.com/",
    category: ["web"],
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
    title: "eOffice Support System",
    shortDesc:
      "Internal ticketing and support platform with role-based access and real-time updates, built with React, PostgreSQL, and Docker.",
    strategy: ["Ownership", "Real-time", "UI/UX"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web", "API"],
    technologies: [
      "Vite",
      "Reactjs",
      "Typescript",
      "Tailwindcss",
      "Postgresql",
      "Nextjs",
      "Docker",
    ],
  },
  {
    title: "RailTel ID Card Generation System",
    shortDesc:
      "Full-stack solution to generate employee ID cards using jsReport templates with secure backend and Docker deployment.",
    strategy: ["Automation", "Data Integrity"],
    private: true,
    viewCode: false,
    openProject: false,
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
    title: "MediRetrieve_AI",
    shortDesc:
      "Document intelligence system using LLMs and vector databases for structured data extraction from unstructured files.",
    strategy: ["AI Integration", "Document Intelligence"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web", "API"],
    technologies: [
      "Llm",
      "Postgresql",
      "Mongodb",
      "Fastapi",
      "Nextjs",
      "Python",
      "Reactjs",
    ],
  },
  {
    title: "3Lines Admin Dashboard with KYC & Chat",
    shortDesc:
      "Secure admin panel with KYC flow, live WebSocket-based chat, role-based access and real-time notifications.",
    strategy: ["Clean Code", "Security"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web"],
    technologies: ["Reactjs", "Shadcn", "Tailwindcss", "Websocket"],
  },
  {
    title: "CPD API Management Admin Interface",
    shortDesc:
      "Admin dashboard for API monitoring, provider setup, pricing control, and commission logs with secure UI.",
    strategy: ["Provider Priority", "Secure APIs"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web"],
    technologies: ["Reactjs", "Typescript", "Shadcn", "Tailwindcss"],
  },
  {
    title: "Hyderabad Metro Navigation and Route UI",
    shortDesc:
      "Interactive map with metro routes, interchange logic, live status, and intuitive UI for quick navigation.",
    strategy: ["Clean Code", "Logic"],
    viewCode: true,
    openProject: true,
    link: "https://hyderabadmetro.vercel.app/",
    category: ["web"],
    technologies: ["Reactjs", "Shadcn", "Tailwindcss"],
    codeLink: "https://github.com/afriddev/hyderabad_metro",
    backend: true,
    backendCodeLink: "https://github.com/afriddev/hyderabad_metro_api",
  },
  {
    title: "Email API Web Integration Portal",
    shortDesc:
      "Frontend for developers to explore the Email API service with SDK links for Python, Dart, Node.js, and Java.",
    strategy: ["Integration", "Minimal UI"],
    viewCode: true,
    openProject: true,
    link: "https://emailsender.afrid.live/",
    category: ["web"],
    technologies: ["Reactjs", "Shadcn", "Tailwindcss"],
    backend: true,
    backendCodeLink: "https://github.com/afriddev/emailAPI",
    codeLink: "https://github.com/afriddev/email_sender_web",
  },
  {
    title: "Fininfolib HR Dashboard and Analytics",
    shortDesc:
      "HR dashboard for managing employee leaves, analytics, filters, and charts with a modern UI and MongoDB backend.",
    strategy: ["Data Accuracy", "Employee Management"],
    viewCode: true,
    openProject: true,
    link: "https://fininfolib.vercel.app/",
    category: ["web"],
    technologies: ["Reactjs", "Nextjs", "Tailwindcss", "Tanstack", "Mongodb"],
    codeLink: "https://github.com/afriddev/fininfolib",
  },
  {
    title: "Dhootha Product Marketing and Promo Site",
    shortDesc:
      "Promotional website with responsive design and animated content to boost product visibility and user engagement.",
    strategy: ["Product Reach", "User Engagement"],
    viewCode: true,
    openProject: true,
    backend: false,
    link: "https://www.doothapromotions.com/",
    category: ["web"],
    technologies: ["Reactjs", "Tailwindcss", "Typescript"],
    codeLink: "https://github.com/afriddev/dhootha_main",
  },
  {
    title: "FreshSlice Food Ordering Web Application",
    shortDesc:
      "Stripe-enabled food ordering system with real-time menu, cart, payments, and order history for end-users.",
    strategy: ["User Experience", "Payment Integration"],
    viewCode: true,
    openProject: false,
    category: ["web", "API"],
    technologies: ["Nextjs", "Tailwindcss"],
    codeLink: "https://github.com/afriddev/freshslice",
  },
  {
    title: "Email Sender Library for All Platforms",
    shortDesc:
      "Cross-platform library to send emails easily using Python, Dart, Node.js with SDKs and minimal configuration.",
    strategy: ["Integration", "Minimal Code"],
    viewCode: false,
    openProject: true,
    category: ["openSource"],
    technologies: ["Python", "Fastapi", "Dart", "Nodejs"],
    link: "https://pub.dev/packages/email_sender",
  },
  {
    title: "Flutter-Based Mobile Apps for Clients",
    shortDesc:
      "Multiple mobile apps built using Flutter and Firebase with custom authentication, data sync, and clean UI.",
    strategy: ["Performance", "Design"],
    viewCode: true,
    openProject: false,
    category: ["app"],
    technologies: ["Flutter", "Dart", "Firebase", "Mongodb"],
  },
  {
    title: "Tailoring APP Service API for Orders and Delivery",
    shortDesc:
      "Backend API for tailoring service with order customization, delivery tracking, and Razorpay + Firebase notifications.",
    strategy: ["Customization", "Integration"],
    viewCode: true,
    openProject: false,
    backend: true,
    category: ["API", "app"],
    technologies: ["Expressjs", "Firebase", "Mongodb", "Nodejs", "Flutter"],
    codeLink: "https://github.com/afriddev/ameerunisa-tailors",
    backendCodeLink: "https://github.com/afriddev/aaaTailors-mongo_api",
  },
  {
    title: "Muniammamma Pickles Website",
    shortDesc:
      "Full-stack web platform for selling homemade pickles online with Razorpay payments, Spring Boot backend, and MongoDB.",
    strategy: ["E-commerce", "Performance", "Payments"],
    viewCode: true,
    openProject: true,
    backend: true,
    category: ["web", "API"],
    technologies: [
      "Reactjs",
      "Spring Boot",
      "Tailwindcss",
      "MongoDB",
      "Razorpay",
    ],
    link: "https://www.muniammammapickles.in/",
    codeLink: "https://github.com/afriddev/muniammamapickels",
    backendCodeLink: "https://github.com/afriddev/muniammamapicklesapi",
  },
];
