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

export default techStacks;
