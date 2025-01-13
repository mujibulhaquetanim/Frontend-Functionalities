import { SiDocker, SiRemix, SiRedux, SiDrizzle, SiHono, SiNestjs, SiNextdotjs, SiPrisma, SiPostgresql, SiMongodb, SiPandas, SiPython, SiReact, SiReactquery, SiSwr, SiTailwindcss, SiTypescript} from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import type { JSX, SVGProps } from 'react';

type TechStack = {
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  description: string;
};

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Next',
    icon: SiNextdotjs,
    description: 'Next.js is a React framework that enables server-side rendering and static site generation.'
  },
  {
    name: 'Remix',
    icon: SiRemix,
    description: 'Remix is a framework for building server-rendered React applications.'
  },
  {
    name: 'React Native',
    icon: SiReact,
    description: 'React Native is a framework for building native apps using React.'
  },
  {
    name: 'React Query',
    icon: SiReactquery,
    description: 'React Query is a library for fetching, caching, and updating asynchronous data in React.'
  },
  {
    name: 'Redux',
    icon: SiRedux,
    description: 'Redux is a state management library for JavaScript applications.'
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.'
  },
  {
    name: 'SWR',
    icon: SiSwr,
    description: 'SWR is a React Hooks library for data fetching.'
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    description: 'Prisma is an open-source database toolkit for TypeScript and Node.js.'
  },
  {
    name: 'Drizzle',
    icon: SiDrizzle,
    description: 'Drizzle is a collection of front-end libraries that make writing dapp front-ends easier and more predictable.'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    description: 'PostgreSQL is a powerful, open source object-relational database system.'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'MongoDB is a cross-platform document-oriented database program.'
  },
  {
    name: 'Remix',
    icon: SiRemix,
    description: 'Remix is a framework for building server-rendered React applications.'
  },
  {
    name: 'Nest',
    icon: SiNestjs,
    description: 'NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.'
  },
  {
    name: 'Hono',
    icon: SiHono,
    description: 'Hono is a lightweight, high-performance web framework for Node.js.'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    description: 'Docker is a platform for developing, shipping, and running applications in containers.'
  },
  {
    name: 'Go',
    icon: FaGolang,
    description: 'Go is a statically typed, compiled programming language designed at Google.'
  },
  {
    name: 'Python',
    icon: SiPython,
    description: 'Python is a high-level, general-purpose programming language.'
  },
  {
    name: 'Pandas',
    icon: SiPandas,
    description: 'Pandas is a high-level data manipulation library.'
  },
];

export default techStacks;
