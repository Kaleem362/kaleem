import type { Project } from '../types/index.js';

export const projectsData: Project[] = [
  {
    id: "devpulse",
    title: "DevPulse — Developer Community & Project Hub",
    subtitle: "Full-Stack Collaborative Platform with Real-Time Interactions",
    description: "A comprehensive developer collaboration ecosystem where developers showcase projects, conduct technical code discussions, and manage multi-member repository workflows.",
    problem: "Developers frequently lack a unified, developer-centric platform to showcase rich markdown case studies, receive structured technical peer reviews, and discover collaborators based on technology stacks.",
    architecture: [
      "React + TypeScript client with optimistic UI updates and instant search filtering",
      "Modular Express REST API gateway with separated controllers, services, and route guards",
      "MongoDB database utilizing Mongoose population and compound indexes for fast timeline queries",
      "Token-based authentication with refresh-token rotation in secure HTTP-only cookies"
    ],
    features: [
      "Markdown-rendered tech articles and interactive code snippet embeds",
      "Tag-based project discovery engine with dynamic filtering by stack and difficulty",
      "Nested comment threads with upvote ranking algorithms",
      "Role-based user permission system (Admin, Member, Moderator)",
      "Dynamic user profile portfolios showcasing GitHub activity and verified badges"
    ],
    backendDetails: {
      endpoints: [
        "POST /api/v1/auth/register & /login (JWT + bcrypt)",
        "GET /api/v1/posts (Cursor-based pagination with tag filters)",
        "POST /api/v1/posts/:id/comments (Nested tree discussions)",
        "PATCH /api/v1/users/profile (Secure profile & skills update)"
      ],
      security: ["CORS whitelisting", "Rate limiting via express-rate-limit", "Joi / Zod input sanitization", "Helmet HTTP headers"],
      database: "MongoDB collections: Users, Posts, Comments, Tags, Analytics"
    },
    frontendDetails: {
      stateManagement: "Redux Toolkit for auth & project feeds with optimistic updates",
      styling: "Tailwind CSS with dark theme, glassmorphism badges, and smooth layout transitions",
      keyComponents: ["FeedStream", "CodeSnippetViewer", "MarkdownEditor", "AuthModal", "UserBioCard"]
    },
    challenges: [
      "Handling deeply nested comment hierarchies without catastrophic MongoDB query load — solved via materialized path patterns",
      "Preventing XSS injection in user-submitted markdown code blocks — mitigated using DOMPurify and strict AST parsing"
    ],
    futureImprovements: [
      "WebSocket integration for live collaboration chat",
      "Automated GitHub OAuth token synchronization to pull live commit stats"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "JWT", "REST API"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    metrics: [
      { label: "API Response Time", value: "<85ms" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Architecture", value: "REST / MVC" }
    ]
  },
  {
    id: "shopvibe",
    title: "ShopVibe — High-Throughput E-Commerce & Inventory Engine",
    subtitle: "Production MERN Commerce with Dynamic Cart, Checkout & Admin Dashboards",
    description: "An enterprise-grade e-commerce application featuring real-time inventory tracking, multi-criteria product filtering, resilient payment flows, and a comprehensive seller admin portal.",
    problem: "E-commerce apps often struggle with cart state inconsistencies across devices, slow multi-parameter product queries, and inventory overselling during concurrent checkouts.",
    architecture: [
      "Client SPA built with React 19, Redux Toolkit, and atomic UI component architecture",
      "Node/Express backend featuring transactional order processing and inventory locks",
      "MongoDB database leveraging multi-stage aggregation pipelines for category analytics and faceted search",
      "Automated PDF invoice generation and transaction status webhooks"
    ],
    features: [
      "Faceted product filtering by price range, brand, rating, and stock availability",
      "Persistent cart state synchronized across local storage and authenticated user sessions",
      "Interactive seller dashboard with sales charts, revenue metrics, and stock alerts",
      "Stripe payment gateway integration with webhook-verified order confirmation",
      "Comprehensive product review and rating system with verified buyer badges"
    ],
    backendDetails: {
      endpoints: [
        "GET /api/v1/products/search (Faceted search with MongoDB aggregation)",
        "POST /api/v1/orders/checkout (Atomic inventory decrement & order creation)",
        "GET /api/v1/admin/analytics (Monthly revenue aggregation by category)",
        "POST /api/v1/reviews/:productId (Validated review submission)"
      ],
      security: ["Stripe webhook signature validation", "Role-based route authorization (Customer/Admin)", "Sanitized query parameters"],
      database: "MongoDB with Mongoose: Products, Orders, Users, Reviews, Categories"
    },
    frontendDetails: {
      stateManagement: "Redux Toolkit with createAsyncThunk for cart and checkout pipelines",
      styling: "Tailwind CSS responsive design with custom filter drawers and skeleton loaders",
      keyComponents: ["ProductCatalog", "FilterSidebar", "CartDrawer", "CheckoutWizard", "AdminAnalyticsChart"]
    },
    challenges: [
      "Eliminating race conditions during concurrent checkouts — solved using atomic MongoDB conditional updates ($inc with $gte conditions)",
      "Optimizing complex multi-faceted search queries across 10,000+ mock SKUs — solved with compound database indexing"
    ],
    futureImprovements: [
      "Redis caching layer for ultra-frequently viewed product categories",
      "AI-driven product recommendations based on browsing history"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    metrics: [
      { label: "Checkout Speed", value: "1.2s" },
      { label: "Product Filtering", value: "Instant" },
      { label: "Security Guard", value: "100% RBAC" }
    ]
  },
  {
    id: "cloudsync",
    title: "CloudSync — Agile Task & Team Sprint Management System",
    subtitle: "Kanban Board & Productivity Suite with Real-Time Milestone Tracking",
    description: "A modern project management suite designed for software development squads. Features drag-and-drop Kanban boards, team role allocation, sprint milestones, and automated activity audit logs.",
    problem: "Development teams need a focused, clutter-free task management tool that accurately tracks sprint cycles, velocity metrics, and task dependencies without enterprise bloat.",
    architecture: [
      "High-performance React frontend with fluid drag-and-drop column interactions",
      "Express REST API structured with clean domain-driven service layers",
      "MongoDB database utilizing atomic sub-document mutations for fast card reordering",
      "Activity logging subsystem recording every stage transition and assignment update"
    ],
    features: [
      "Interactive Kanban board with drag-and-drop task movement and priority flags",
      "Sprint planning view with burndown charts and milestone completion trackers",
      "Custom labels, due-date reminders, checklist sub-tasks, and file attachments",
      "Team collaboration dashboard with workload distribution analytics",
      "Instant fuzzy search across tasks, descriptions, and assignees"
    ],
    backendDetails: {
      endpoints: [
        "GET /api/v1/boards/:boardId (Populated boards, columns, and task cards)",
        "PUT /api/v1/tasks/reorder (Batch position updates for drag-and-drop)",
        "POST /api/v1/tasks/:id/activity (Automatic audit trail generation)",
        "GET /api/v1/sprints/analytics (Sprint velocity and completion metrics)"
      ],
      security: ["Workspace tenant isolation", "Strict ID validation with Mongoose ObjectId casting guards", "JWT auth"],
      database: "MongoDB collections: Workspaces, Boards, Tasks, Activities, Sprints"
    },
    frontendDetails: {
      stateManagement: "Zustand / React Context for low-latency Kanban card updates",
      styling: "Tailwind CSS with custom glass cards, tag badges, and animated column drops",
      keyComponents: ["KanbanBoard", "TaskModal", "SprintTimeline", "ActivityLogFeed", "MemberAvatarGroup"]
    },
    challenges: [
      "Ensuring smooth 60fps drag-and-drop without re-rendering the entire board — solved via localized component state and memoization",
      "Maintaining ordered positions across distributed clients — solved using fractional indexing"
    ],
    futureImprovements: [
      "Real-time multi-cursor collaboration using WebSockets",
      "Slack and Discord notification webhooks for task status alerts"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Zustand"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    metrics: [
      { label: "Board Render", value: "60 FPS" },
      { label: "Task Search", value: "<15ms" },
      { label: "Sync Latency", value: "Realtime" }
    ]
  }
];
