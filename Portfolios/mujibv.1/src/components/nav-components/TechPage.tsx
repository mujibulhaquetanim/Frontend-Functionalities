import { useMemo } from "react";
import {
  ArrowUpRight,
  Brain,
  Gauge,
  Globe,
  Layers3,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  pillarCards,
  typedTechStacks,
  spotlight,
  featured,
} from "../../assets/techStackData.ts";
import { Pill, SkillCard, StatTile } from "../../hook/TechStackFuncs.tsx";
import { NavLink } from "react-router";

export default function TechStacksPage() {
  const coreIcons = useMemo(() => {
    const keep = new Set([
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "WebRTC",
      "LangGraph",
      "OpenAI",
    ]);

    return typedTechStacks.filter((t) => keep.has(t.name));
  }, []);

  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-[1600px] px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
        <div className="space-y-4 lg:space-y-5">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-7 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.09),transparent_35%)]" />
              <div className="relative flex h-full flex-col">
                <div className="max-w-2xl flex-1">
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    Tech Stack & Expertise
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
                    Building scalable systems with
                    <span className="block font-extrabold text-white">
                      backend, realtime, and AI depth.
                    </span>
                  </h1>

                  <p className="mt-5 text-justify max-w-xl text-sm leading-7 text-slate-200 md:text-base md:leading-8">
                    I focus on production-ready engineering: secure APIs,
                    multi-tenant backends, realtime communication, AI
                    orchestration, and cloud delivery. The page below highlights
                    the stack I use most often to ship those systems.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {spotlight.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm"
                      >
                        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm text-white">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <NavLink
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white/15 text-center animate-pulse"
                  >
                    Explore About Me
                    <ArrowUpRight className="h-4 w-4" />
                  </NavLink>
                  <div className="hidden md:flex flex-wrap gap-2">
                    {featured.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-7 lg:p-8">
              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                      Stack Summary
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                      What I build with
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <Sparkles className="h-5 w-5 text-sky-200" />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3 lg:flex-1 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    {
                      title: "Systems",
                      icon: Layers3,
                      items: [
                        "Node.js",
                        "TypeScript",
                        "NestJS",
                        "Fastify",
                        "GraphQL",
                      ],
                    },
                    {
                      title: "Product",
                      icon: Globe,
                      items: [
                        "Next.js",
                        "React",
                        "Tailwind",
                        "shadcn/ui",
                        "React Query",
                      ],
                    },
                    {
                      title: "Ops + AI",
                      icon: Rocket,
                      items: ["AWS", "Docker", "Redis", "LangGraph", "OpenAI"],
                    },
                  ].map((group) => (
                    <div
                      key={group.title}
                      className="rounded-[24px] border border-white/10 bg-black/15 p-4 md:p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white/10 p-2">
                          <group.icon className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="text-base font-semibold text-white">
                          {group.title}
                        </h3>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-slate-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[24px] border border-white/10 bg-black/15 p-4 md:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-white md:text-lg">
                        Core strengths
                      </h3>
                      <p className="mt-1 text-sm text-slate-300">
                        The technologies I rely on most often in real projects.
                      </p>
                    </div>
                    <Gauge className="h-5 w-5 text-sky-200" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                    {coreIcons.map(({ icon: Icon, name }) => (
                      <div
                        key={name}
                        className="flex flex-col items-center justify-center rounded-[20px] border border-white/10 bg-white/5 p-4 text-center"
                      >
                        <Icon className="size-9 md:size-11 text-white" />
                        <span className="mt-3 text-xs md:text-sm text-slate-200">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.8fr_0.85fr] lg:h-[38rem] lg:items-stretch">
            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6">
              <div className="flex-shrink-0 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    Expertise Grid
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    What I’m strongest in
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <Lock className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 grid flex-1 min-h-0 gap-3 overflow-y-auto pr-1 custom-scrollbar">
                {pillarCards.map((card) => (
                  <SkillCard key={card.title} {...card} />
                ))}
              </div>
            </div>

            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6 text-justify">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                      Impact
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white text-justify">
                      Work that moved metrics
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  These are the kinds of results I aim for: lower latency,
                  stronger stability, better throughput, and cleaner delivery
                  pipelines.
                </p>
              </div>

              <div className="mt-6 flex-1 min-h-0 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                <StatTile value="45%" label="Backend throughput improvement" />
                <StatTile value="3k+" label="Concurrent users supported" />
                <StatTile
                  value="<200ms"
                  label="Median latency in realtime work"
                />
                <StatTile
                  value="Agentic RAG"
                  label="Deployed on MCP servers for automation"
                />
                <StatTile
                  value="Multi-tenant"
                  label="Built with RLS and strong data isolation"
                />
              </div>
            </div>

            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6">
              <div className="flex-shrink-0 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    Stack Notes
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Tools I reach for
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <Gauge className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 flex-1 min-h-0 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                {typedTechStacks.map(({ icon: Icon, name, description }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-black/15 p-4"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
                      <Icon className="size-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">
                        {name}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-300">
                        {description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.75fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    How I work
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Engineering principles
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  "SOLID",
                  "KISS",
                  "Modular design",
                  "Observability",
                  "Testing",
                  "CI/CD",
                  "Performance tuning",
                  "Security-first",
                  "Multi-tenant mindset",
                  "Realtime-aware",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/15 px-4 py-2 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    My approach
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    My approach to building with this stack
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    I build with a backend-first approach, integrating AI where
                    it adds the most value, and optimizing for realtime
                    performance and cloud scalability. My focus is on delivering
                    secure, maintainable systems that drive real business
                    impact.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill>Backend-first</Pill>
                  <Pill>AI-integrated</Pill>
                  <Pill>Realtime-ready</Pill>
                  <Pill>Cloud-native</Pill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
