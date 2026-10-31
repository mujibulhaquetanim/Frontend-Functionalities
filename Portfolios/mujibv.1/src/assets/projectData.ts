import { Project } from "../components/wrapper/ProjectModal";

export const projects: Project[] = [
  {
    src: "/zasmate.png",
    alt: "Zasmate AI messaging agent",
    link: "https://zasmate.com/",
    layout:
      "col-span-12 row-span-6 md:col-span-12 md:row-span-7 lg:col-span-4 lg:row-span-7 lg:col-start-1 lg:row-start-1",
    title: "Zasmate",
    badge: "SaaS · AI Agent",
    imagePosition: "object-left-top",
    description:
      "Multi-tenant SaaS that answers customer messages for businesses across WhatsApp, Messenger, Instagram, web chat, email, Telegram, and SMS. Replies are generated from each business's own catalogue and policies, in Bangla, Banglish, or English. It also handles Facebook comment replies, escalates sensitive requests such as refunds to a human, and keeps an audit log of every action. Includes a shared team inbox and plan-based usage limits.",
    tags: [
      "Next.js",
      "AI Agents",
      "RAG",
      "Multi-tenant SaaS",
      "Meta Messaging APIs",
      "Human Handoff",
    ],
  },
  {
    src: "/shopmart.gif",
    alt: "Ecomm with dashboard",
    link: "https://shopmart.mujibulhaquetanim.dev/",
    layout:
      "col-span-12 row-span-6 md:col-span-6 md:row-span-6 lg:col-span-4 lg:row-span-5 lg:col-start-1 lg:row-start-8",
    title: "Shopmart",
    badge: "Full-Stack · E-Commerce",
    description:
      "Multi-vendor e-commerce platform with a role-based admin dashboard, CASL authorization, product and inventory management, order tracking, and Cryptomous payment integration. Tenant data is isolated with PostgreSQL row-level security behind a modular NestJS backend.",
    tags: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL (RLS)",
      "Cryptomous",
      "Tailwind",
      "CASL",
      "JWT Auth",
      "multitenancy",
    ],
  },
  {
    src: "/pharmacms.gif",
    alt: "Pharma CMS",
    link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Payment%20Gateways/Stripe/One-time%20Payment",
    layout:
      "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-1",
    title: "PharmaCMS",
    badge: "Next.js · CMS",
    description:
      "Pharmacy management system with inventory tracking, an analytics dashboard, prescription records, quick product management, a cart, and Stripe one-time payments. Built for day-to-day pharmacy operations with a simple admin interface.",
    tags: [
      "Next.js",
      "ShadCN UI",
      "Node.js",
      "Express",
      "Stripe",
      "MongoDB",
      "REST API",
    ],
  },
  {
    src: "/aatbaazar.gif",
    alt: "ClientProject",
    link: "https://aat-baazar.mujibulhaquetanim.dev/",
    layout:
      "col-span-12 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4 lg:col-start-9 lg:row-start-1",
    title: "AatBaazar",
    badge: "Next.js · Marketplace",
    description:
      "Production marketplace with product listings, filtering and search, user authentication, a cart, and Stripe checkout.",
    tags: [
      "Next.js",
      "Stripe",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "JWT Auth",
    ],
  },
  {
    src: "/vanillaamazon.gif",
    alt: "VanillaAmazon",
    link: "https://github.com/mujibulhaquetanim/Frontend-Functionalities/tree/main/E-commerce/Amazon-vanilajs",
    layout:
      "col-span-12 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-6 lg:col-start-5 lg:row-start-4",
    title: "Vanilla Amazon",
    badge: "Frontend · Clone",
    description:
      "Amazon storefront clone built with plain JavaScript and no frameworks or bundlers. Covers DOM rendering, event handling, cart state in localStorage, and a simulated checkout using only browser APIs.",
    tags: ["Vanilla JS", "HTML", "CSS", "DOM API", "LocalStorage"],
  },
  {
    src: "/instafeed.gif",
    alt: "ScrollFeed",
    link: "https://mujibulhaquetanim.dev/coming-soon",
    layout:
      "col-span-12 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4 lg:col-start-9 lg:row-start-5",
    title: "ScrollFeed",
    badge: "Next.js · Social",
    description:
      "Social feed inspired by Instagram and X, with infinite scroll using cursor-based pagination, post interactions, story previews, and a responsive masonry layout. Focused on scroll performance with large, dynamic lists.",
    tags: [
      "Next.js",
      "Infinite Scroll",
      "Tanstack Query",
      "Cursor-based Pagination",
    ],
  },
  {
    src: "/YumDispatch.png",
    alt: "YumDispatch",
    link: "https://yumdispatchbd.netlify.app/",
    layout:
      "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-4 lg:col-start-9 lg:row-start-9",
    title: "YumDispatch",
    badge: "Frontend · Food Delivery",
    description:
      "Mobile-first food delivery interface for the Bangladeshi market, with restaurant and menu browsing, a cart, and an order dispatch flow.",
    tags: ["React", "Tailwind CSS", "Context API", "Netlify"],
  },
  {
    src: "/tinderClone.gif",
    alt: "tinder clone",
    link: "https://mujibulhaquetanim.dev/coming-soon",
    layout:
      "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-10",
    title: "Tinder Clone",
    badge: "Next.js · Dating App",
    description:
      "Dating app inspired by Tinder, with swipeable profile cards and matching. Matches and connections are modelled in a Neo4j graph database.",
    tags: ["Next.js", "Neo4j", "ShadCN UI"],
  },
];
