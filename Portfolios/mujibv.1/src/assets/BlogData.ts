export type PostStatus = "published" | "coming_soon";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: number; // minutes
  publishedAt: string;
  slug: string;
  featured?: boolean;
  status: PostStatus;
}

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Building Real-time AI Pipelines with LangGraph and WebSockets",
    excerpt:
      "How I architected a streaming agent system that handles concurrent tool calls without blocking the UI — and what I learned about backpressure along the way.",
    tags: ["AI", "LangGraph", "WebSockets", "Architecture"],
    readTime: 8,
    publishedAt: "Coming soon",
    slug: "realtime-ai-pipelines-langgraph",
    featured: true,
    status: "coming_soon",
  },
  {
    id: "2",
    title: "NestJS Microservices: RabbitMQ Patterns That Actually Scale",
    excerpt:
      "Dead-letter queues, retry strategies, and circuit breakers — the production patterns missing from most tutorials.",
    tags: ["NestJS", "RabbitMQ", "Microservices"],
    readTime: 6,
    publishedAt: "Coming soon",
    slug: "nestjs-rabbitmq-patterns",
    status: "coming_soon",
  },
  {
    id: "3",
    title: "Clean Architecture in TypeScript: Domain Modeling First",
    excerpt:
      "Why I start every project with the domain layer and how SOLID principles keep large codebases from collapsing under their own weight.",
    tags: ["TypeScript", "Architecture", "SOLID"],
    readTime: 10,
    publishedAt: "Coming soon",
    slug: "clean-architecture-typescript",
    status: "coming_soon",
  },
  {
    id: "4",
    title: "PostgreSQL Full-Text Search vs pgvector: When to Use Which",
    excerpt:
      "A practical comparison for AI-augmented search — benchmarks, real tradeoffs, and a hybrid approach that handles both semantic and keyword queries.",
    tags: ["PostgreSQL", "AI", "Search"],
    readTime: 7,
    publishedAt: "Coming soon",
    slug: "postgres-fts-vs-pgvector",
    status: "coming_soon",
  },
];

export { POSTS };