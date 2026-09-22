import type { JourneyMilestone } from '../types/index.js';

export const journeyMilestones: JourneyMilestone[] = [
  {
    phase: "Phase 1",
    period: "Foundation Years",
    title: "Computer Science Degree & Core Theory",
    subtitle: "Algorithm design, memory management, and system architecture",
    description: "Built an uncompromising academic foundation in computational theory, data structures, algorithms, relational database management systems (RDBMS), object-oriented programming, and operating systems.",
    keyLearnings: [
      "Deep understanding of algorithmic complexity (Big-O analysis)",
      "Low-level memory awareness and efficient data organization",
      "Relational vs non-relational database normalization principles"
    ],
    technologies: ["C++", "Java", "SQL", "OOP", "Data Structures", "OS Principles"],
    highlight: "Academic rigor instilled an instinct for computational efficiency and clean architectural boundaries."
  },
  {
    phase: "Phase 2",
    period: "Frontend Mastery",
    title: "Modern JavaScript & React Ecosystem",
    subtitle: "Declarative component trees, reactivity, and performance",
    description: "Transitioned core programming paradigms into modern web frontends. Mastered JavaScript internals (event loop, closures, prototypes) and dove deeply into React component composition and custom hook abstractions.",
    keyLearnings: [
      "Mastered custom hook architectures for reusable stateful logic",
      "Zero-layout-shift responsive UIs with Tailwind CSS",
      "Complex global state synchronization and memoization techniques"
    ],
    technologies: ["React.js", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    highlight: "Built rich user interfaces that prioritize sub-second render speeds and responsive cross-device experiences."
  },
  {
    phase: "Phase 3",
    period: "Backend Expansion",
    title: "Node.js, Express.js & Micro-Architectures",
    subtitle: "Asynchronous I/O pipelines and secure REST API services",
    description: "Expanded to the server runtime. Architected enterprise REST APIs, robust authentication layers with refresh token rotation, error-handling middleware, and high-throughput asynchronous request workflows.",
    keyLearnings: [
      "Non-blocking event loop execution and stream-based data handling",
      "Stateless authentication models using JWT and secure HTTP-only cookies",
      "Defensive API design with rate limiting, sanitization, and structured logs"
    ],
    technologies: ["Node.js", "Express.js", "JWT Authentication", "REST APIs", "Postman"],
    highlight: "Engineered scalable backends capable of serving data cleanly with bulletproof error boundaries."
  },
  {
    phase: "Phase 4",
    period: "Database Deep Dive",
    title: "MongoDB & Data Modeling at Scale",
    subtitle: "NoSQL schema design, indexing, and advanced aggregation",
    description: "Mastered document-oriented databases. Designed normalized vs embedded schemas tailored to real-world read/write access patterns, multi-stage aggregation pipelines, and high-performance compound indexing.",
    keyLearnings: [
      "Designing resilient schemas for complex one-to-many and many-to-many relationships",
      "Complex analytical queries using multi-stage aggregation pipelines",
      "Optimized query performance through compound indexing strategies"
    ],
    technologies: ["MongoDB", "Mongoose ODM", "Aggregation Pipelines", "Database Indexing"],
    highlight: "Turned database queries from bottlenecks into sub-millisecond execution vectors."
  },
  {
    phase: "Phase 5",
    period: "Current Focus",
    title: "Full-Stack MERN Engineering",
    subtitle: "Production-grade, end-to-end cloud-ready applications",
    description: "Unifying every layer of the modern web stack. Delivering end-to-end full-stack products where clean frontend UX directly complements scalable server backends and optimized database architectures.",
    keyLearnings: [
      "Full-stack end-to-end type safety and contract-driven API modeling",
      "CI/CD deployment pipelines, containerization concepts, and cloud hosting",
      "Holistic system design with focus on scalability, maintainability, and clean code"
    ],
    technologies: ["Full MERN Stack", "System Design", "Cloud Deployment", "Production Architecture"],
    highlight: "Delivering complete digital products built with professional craftsmanship from database to viewport."
  }
];
