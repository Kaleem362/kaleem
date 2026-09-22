import type { SkillCategory } from '../types/index.js';

export const skillsCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: 92, category: "frontend", description: "Hooks, Context API, Lifecycle optimization, Virtual DOM, Reusable architecture" },
      { name: "TypeScript / ESNext", level: 88, category: "frontend", description: "Strict typing, generics, async/await, closures, modular clean code" },
      { name: "Tailwind CSS & Modern CSS", level: 95, category: "frontend", description: "Mobile-first responsive design, animations, design token systems" },
      { name: "State Management", level: 85, category: "frontend", description: "Redux Toolkit, Zustand, Context API, optimistic server state sync" },
      { name: "Performance & SEO", level: 82, category: "frontend", description: "Code splitting, lazy loading, Core Web Vitals optimization" }
    ]
  },
  {
    title: "Backend & API Architecture",
    skills: [
      { name: "Node.js Runtime", level: 88, category: "backend", description: "Event loop, asynchronous I/O, streams, cluster management" },
      { name: "Express.js", level: 90, category: "backend", description: "Modular routers, middleware pipelines, error handling layers, input sanitization" },
      { name: "RESTful API Design", level: 92, category: "backend", description: "Resource modeling, HTTP semantics, pagination, rate limiting, versioning" },
      { name: "Auth & Security", level: 86, category: "backend", description: "JWT access/refresh tokens, bcrypt hashing, CORS, Helmet, CSRF protection" }
    ]
  },
  {
    title: "Database Engineering",
    skills: [
      { name: "MongoDB", level: 86, category: "database", description: "Document data modeling, schema indexing, replication concepts" },
      { name: "Mongoose ODM", level: 89, category: "database", description: "Schema validation, virtuals, pre/post middleware hooks, population" },
      { name: "Aggregation Pipelines", level: 82, category: "database", description: "Multi-stage data transformations, $lookup, $group, $facet analytical queries" },
      { name: "Data Integrity & Transactions", level: 80, category: "database", description: "ACID transactions, relational constraint handling in NoSQL" }
    ]
  },
  {
    title: "CS Fundamentals & Workflow",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, category: "cs-fundamentals", description: "Time/Space complexity, graphs, trees, dynamic programming, sorting" },
      { name: "OOP & System Design", level: 86, category: "cs-fundamentals", description: "SOLID principles, design patterns, microservices vs monolith tradeoffs" },
      { name: "Git & Collaborative CI/CD", level: 90, category: "tools", description: "Branching strategies, conflict resolution, PR workflows, automated testing" },
      { name: "Postman & API Testing", level: 90, category: "tools", description: "Integration test collections, automated mock servers, environment variables" }
    ]
  }
];
