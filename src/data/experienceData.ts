import type { ExperienceItem } from '../types/index.js';

export const experienceItems: ExperienceItem[] = [
  {
    role: "Full Stack MERN Developer",
    company: "Software House Projects & Autonomous Engineering",
    period: "2023 - Present",
    type: "Professional Experience",
    description: "Architecting full-stack web applications for commercial clients and modern SaaS platforms. Leading the lifecycle from initial database schema modeling to deployment-ready frontend user interfaces.",
    achievements: [
      "Engineered high-performance REST APIs handling multi-tenant data structures with sub-100ms response times",
      "Created reusable React UI component libraries that reduced feature delivery time by 35%",
      "Implemented secure JWT authentication flows with role-based permission gates across 4 production apps",
      "Optimized MongoDB query plans, reducing analytical dashboard aggregation latency by 60%"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "Git"]
  },
  {
    role: "Frontend React Developer",
    company: "Client Web Solutions & Freelance",
    period: "2022 - 2023",
    type: "Contract & Client Delivery",
    description: "Focused on building responsive, pixel-perfect user interfaces, dashboard portals, and interactive customer-facing web platforms.",
    achievements: [
      "Delivered responsive web applications compatible across all modern browser engines and screen viewports",
      "Integrated third-party RESTful APIs, payment workflows, and real-time state management systems",
      "Achieved 95+ Google Lighthouse scores across Performance, Accessibility, and Best Practices"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "REST APIs", "Vite"]
  }
];
