export const COLORS = {
  bg: "#09090b",
  bgCard: "#111114",
  bgCard2: "#18181c",
  border: "rgba(255,255,255,0.07)",
  borderHover: "rgba(34,211,238,0.3)",
  text: "#f1f5f9",
  muted: "#64748b",
  accent: "#22d3ee",
  accentDim: "rgba(34,211,238,0.08)",
  accentDim2: "rgba(34,211,238,0.15)",
};

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  Backend: ["FastAPI", "Node.js", "Express", "REST APIs"],
  Databases: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Infrastructure: ["Docker", "Vercel", "Cloud Platforms"],
  "ML & AI": ["HuggingFace Transformers", "MuRIL", "Toxic-BERT", "Gemini API"],
};

export const experience = [
  {
    role: "Software Developer",
    company: "DATRAX Services Pvt. Ltd.",
    location: "Mumbai",
    period: "Nov 2025 – Present",
    deployment: "Deployed at Sapphire Foods India Ltd. for KFC operations",
    highlights: [
      "Built MPNC (Material Planning and Consumption), a backend platform for inventory tracking and demand forecasting",
      "Implemented over 20 REST APIs using FastAPI and SQL Server",
      "Designed FIFO inventory consumption logic and batch lifecycle management",
      "Optimized SQL queries for production workloads",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Translogistics Pvt. Ltd.",
    location: "Mumbai",
    period: "Dec 2024 – Sep 2025",
    highlights: [
      "Developed backend APIs using Node.js",
      "Optimized PostgreSQL queries and schemas",
      "Collaborated with product and QA teams to improve system reliability",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Vighnesh.inc",
    location: "Mumbai",
    period: "Jul 2024 – Dec 2024",
    highlights: [
      "Developed backend systems for IoT device management",
      "Improved system precision by 30%",
      "Reduced real-time processing latency by 40%",
    ],
  },
];

export const projects = [
  {
    id: "cyberguard",
    name: "CyberGuard",
    tagline: "AI-Powered Cyberbullying Detection Platform",
    description:
      "A real-time moderation platform that detects abusive content across social platforms using machine learning models and large language model fallback.",
    tech: ["FastAPI", "React", "Redis", "WebSockets", "MuRIL", "Toxic-BERT", "Gemini API"],
    features: [
      "Real-time moderation dashboard",
      "Multilingual toxicity detection",
      "Machine learning ensemble model",
      "LLM fallback for uncertain predictions",
    ],
    github: "https://github.com/Sidharthavyas/Cyberguard---A-webapp-for-mitigating-CyberBullying",
    demo: "https://cyberguard-a-webapp-for-mitigating.vercel.app",
    category: "AI / Backend",
  },
  {
    id: "goalsocial",
    name: "GoalSocial",
    tagline: "Real-time Goal Tracking Platform",
    description:
      "A social habit and goal tracking platform with live updates between users, powered by WebSockets and real-time event streaming.",
    tech: ["Node.js", "Express", "Socket.IO", "MongoDB", "React"],
    features: [
      "Real-time activity updates",
      "WebSocket communication",
      "User authentication using JWT",
      "Social goal sharing",
    ],
    github: "https://github.com/Sidharthavyas/GoalSocial",
    demo: null,
    category: "Full-Stack",
  },
  {
    id: "mpnc",
    name: "MPNC",
    tagline: "Material Planning and Consumption System",
    description:
      "An enterprise backend system used for restaurant operations, featuring inventory tracking, batch lifecycle management, expiry handling, and demand forecasting.",
    tech: ["FastAPI", "Python", "SQL Server", "Redis"],
    features: [
      "Built 20+ production APIs",
      "Ledger-style inventory tracking with FIFO logic",
      "Batch lifecycle and expiry management",
      "Demand forecasting engine",
    ],
    github: null,
    demo: null,
    category: "Enterprise Backend",
  },
  {
    id: "nidsscrochet",
    name: "Nidsscrochet",
    tagline: "SSR E-commerce Website",
    description:
      "A Next.js based e-commerce storefront optimized for performance and SEO, with server-side rendering and modern UI.",
    tech: ["Next.js", "React", "Tailwind CSS", "SSR", "Vercel"],
    features: [
      "Server-side rendering for SEO",
      "Vercel deployment pipeline",
      "Optimized Lighthouse performance score",
      "Responsive product storefront",
    ],
    github: "https://github.com/Sidharthavyas/Nidsscrochet",
    demo: "https://nidsscrochet-shopping.vercel.app",
    category: "Full-Stack",
  },
];

export const caseStudies: Record<string, {
  problem: string;
  architecture: string;
  decisions: string[];
  challenges: string[];
  impact: string[];
  diagram?: { nodes: string[]; arrows: string[][] };
}> = {
  cyberguard: {
    problem:
      "Social media platforms face a significant challenge in detecting and moderating abusive, toxic, or cyberbullying content at scale. Manual moderation is slow and doesn't scale, while simplistic keyword filtering produces too many false positives. The goal was to build an intelligent, real-time moderation engine capable of handling multilingual content.",
    architecture:
      "CyberGuard uses a layered ML pipeline. Incoming content is first processed by a fast ensemble of Toxic-BERT and MuRIL models for low-latency classification. Uncertain predictions (low confidence scores) are escalated to Gemini API for deeper semantic analysis. Results are pushed in real-time via WebSockets to the moderation dashboard. Redis is used for job queuing and caching frequent predictions.",
    decisions: [
      "Chose FastAPI over Flask for native async support, critical for WebSocket throughput and concurrent model inference",
      "Used MuRIL for multilingual support to handle Hindi/Hinglish content common in Indian social platforms",
      "Implemented LLM fallback (Gemini) only for borderline cases to minimize latency and API cost",
      "Redis pub/sub for broadcasting real-time moderation events to connected dashboard clients",
    ],
    challenges: [
      "Balancing model accuracy vs inference latency for real-time use cases",
      "Handling code-switched text (Hindi + English) with standard English-only models",
      "Managing WebSocket connections at scale with async FastAPI workers",
      "Designing a confidence threshold that minimizes both false positives and false negatives",
    ],
    impact: [
      "End-to-end moderation pipeline with sub-200ms average response time",
      "Multilingual detection supporting Hindi, Hinglish, and English content",
      "Modular architecture allowing easy model swapping and A/B testing",
      "Deployed on Vercel with live demo demonstrating real-time moderation",
    ],
  },
  goalsocial: {
    problem:
      "Habit tracking apps lack social accountability, which research shows is critical for goal completion. The challenge was to build a platform where users could share goals, track progress, and receive live encouragement from peers — all in real-time without page refreshes.",
    architecture:
      "GoalSocial is a MERN stack application with Socket.IO for real-time bi-directional communication. The backend uses Node.js with Express, with MongoDB storing user profiles, goals, and activity feeds. JWT authentication secures API routes. Socket.IO rooms are used to scope real-time updates per user's follower network.",
    decisions: [
      "Chose Socket.IO over raw WebSockets for built-in reconnection logic and room management",
      "MongoDB document model suits the flexible, nested structure of goal and activity data",
      "JWT-based stateless auth chosen to avoid session store complexity at early scale",
      "Event-driven activity feed design ensures followers receive updates without polling",
    ],
    challenges: [
      "Designing real-time event broadcasting scoped to follower graphs efficiently",
      "Managing Socket.IO rooms dynamically as users follow/unfollow each other",
      "Preventing duplicate event delivery on reconnection",
      "Structuring MongoDB schemas for efficient timeline queries",
    ],
    impact: [
      "Real-time activity updates with zero polling — purely event-driven",
      "Sub-100ms message delivery for in-room events",
      "JWT auth with refresh token rotation for secure long-lived sessions",
      "Scalable room-based event scoping for social graph updates",
    ],
  },
  mpnc: {
    problem:
      "KFC restaurant operations across India require precise inventory management at scale. Ingredients expire, batches need to be consumed in FIFO order, and demand forecasting is critical to avoid waste and stockouts. The existing systems lacked real-time visibility and programmatic lifecycle tracking for batches.",
    architecture:
      "MPNC is a FastAPI-based backend system connected to SQL Server. The API layer exposes 20+ endpoints for inventory operations. A FIFO engine processes consumption requests by querying active batches ordered by creation timestamp. Redis caches frequently accessed inventory state for read-heavy dashboard endpoints. The system is deployed in a production environment serving live KFC operations.",
    decisions: [
      "FastAPI chosen for high-throughput async I/O and automatic OpenAPI documentation for team collaboration",
      "SQL Server used to match existing enterprise infrastructure at Sapphire Foods",
      "FIFO consumption logic implemented at the database layer using window functions for correctness under concurrent writes",
      "Redis caching layer added for inventory dashboard read endpoints to reduce SQL Server load",
    ],
    challenges: [
      "Implementing FIFO batch consumption correctly under concurrent API requests to prevent race conditions",
      "Optimizing complex SQL queries joining inventory, batch, and consumption ledger tables",
      "Designing a ledger-style audit trail that could not be retroactively modified",
      "Handling batch expiry edge cases within active consumption pipelines",
    ],
    impact: [
      "20+ REST APIs powering live KFC restaurant operations across multiple locations",
      "Ledger-style inventory tracking with full audit trail",
      "FIFO consumption logic eliminating manual batch selection errors",
      "Demand forecasting module reducing ingredient waste through predictive restocking",
    ],
  },
  nidsscrochet: {
    problem:
      "A small handcraft business needed an online storefront that was fast, SEO-friendly, and easy to maintain. Client-side rendered SPAs had poor SEO out of the box, limiting organic discoverability. The goal was to build a modern e-commerce experience with server-side rendering.",
    architecture:
      "Built on Next.js App Router with server-side rendering for all product pages. Static generation is used for catalog pages while dynamic routes handle individual product pages. Tailwind CSS provides the design system. Deployed on Vercel with edge caching for globally fast page loads.",
    decisions: [
      "Next.js chosen over plain React for built-in SSR, file-based routing, and image optimization",
      "Vercel deployment for zero-config edge caching and CI/CD pipeline",
      "Tailwind CSS for rapid, consistent UI development without custom CSS overhead",
      "Server Components used for product listings to minimize client-side JavaScript bundle",
    ],
    challenges: [
      "Balancing static generation vs server-side rendering for product catalog freshness",
      "Optimizing images for web without losing quality on handcraft product photos",
      "Achieving high Lighthouse performance scores while maintaining rich UI",
      "Designing an intuitive product browsing experience for non-technical end users",
    ],
    impact: [
      "Live production e-commerce site deployed on Vercel",
      "SEO-optimized pages with server-side rendered meta tags",
      "Fast page loads with Vercel edge caching",
      "Clean, responsive UI accessible on mobile and desktop",
    ],
  },
};

// Generate mock GitHub contribution data
export function generateContributionData() {
  const weeks = 52;
  const days = 7;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      // Create realistic-looking contribution patterns
      const isWeekend = d === 0 || d === 6;
      const rand = Math.random();
      let level = 0;
      if (rand > (isWeekend ? 0.7 : 0.4)) level = 1;
      if (rand > (isWeekend ? 0.85 : 0.6)) level = 2;
      if (rand > (isWeekend ? 0.93 : 0.78)) level = 3;
      if (rand > (isWeekend ? 0.97 : 0.9)) level = 4;
      week.push(level);
    }
    data.push(week);
  }
  return data;
}

export const githubStats = {
  totalCommits: 468,
  totalRepos: 10,
  longestStreak: 34,
  mostActiveYear: 2025,
};

export const languageDistribution = [
  { name: "Python", value: 38, color: "#3b82f6" },
  { name: "TypeScript", value: 27, color: "#22d3ee" },
  { name: "JavaScript", value: 22, color: "#f59e0b" },
  { name: "SQL", value: 10, color: "#a78bfa" },
  { name: "Other", value: 3, color: "#475569" },
];
