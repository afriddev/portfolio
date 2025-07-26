
export type projectDataType = {
  title: string;
  shortDesc: string;
  strategy: string[];
  viewCode: boolean;
  openProject: boolean;
  link?: string;
  category: ("web" | "app" | "openSource" | "API")[];
  technologies: string[];
  private?:boolean
};

export const  projectData: projectDataType[] = [
  {
    title: "eOffice Support System",
    shortDesc: "Internal support platform with ticketing, user roles, and real-time updates. Built using Vite, React, and PostgreSQL; deployed via Docker.",
    strategy: ["Ownership", "Real-time", "UI/UX"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web", "API"],
    technologies: ["vite", "reactjs", "typescript", "tailwindcss", "postgresql", "nextjs", "docker"]
  },
  {
    title: "RailTel ID Card Generation System",
    shortDesc: "Full-stack tool to generate and manage employee ID cards using jsReport templates and real-time updates.",
    strategy: ["Automation", "Data Integrity"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web", "API"],
    technologies: ["reactjs", "nextjs", "tailwindcss", "jsreport", "postgresql", "docker"]
  },
  {
    title: "MediRetrieve_AI",
    shortDesc: "LLM-powered document intelligence system with embedding, vector search, feedback loop, and structured JSON extraction.",
    strategy: ["AI Integration", "Document Intelligence"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web", "API"],
    technologies: ["llm", "postgresql", "mongodb", "fastapi", "nextjs", "python", "reactjs"]
  },
  {
    title: "3Lines Admin Dashboard with KYC & Chat",
    shortDesc: "Secure admin portal with KYC flow, live WebSocket chat, role-based access and real-time notifications for multiple user types.",
    strategy: ["Clean Code", "Security"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web"],
    technologies: ["reactjs", "shadcn", "tailwindcss", "websocket"]
  },
  {
    title: "CPD API Management Admin Interface",
    shortDesc: "Dashboard for API monitoring, pricing, provider setup, security logs and commission management with smooth user experience.",
    strategy: ["Provider Priority", "Secure APIs"],
    private: true,
    viewCode: false,
    openProject: false,
    category: ["web"],
    technologies: ["reactjs", "typescript", "shadcn", "tailwindcss"]
  },
  {
    title: "Hyderabad Metro Navigation and Route UI",
    shortDesc: "Interactive metro map with station info, interchanges, real-time notifications, and modern UI for easy navigation.",
    strategy: ["Clean Code", "Logic"],
    viewCode: false,
    openProject: true,
    link: "https://hyderabadmetro.vercel.app/",
    category: ["web"],
    technologies: ["reactjs", "shadcn", "tailwindcss"]
  },
  {
    title: "Email API Client Dashboard Interface",
    shortDesc: "Frontend for sending emails, managing templates, and viewing real-time delivery analytics in a scalable dashboard.",
    strategy: ["Scalability", "Reliability"],
    viewCode: false,
    openProject: true,
    link: "https://emailserviceapi.vercel.app/",
    category: ["web"],
    technologies: ["reactjs", "shadcn", "tailwindcss"]
  },
  {
    title: "Fininfolib HR Dashboard and Analytics",
    shortDesc: "Employee platform with leave tracking, login, charts, data filters, and clean analytics features for HR teams.",
    strategy: ["Data Accuracy", "Employee Management"],
    viewCode: false,
    openProject: true,
    link: "https://fininfolib.vercel.app/",
    category: ["web"],
    technologies: ["reactjs", "nextjs", "tailwindcss", "tanstack"]
  },
  {
    title: "Dhootha Product Marketing and Promo Site",
    shortDesc: "Promotional landing page with responsive layout, dynamic content and visually engaging UI for product awareness.",
    strategy: ["Product Reach", "User Engagement"],
    viewCode: false,
    openProject: true,
    link: "https://www.doothapromotions.com/",
    category: ["web"],
    technologies: ["reactjs", "tailwindcss"]
  },
  {
    title: "FreshSlice Food Ordering Web Application",
    shortDesc: "Stripe-integrated food delivery system with live menu updates, payment, order history and responsive layout.",
    strategy: ["User Experience", "Payment Integration"],
    viewCode: true,
    openProject: false,
    category: ["web", "API"],
    technologies: ["reactjs", "tailwindcss", "stripe"]
  },
  {
    title: "Email Sender Library for All Platforms",
    shortDesc: "Cross-platform library to integrate mail sending in Dart, Node.js, and Python with minimal setup.",
    strategy: ["Integration", "Minimal Code"],
    viewCode: true,
    openProject: false,
    category: ["openSource"],
    technologies: ["python", "fastapi", "dart", "nodejs"]
  },
  {
    title: "Flutter-Based Mobile Apps for Clients",
    shortDesc: "Multiple Flutter mobile apps with Firebase, MongoDB, smooth UI, and reliable user authentication and data handling.",
    strategy: ["Performance", "Design"],
    viewCode: true,
    openProject: false,
    category: ["app"],
    technologies: ["flutter", "dart", "firebase", "mongodb"]
  },
  {
    title: "FastAPI Email Backend Integration System",
    shortDesc: "FastAPI backend for scalable, secure and efficient email sending, tracking, and storage with PostgreSQL.",
    strategy: ["Integration", "Clean Code", "Logic"],
    viewCode: true,
    openProject: false,
    category: ["API"],
    technologies: ["fastapi", "postgresql", "python"]
  },
  {
    title: "Tailoring Service API for Orders and Delivery",
    shortDesc: "API backend with order processing, customizations, and delivery tracking integrated with Firebase notifications.",
    strategy: ["Customization", "Integration"],
    viewCode: true,
    openProject: false,
    category: ["API", "app"],
    technologies: ["expressjs", "firebase", "mongodb", "nodejs"]
  },
  {
    title: "Fininfolib Financial Data API Service",
    shortDesc: "Scalable backend API to manage financial data, support filters, and display advanced analytics effectively.",
    strategy: ["Data Accuracy", "Scalability"],
    viewCode: true,
    openProject: false,
    category: ["API"],
    technologies: ["nextjs", "mongodb", "nodejs"]
  }
];
