import {
  Bot,
  Briefcase,
  GitBranch,
  GraduationCap,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const timeline: [string, string, LucideIcon][] = [
  [
    "2023",
    "Completed B.Sc. in CSE and started freelance full-stack development",
    GraduationCap,
  ],
  [
    "2024",
    "Delivered client systems with secure real-time APIs and performance tuning",
    Briefcase,
  ],
  [
    "2025",
    "Joined 3Zero Digital, improved backend throughput by 45%, and shipped an agentic RAG system on MCP servers",
    Rocket,
  ],
  [
    "2026",
    "Completed M.Sc. in CSE, joined MeshEver as a Full-Stack AI Engineer, and built Zasmate, a multi-channel AI customer messaging SaaS",
    Bot,
  ],
];

const education = [
  {
    title: "Master of Science (MSc) in Computer Science and Engineering",
    school:
      "International Islamic University Chittagong, Chattogram, Bangladesh",
    link: "https://www.iiuc.ac.bd/",
    meta: "Completed 2026",
  },
  {
    title: "Bachelor of Science (BSc) in Computer Science and Engineering",
    school: "Port City International University, Chattogram, Bangladesh",
    link: "https://www.portcity.edu.bd/",
    meta: "Completed 2023",
  },
  {
    title:
      "Gender Predictions of Bengali Names: An Ensemble and BERT-based Approach",
    school: "Port City International University, Chattogram, Bangladesh",
    link: undefined,
    meta: "Research focus: NLP and predictive modeling",
  },
  {
    title:
      "Leakage-Aware Multi-Class Detection of AI-Generated Phishing Emails Using Stylometric Features and Stacked Ensemble Learning",
    school:
      "International Islamic University Chittagong, Chattogram, Bangladesh",
    link: "https://github.com/mujibulhaquetanim/Multi-Class-Detection-of-AI-Generated-Phishing.git",
    meta: "Research focus: AI-generated content detection and cybersecurity",
  },
  {
    title:
      "A Comparative Study of Machine Learning Models for E-Commerce Demand Forecasting with Explainable AI",
    school:
      "International Islamic University Chittagong, Chattogram, Bangladesh",
    link: undefined,
    meta: "Research focus: Demand forecasting, machine learning, and explainable AI",
  },
];

const focusAreas = [
  {
    title: "Backend Architecture",
    desc: "Secure APIs, modular service design, and multi-tenant data isolation with PostgreSQL row-level security.",
  },
  {
    title: "Real-time Systems",
    desc: "WebRTC, Socket.io, Kafka, and Redis for low-latency messaging, live communication, and video streaming.",
  },
  {
    title: "AI Workflows",
    desc: "LangGraph, MCP servers, the OpenAI SDK, and n8n for AI agents, retrieval-augmented generation, and workflow automation.",
  },
  {
    title: "Cloud Delivery",
    desc: "AWS, Docker, GitHub Actions CI/CD, and monitoring for reliable production deployments.",
  },
];

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "45%", label: "Backend throughput gain" },
  { value: "M.Sc.", label: "Computer Science & Engineering" },
];

const principles = [
  { icon: Layers, text: "Domain-driven design" },
  { icon: ShieldCheck, text: "Security by default" },
  { icon: GitBranch, text: "Small, frequent releases" },
];

export { timeline, education, focusAreas, stats, principles };
