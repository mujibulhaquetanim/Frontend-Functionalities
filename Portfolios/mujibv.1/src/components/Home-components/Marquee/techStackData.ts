import {
  SiDocker,
  SiRemix,
  SiRedux,
  SiDrizzle,
  SiHono,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiPandas,
  SiPython,
  SiReact,
  SiReactquery,
  SiSwr,
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
    name: "Next.js",
    icon: SiNextdotjs,
    description: "React framework for SSR and static generation.",
  },
  {
    name: "Remix",
    icon: SiRemix,
    description: "Full-stack web framework focused on web standards.",
  },
  {
    name: "React",
    icon: SiReact,
    description: "Library for building user interfaces.",
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
    name: "SWR",
    icon: SiSwr,
    description: "React data fetching library.",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    description: "Next-generation ORM for Node.js.",
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
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL document database.",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    description: "Progressive Node.js framework.",
  },
  {
    name: "Hono",
    icon: SiHono,
    description: "Fast, lightweight web framework.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description: "Containerization platform.",
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
    name: "Pandas",
    icon: SiPandas,
    description: "Data analysis and manipulation library.",
  },
];

export default techStacks;
