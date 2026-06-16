import {
  SiDocker,
  SiAmazonwebservices,
  SiLangchain,
  SiRedux,
  SiDrizzle,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiCloudflare,
  SiJsonwebtokens,
  SiZod,
  SiNeo4J,
  SiApachekafka,
  SiGithubactions,
  SiLinux,
  SiFastapi,
  SiFastify,
  SiPassport,
  SiOpenai,
  SiGraphql,
  SiWebrtc,
  SiPandas,
  SiPython,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { Bot, Cloud, Code2, Database, Globe, Server, ShieldCheck, Workflow,  } from "lucide-react";

type TechStack = {
  name: string;
  icon: IconType;
  description: string;
};

const techStacks: TechStack[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "TypeScript is a typed superset of JavaScript.",
  },
    {
    name: "Linux",
    icon: SiLinux,
    description: "Open-source operating system.",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    description: "Cloud computing platform.",
  },
    {
    name: "GitHub Actions",
    icon: SiGithubactions,
    description: "CI/CD automation platform.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "React framework for SSR and static generation.",
  },
  {
    name: "LangChain",
    icon: SiLangchain,
    description: "Framework for building LLM applications.",
  },
  {
    name: "React",
    icon: SiReact,
    description: "Library for building user interfaces.",
  },
    {
    name: "NestJS",
    icon: SiNestjs,
    description: "Progressive Node.js framework.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description: "Containerization platform.",
  },
    {
    name: "GraphQL",
    icon: SiGraphql,
    description: "Query language for APIs.",
  },
  {
    name: "WebRTC",
    icon: SiWebrtc,
    description: "Real-time communication protocol.",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    description: "Async state management for React.",
  },
  {
    name: "Redux",
    icon: SiRedux,
    description: "Predictable state container for JS apps.",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework.",
  },
  {
    name: "Drizzle",
    icon: SiDrizzle,
    description: "Type-safe SQL toolkit for TypeScript.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Advanced open-source relational database.",
  },
    {
    name: "Redis",
    icon: SiRedis,
    description: "In-memory data structure store.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL document database.",
  },
  {
    name: "Go",
    icon: FaGolang,
    description: "Compiled, concurrent programming language.",
  },
  {
    name: "Python",
    icon: SiPython,
    description: "High-level general-purpose language.",
  },
    {
    name: "Cloudflare",
    icon: SiCloudflare,
    description: "Web performance and security company.",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    description: "JSON Web Tokens for authentication.",
  },
  {
    name: "Zod",
    icon: SiZod,
    description: "TypeScript-first schema validation.",
  },
  {
    name: "Neo4j",
    icon: SiNeo4J,
    description: "Graph database management system.",
  },
  {
    name: "Kafka",
    icon: SiApachekafka,
    description: "Distributed event streaming platform.",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    description: "High-performance Python web framework.",
  },
  {
    name: "Fastify",
    icon: SiFastify,
    description: "Fast and low overhead Node.js web framework.",
  },
  {
    name: "Passport",
    icon: SiPassport,
    description: "Authentication middleware for Node.js.",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    description: "AI research and deployment company.",
    },
  {
    name: "Pandas",
    icon: SiPandas,
    description: "Data analysis and manipulation library.",
  },
];

const typedTechStacks = techStacks as TechStack[];

const pillarCards = [
  {
    icon: Server,
    title: "Backend Engineering",
    short: "APIs, services, and system design",
    items: [
      "TypeScript",
      "NestJS",
      "Fastify",
      "GraphQL",
      "JWT",
      "Zod",
      "Microservices",
    ],
    accent: "from-sky-400 to-blue-500",
  },
  {
    icon: Workflow,
    title: "Realtime & Streaming",
    short: "Low-latency communication and media",
    items: [
      "WebRTC",
      "Socket.io",
      "RabbitMQ",
      "Kafka",
      "Redis",
      "FFmpeg",
      "HLS",
    ],
    accent: "from-cyan-400 to-indigo-500",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    short: "Agents, RAG, orchestration, workflows",
    items: ["LangGraph", "LangChain", "MCP", "OpenAI", "A2A", "n8n"],
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    icon: Database,
    title: "Data & Persistence",
    short: "Relational, graph, cache, analytics",
    items: ["PostgreSQL", "Drizzle", "Redis", "MongoDB", "Neo4j", "Pandas"],
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Delivery",
    short: "Infra, deployment, performance, CI/CD",
    items: ["AWS", "Docker", "Cloudflare", "Linux", "GitHub Actions", "NGINX"],
    accent: "from-orange-400 to-rose-500",
  },
  {
    icon: Globe,
    title: "Frontend & Product UI",
    short: "Responsive interfaces that ship well",
    items: [
      "Next.js",
      "React",
      "React Query",
      "Redux",
      "Tailwind",
      "shadcn/ui",
    ],
    accent: "from-amber-400 to-yellow-500",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    short: "Access control and safe defaults",
    items: ["OAuth", "RBAC", "ABAC", "CASL", "Passport", "BetterAuth"],
    accent: "from-lime-400 to-green-500",
  },
  {
    icon: Code2,
    title: "Engineering Principles",
    short: "Clean architecture and maintainability",
    items: [
      "SOLID",
      "KISS",
      "Modular design",
      "Observability",
      "Testing",
      "Linux",
    ],
    accent: "from-slate-300 to-slate-500",
  },
];

const spotlight = [
  {
    label: "Primary stack",
    value: "TypeScript • NestJS • PostgreSQL • Next.js",
  },
  {
    label: "Specialty",
    value: "Realtime systems • Multi-tenant SaaS • AI workflows",
  },
  { label: "Delivery", value: "Docker • AWS • CI/CD • Observability" },
];

const featured = [
  "TypeScript",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "AWS",
  "WebRTC",
  "Docker",
  "LangGraph",
];

export { typedTechStacks, pillarCards, spotlight, featured };
