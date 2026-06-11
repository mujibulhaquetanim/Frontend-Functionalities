import { Project } from "../components/wrapper/ProjectModal";
  
  export const projects: Project[] = [
    {
      src: "/shopmart.gif",
      alt: "Ecomm with dashboard",
      link: "https://shopmart.mujibulhaquetanim.dev/",
      layout:
        "col-span-12 row-span-6 md:col-span-6 md:row-span-6 lg:col-span-4 lg:row-span-8",
      title: "Shopmart",
      badge: "Full-Stack · E-Commerce",
      description:
        "A full-featured multi-vendor e-commerce platform with a role-based admin dashboard, Authorization with CASL, product and inventory management, order tracking, and Cryptomous payment integration. Built to handle real product pressure with a clean, modular backend and a polished storefront.",
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
        "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
      title: "PharmaCMS",
      badge: "Next.js · CMS",
      description:
        "A pharmaceutical content management system with inventory tracking, Analytical Dashboard, prescription records, Quick Product Management, Cart management, and Stripe one-time payment integration. Focused on clean data handling and a straightforward admin interface for day-to-day pharmacy operations.",
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
        "col-span-12 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-6",
      title: "AatBaazar",
      badge: "Next.js · Marketplace",
      description:
        "A marketplace platform with product listings, cart management, user authentication, and a smooth checkout flow, robust filtering and search capabilities. Delivered to production with a focus on performance and reliability under real user traffic.",
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
        "col-span-12 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-6",
      title: "Vanilla Amazon",
      badge: "Frontend · Clone",
      description:
        "An Amazon.com UI clone built entirely with vanilla JavaScript — no frameworks, no bundlers. Demonstrates deep understanding of DOM manipulation, event handling, cart state management, and checkout simulation purely through browser-native APIs.",
      tags: ["Vanilla JS", "HTML", "CSS", "DOM API", "LocalStorage"],
    },
    {
      src: "/instafeed.gif",
      alt: "ScrollFeed",
      link: "https://mujibulhaquetanim.dev/coming-soon",
      layout:
        "col-span-12 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-6",
      title: "ScrollFeed",
      badge: "Next.js · Social",
      description:
        "An Insta-X-inspired feed application featuring infinite scroll, post interactions, story previews, and a responsive masonry layout. Built as a deep-dive into scroll performance and dynamic content rendering patterns.",
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
        "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-4",
      title: "YumDispatch",
      badge: "Frontend · Food Delivery",
      description:
        "A food delivery platform UI with restaurant and menu browsing, cart management, and a dispatch order flow. Designed for the Bangladeshi market with a focus on mobile-first layout and fast, intuitive navigation.",
      tags: ["React", "Tailwind CSS", "Context API", "Netlify"],
    },
    {
      src: "/tinderClone.gif",
      alt: "tinder clone",
      link: "https://mujibulhaquetanim.dev/coming-soon",
      layout:
        "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
      title: "Tinder Clone",
      badge: "Next.js · Dating App",
      description:
        "A Tinder-inspired dating app UI with swipeable cards, profile browsing, and match interactions. Built to explore gesture handling, animation techniques, and responsive design patterns for a mobile-first experience with neo4j graph database integration.",
      tags: ["Next.js", "Neo4j", "ShadCN UI"],
    },
  ];