import type { TechnicalExpertisePillar } from '../types/index.js';

export const expertisePillars: TechnicalExpertisePillar[] = [
  {
    title: "Modern Frontend Architecture",
    subtitle: "React.js • TypeScript • Design Systems",
    description: "Developing scalable single-page applications with modular component hierarchies, strict type definitions, and sub-second load times.",
    icon: "Layout",
    bullets: [
      "Clean custom hooks isolating state logic from UI presentation",
      "Global state management with Redux Toolkit and Context API",
      "Accessible (a11y), responsive layouts tailored with modern Tailwind CSS",
      "Virtual DOM profiling, code-splitting, and memoized compute routines"
    ]
  },
  {
    title: "Robust Backend Engineering",
    subtitle: "Node.js • Express.js • REST Services",
    description: "Building resilient server applications featuring middleware pipelines, defensive validation, and high-throughput data processing.",
    icon: "Server",
    bullets: [
      "Production-grade RESTful API endpoints with full CRUD operations",
      "JWT-based auth with secure refresh-token rotation and role-based access",
      "Centralized error-handling middlewares and input sanitization",
      "Asynchronous I/O orchestration preventing event-loop congestion"
    ]
  },
  {
    title: "Database Design & Optimization",
    subtitle: "MongoDB • Mongoose • Aggregations",
    description: "Architecting flexible NoSQL schemas balanced for real-world read/write access patterns, data consistency, and low-latency querying.",
    icon: "Database",
    bullets: [
      "Advanced multi-stage aggregation pipelines ($lookup, $unwind, $group)",
      "Strategic compound indexing for rapid search and sorting",
      "Schema-level validation and lifecycle middleware hooks in Mongoose",
      "Data integrity guarantees across distributed document collections"
    ]
  },
  {
    title: "Computer Science Foundation",
    subtitle: "Data Structures • OOP • System Design",
    description: "Leveraging academic Computer Science training to solve engineering problems with algorithmic rigor rather than superficial trial-and-error.",
    icon: "Cpu",
    bullets: [
      "Optimal algorithmic selection based on asymptotic time/space complexity",
      "Object-Oriented & functional design patterns (Factory, Strategy, Observer)",
      "System design trade-offs: Caching, CAP theorem, and stateless scalability",
      "Clean Code principles, DRY architecture, and defensive programming"
    ]
  }
];
