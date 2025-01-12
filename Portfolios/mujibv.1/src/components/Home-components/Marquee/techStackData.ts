import { SiDocker, SiDrizzle, SiHono, SiJest, SiNestjs, SiNextdotjs, SiPrisma, SiPuppeteer, SiReact, SiReactquery, SiSwr, SiTailwindcss, SiTypescript} from 'react-icons/si';
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
    name: 'Puppeteer',
    icon: SiPuppeteer,
    description: 'Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium.'
  },
  {
    name: 'Jest',
    icon: SiJest,
    description: 'Jest is a delightful JavaScript testing framework with a focus on simplicity.'
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
  }
];

export default techStacks;
