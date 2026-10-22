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

// Every external link lives here so the site never has two different versions of one.
export const LINKS = {
  email: "vsidhartha71@gmail.com",
  linkedin: "https://www.linkedin.com/in/sidharthavyas",
  linkedinLabel: "linkedin.com/in/sidharthavyas",
  github: "https://github.com/Sidharthavyas",
  githubUsername: "Sidharthavyas",
  whatsappNumber: "919029562156",
  whatsappLabel: "+91 9029562156",
};

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "Kotlin", "Swift"],
  Backend: ["FastAPI", "Node.js", "Express.js", "Next.js Route Handlers", "REST APIs", "WebSockets", "Webhooks", "Cloudflare Workers"],
  Databases: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "SQLite", "ChromaDB"],
  "AI & LLMs": ["LangGraph", "LangChain", "RAG", "Multi-agent systems", "Model fallback & routing", "MCP", "Gemini", "OpenAI", "Groq", "RAGAS"],
  "On-device & Voice AI": ["Gemma 3 (MediaPipe)", "whisper.cpp", "Apple Vision OCR", "ElevenLabs", "Deepgram", "Vapi", "Exotel"],
  Automation: ["n8n", "Pabbly", "WATI (WhatsApp)", "Event-driven workflows", "Background jobs"],
  "Frontend & Mobile": ["React", "Next.js", "React Native", "SwiftUI", "Tailwind CSS"],
  Infrastructure: ["Docker", "AWS", "Google Cloud", "Vercel", "GitHub Actions", "Git"],
  Security: ["JWT", "OAuth2", "Better Auth", "RBAC", "Rate limiting", "Zod validation"],
};

export const experience = [
  {
    role: "Executive - Automation",
    company: "Malkansview Training Institute",
    location: "Mumbai",
    period: "Aug 2026 – Present",
    highlights: [
      "Automated outbound sales calling with AI voice agents built in Python and n8n on ElevenLabs voice and Exotel telephony",
      "Automated booking confirmations with WhatsApp agents connecting WATI and ElevenLabs through production webhooks",
      "Automated review collection and follow-ups with Python, n8n and Pabbly workflows across WATI, Google Reviews and Trustpilot",
      "Unified 6+ platforms into one automation stack through Python REST and webhook integrations deployed on Docker",
    ],
  },
  {
    role: "Software Developer - Backend",
    company: "DATRAX Services Pvt. Ltd.",
    location: "Mumbai",
    period: "Nov 2025 – Mar 2026",
    deployment: "Deployed at Sapphire Foods India Ltd. (KFC operations)",
    highlights: [
      "Delivered D-MPNC, a production inventory platform for multi-location KFC restaurants, by designing 20+ FastAPI REST APIs",
      "Implemented FIFO stock ledgers, batch tracking and automated expiry handling, modelling inventory as state transitions so stock movement stays traceable per store",
      "Gave store managers sales history, inventory and demand forecasts through SQL Server stored procedures, indexing and reports",
      "Built role-based access with separate views for Store Managers and Cooks",
    ],
  },
  {
    role: "Software Engineer Intern - Backend",
    company: "Translogistics Pvt. Ltd.",
    location: "Mumbai",
    period: "Dec 2024 – Nov 2025",
    highlights: [
      "Built secure Node.js REST APIs and third-party integrations for a logistics CRM, enabling real-time data management",
      "Reduced query latency across logistics workflows by optimising PostgreSQL schemas, indexes and execution plans",
    ],
  },
  {
    role: "Software Engineer Intern - IoT & Backend",
    company: "Vighnesh.inc",
    location: "Mumbai",
    period: "Jul 2024 – Dec 2024",
    highlights: [
      "Improved IoT data processing accuracy by 30% by building ingestion handlers with stricter validation and fault-tolerant error handling",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github: string | null;
  demo: string | null;
  category: string;
  featured: boolean;
  client?: boolean;
};

export const projects: Project[] = [
  {
    id: "mpnc",
    name: "D-MPNC",
    tagline: "Inventory platform for multi-location KFC restaurants",
    description:
      "A production backend for Material Planning & Consumption at KFC restaurants operated by Sapphire Foods. It replaced manual stock tracking with FIFO ledgers, batch tracking, automated expiry handling and demand forecasting behind 20+ FastAPI APIs.",
    tech: ["Python", "FastAPI", "SQL Server", "T-SQL", "Stored procedures"],
    features: [
      "20+ production REST APIs",
      "FIFO stock ledgers with inventory modelled as state transitions",
      "Sales history, inventory and forecast reports for store managers",
      "Role-based views for Store Managers and Cooks",
    ],
    github: null,
    demo: null,
    category: "Enterprise Backend",
    featured: true,
  },
  {
    id: "memora",
    name: "Memora",
    tagline: "AI handwriting notebook for iPad",
    description:
      "A native iPad notebook that turns a day of handwritten notes into one AI briefing, using PencilKit and on-device OCR. A Cloudflare Worker gateway keeps AI cost to one request per day of changed notes. In client testing.",
    tech: ["Swift", "SwiftUI", "PencilKit", "Apple Vision", "SwiftData", "CloudKit", "Cloudflare Workers", "Gemini", "Groq"],
    features: [
      "Handwriting to text with on-device OCR",
      "One content-hashed AI request per day; unchanged days cost nothing",
      "3-model fallback chain with Retry-After cool-downs",
      "Schema-validated summaries",
    ],
    github: null,
    demo: null,
    category: "AI / Mobile",
    featured: true,
    client: true,
  },
  {
    id: "remi",
    name: "Remi",
    tagline: "Offline voice-first reminder app for Android",
    description:
      "Voice reminders that work with no internet. Speech goes through a cost-tiered pipeline: whisper.cpp, a rule-based parser, on-device Gemma 3 1B, then cloud LLMs. A native Kotlin alarm engine survives reboots, timezone changes and Doze.",
    tech: ["React Native", "TypeScript", "Kotlin", "whisper.cpp", "Gemma 3", "Groq", "Gemini", "SQLite", "Next.js", "PostgreSQL", "Zod"],
    features: [
      "Offline speech-to-text and on-device LLM, with cloud fallback",
      "Every model output validated with Zod before it creates a reminder",
      "155 automated tests",
      "Sync backend with idempotency keys, tombstones and last-write-wins merge",
    ],
    github: "https://github.com/Sidharthavyas/Remi",
    demo: null,
    category: "AI / Mobile",
    featured: true,
  },
  {
    id: "marketpulse",
    name: "MarketPulse AI",
    tagline: "Multi-agent equity research analyst",
    description:
      "Generates source-cited equity research reports with a 6-stage LangGraph agent pipeline that critiques its own drafts and verifies claims before publishing.",
    tech: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Gemini API", "Tavily"],
    features: [
      "6-stage LangGraph agent pipeline",
      "Self-critique and claim verification",
      "Source-cited reports",
    ],
    github: "https://github.com/Sidharthavyas/Marketpulse-AI",
    demo: null,
    category: "AI / Agents",
    featured: true,
  },
  {
    id: "borrowbox",
    name: "BorrowBox",
    tagline: "Peer-to-peer borrowing marketplace",
    description:
      "A live marketplace for borrowing items from people nearby, with auth, listings, geo search, requests, messaging and reviews. Double-booking is prevented under concurrent requests by running the borrow lifecycle inside MongoDB transactions.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Zod", "Cloudinary", "GitHub Actions"],
    features: [
      "9-state borrow lifecycle inside MongoDB transactions",
      "Rate limits that hold across server instances",
      "Upload proxy that verifies file signatures",
      "Server-side ownership checks on every API",
    ],
    github: null,
    demo: "https://borrowbox-liard.vercel.app/",
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "nidsscrochet",
    name: "Nidsscrochet",
    tagline: "Live e-commerce store for a Mumbai crochet business",
    description:
      "An online store for a handmade crochet business with Razorpay payment verification, customer accounts and order tracking, built with Next.js and live since October 2025.",
    tech: ["Next.js", "MongoDB", "Razorpay", "Cloudinary", "JWT", "Vercel"],
    features: [
      "Razorpay payments verified server-side",
      "Customer accounts and order tracking",
      "Cloudinary product images",
    ],
    github: null,
    demo: "https://www.nidsscrochet.in/",
    category: "Full-Stack",
    featured: true,
    client: true,
  },
  {
    id: "documind",
    name: "DocuMind AI",
    tagline: "RAG document assistant",
    description:
      "Grounded document Q&A through an end-to-end RAG pipeline behind 9 FastAPI endpoints, with a 4-provider LLM fallback and RAGAS evaluation.",
    tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "RAGAS", "React 19"],
    features: ["Recursive chunking and embeddings", "4-provider LLM fallback", "RAGAS evaluation"],
    github: "https://github.com/Sidharthavyas/Documind-Frontend",
    demo: null,
    category: "AI / Backend",
    featured: false,
  },
  {
    id: "flow",
    name: "Flow",
    tagline: "Personal finance tracker",
    description:
      "An expense, savings and investment tracker that stores money as integer paise to avoid floating-point errors, with bcrypt auth, hashed TTL sessions and per-user query scoping.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Zod"],
    features: ["Money stored as integer paise", "Hashed TTL sessions", "Per-user query scoping"],
    github: "https://github.com/Sidharthavyas/Flow-",
    demo: "https://flow-blush-nu.vercel.app/login",
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "ai-mock-interview",
    name: "AI Mock Interview",
    tagline: "Voice-first interview simulator",
    description:
      "Spoken interview practice with automated scoring, using a real-time voice pipeline (Vapi, Deepgram, ElevenLabs) with Gemini and Groq generating questions and feedback.",
    tech: ["Next.js", "TypeScript", "Vapi", "Deepgram", "ElevenLabs", "Gemini", "Groq", "Firebase"],
    features: ["Real-time voice interview loop", "AI questions and feedback", "Automated scoring"],
    github: "https://github.com/Sidharthavyas/Ai-mock-Interview",
    demo: "https://ai-mock-interview-phi-mauve.vercel.app/",
    category: "AI / Voice",
    featured: false,
  },
  {
    id: "cyberguard",
    name: "CyberGuard",
    tagline: "AI cyberbullying detection platform",
    description:
      "A real-time moderation platform that detects abusive content in Hindi, Hinglish and English using a Toxic-BERT and MuRIL ensemble, escalating uncertain predictions to an LLM.",
    tech: ["FastAPI", "React", "Redis", "WebSockets", "MuRIL", "Toxic-BERT", "Gemini API"],
    features: ["Real-time moderation dashboard", "Multilingual toxicity detection", "LLM fallback for uncertain predictions"],
    github: "https://github.com/Sidharthavyas/Cyberguard---A-webapp-for-mitigating-CyberBullying",
    demo: "https://cyberguard-a-webapp-for-mitigating.vercel.app",
    category: "AI / Backend",
    featured: false,
  },
  {
    id: "goalsocial",
    name: "GoalSocial",
    tagline: "Real-time goal tracking with friends",
    description:
      "A social habit and goal tracker with live updates between friends over WebSockets, backed by MongoDB.",
    tech: ["Node.js", "Express", "Socket.IO", "MongoDB", "React", "JWT"],
    features: ["Real-time activity updates", "Socket.IO rooms per user's friends", "JWT authentication"],
    github: "https://github.com/Sidharthavyas/GoalSocial",
    demo: "https://goal-social.vercel.app/",
    category: "Full-Stack",
    featured: false,
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
  mpnc: {
    problem:
      "Multi-location KFC restaurants tracked stock by hand. Ingredients expire, batches must be used in FIFO order, and store managers need sales history and demand forecasts to plan, but there was no system giving per-store, traceable stock movement.",
    architecture:
      "A FastAPI backend over SQL Server exposes 20+ REST endpoints for inventory, consumption and reporting. Inventory is modelled as a FIFO ledger of batches, and every stock change, including expiry, is a state transition, so movement stays traceable per store. Reporting runs through SQL Server stored procedures, and role-based access gives Store Managers and Cooks different operational views.",
    decisions: [
      "Modelled inventory as state transitions so every unit of stock can be traced from receipt to consumption or expiry",
      "Used a FIFO ledger for batches so the oldest stock is consumed first",
      "Put reporting logic in SQL Server stored procedures with indexing and query tuning, close to the data",
      "Separated permissions and views for Store Managers and Cooks",
    ],
    challenges: [
      "Keeping per-store stock correct as batches are received, consumed and expire",
      "Serving sales history, inventory and forecast reports fast enough for daily planning",
    ],
    impact: [
      "Replaced manual stock tracking for multi-location KFC restaurants",
      "20+ production REST APIs",
      "Store managers see sales history, inventory and demand forecasts in one place",
    ],
  },
  memora: {
    problem:
      "A client wanted handwritten iPad notes turned into a daily AI briefing, without AI costs growing with every note or the feature breaking when free-tier quotas run out.",
    architecture:
      "PencilKit captures handwriting and Apple Vision runs OCR on-device. Notes are stored in SwiftData and synced with CloudKit. Once a day, all changed notes are batched into a single content-hashed request to a Cloudflare Worker gateway, which calls Gemini and falls back to Groq, respecting Retry-After cool-downs and validating the response schema.",
    decisions: [
      "OCR on-device so handwriting never needs a server round-trip",
      "One content-hashed request per day: unchanged days cost nothing",
      "A Cloudflare Worker gateway so API keys never ship in the app and providers can change without an app update",
      "A 3-model fallback chain with Retry-After cool-downs to stay available past free-tier quotas",
    ],
    challenges: [
      "Keeping AI cost predictable for a client on free-tier APIs",
      "Handling quota errors without the briefing silently failing",
    ],
    impact: [
      "AI calls capped at one per day of changed notes",
      "Summaries stay available when a provider's free quota runs out",
      "In client testing",
    ],
  },
  remi: {
    problem:
      "Voice reminders usually need the internet and cloud speech APIs, and phone alarms often fail after reboots, timezone changes or battery-saving Doze mode.",
    architecture:
      "Speech goes through a cost-tiered pipeline: whisper.cpp transcribes offline, a rule-based parser handles simple phrases, on-device Gemma 3 1B INT4 (MediaPipe) handles harder ones on capable phones, and Groq or Gemini are the last resort. Every model output is validated with Zod schemas and semantic checks. A native Kotlin engine on SQLite and AlarmManager schedules alarms, and a Next.js + PostgreSQL backend syncs reminders across devices.",
    decisions: [
      "Cheapest-first pipeline: rules before on-device model before cloud model",
      "Validate every LLM output with Zod and semantic checks, with one repair attempt per provider, before creating a reminder",
      "Native Kotlin alarm engine instead of JavaScript timers so alarms survive reboots, DST and Doze",
      "Sync with idempotency keys, tombstones and last-write-wins merge so retries and deletes stay consistent",
    ],
    challenges: [
      "Running speech recognition and an LLM on-device within phone memory limits",
      "Making alarms fire reliably across reboots, timezone/DST changes and Doze",
      "Stopping a wrong model output from creating a wrong reminder",
    ],
    impact: [
      "Voice reminders that work fully offline",
      "Alarms that survive reboots, DST changes and Doze",
      "155 automated tests",
    ],
  },
  marketpulse: {
    problem:
      "LLM-written research reports often contain unsupported or invented claims, which makes them unusable for investment research.",
    architecture:
      "A 6-stage LangGraph agent pipeline served through FastAPI researches a company with Tavily web search, drafts a report with Gemini, critiques its own draft and verifies claims against sources before producing a source-cited report. PostgreSQL stores results.",
    decisions: [
      "Separate agent stages instead of one long prompt, so each step can be checked",
      "A self-critique stage before publishing",
      "Claim verification against retrieved sources, with citations in the final report",
    ],
    challenges: [
      "Stopping unsupported claims from reaching the final report",
      "Keeping each agent stage's output structured enough for the next stage to check",
    ],
    impact: ["Source-cited equity research reports", "Claims checked against sources before publishing"],
  },
  borrowbox: {
    problem:
      "In a borrowing marketplace, two people can request the same item for overlapping dates at the same moment. Without care, both requests succeed and the item gets double-booked.",
    architecture:
      "A Next.js and TypeScript app on MongoDB. Each borrow moves through a 9-state lifecycle, and every transition runs inside a MongoDB transaction that rechecks overlapping bookings before committing. Every API checks ownership server-side and validates input with Zod. Rate limits are stored in MongoDB so they hold across instances, and uploads go through a Cloudinary proxy that verifies file signatures.",
    decisions: [
      "Recheck overlaps inside the transaction rather than before it, closing the race window",
      "An explicit 9-state lifecycle so invalid transitions are rejected",
      "Database-backed rate limits instead of in-memory ones, so they work across multiple server instances",
      "Verify file signatures on upload instead of trusting file extensions",
    ],
    challenges: ["Preventing double-booking under concurrent requests", "Securing every endpoint consistently"],
    impact: ["No double-booking under concurrent requests", "Live marketplace with auth, geo search, messaging and reviews"],
  },
  nidsscrochet: {
    problem:
      "A Mumbai crochet business needed its own online store with secure payments instead of selling only through social media.",
    architecture:
      "A Next.js storefront on Vercel with MongoDB for products, accounts and orders, Cloudinary for product images, JWT customer accounts, and Razorpay payments verified server-side before an order is confirmed.",
    decisions: [
      "Server-side Razorpay payment verification so orders can't be faked from the browser",
      "Cloudinary for image hosting and optimisation",
      "Vercel for simple deploys the client doesn't have to manage",
    ],
    challenges: ["Making payments trustworthy for a small business", "Keeping the store simple for a non-technical owner"],
    impact: ["Live store at nidsscrochet.in since October 2025", "Payments, accounts and order tracking in production"],
  },
};
