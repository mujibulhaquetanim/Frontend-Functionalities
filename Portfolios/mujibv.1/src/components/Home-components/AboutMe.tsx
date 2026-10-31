import { NavLink } from "react-router";
import {
  CalendarClock,
  Compass,
  GraduationCap,
  Target,
  UserRound,
} from "lucide-react";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import {
  focusAreas,
  education,
  principles,
  stats,
  timeline,
} from "../../assets/aboutMeData";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full overflow-hidden text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
        <div className="space-y-4 lg:space-y-5">
          {/* Hero row */}
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedWrapper
              delay={400}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-7 lg:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.09),transparent_35%)]" />
              <div className="relative flex h-full gap-5">
                <div className="hidden sm:flex w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-purple-600" />

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                      <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]" />
                      Open to opportunities
                    </span>

                    <span className="inline-flex w-fit items-center rounded-2xl border border-white/10 bg-black/15 px-4 py-2 text-sm text-slate-200">
                      Full-Stack AI Engineer
                    </span>
                  </div>

                  <div className="grid flex-1 gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div className="flex flex-col items-start gap-4">
                      <AnimatedWrapper
                        delay={500}
                        className="rounded-[24px] border border-white/10 bg-black/15 p-4"
                      >
                        <AnimatedWrapper delay={600} className="text-4xl">
                          <div className="flex h-28 w-28 rounded-full items-center justify-center border border-white/10 bg-black/15 shadow-xl">
                            <AnimatedWrapper delay={700} className="text-4xl">
                              <img
                                src="https://avatars.githubusercontent.com/u/70325279?v=4"
                                alt="Mujibul Haque Tanim"
                                className="h-24 w-24 rounded-full object-cover"
                              />
                            </AnimatedWrapper>
                          </div>
                        </AnimatedWrapper>
                      </AnimatedWrapper>

                      <div className="text-pretty">
                        <p className="text-xs font-medium tracking-[0.22em] text-slate-300 uppercase">
                          Mujibul Haque Tanim
                        </p>
                        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl xl:text-5xl md:pl-2">
                          I build reliable backends
                          <span className="block font-extrabold text-white">
                            and AI-powered products.
                          </span>
                        </h1>
                      </div>
                    </div>

                    <div className="space-y-8 justify-end rounded-[24px] border border-white/10 bg-black/15 p-4">
                      <p className="max-w-2xl text-sm leading-7 text-slate-200 md:text-base md:leading-8">
                        I design and ship production software end to end:
                        multi-tenant backends, real-time features, AI workflows,
                        and the product interface on top. I focus on security,
                        performance, and code that stays easy to maintain.
                      </p>

                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 2xl:grid-cols-3">
                        {[
                          {
                            label: "Primary stack",
                            value: "TypeScript",
                            note: "Backend + full-stack",
                          },
                          {
                            label: "Specialty",
                            value: "Real-time",
                            note: "WebRTC, Socket.io, Redis, Kafka",
                          },
                          {
                            label: "AI focus",
                            value: "AI agents",
                            note: "LangGraph, MCP, A2A, n8n",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="min-w-0 rounded-[22px] border border-white/10 bg-black/15 p-4"
                          >
                            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                              {item.label}
                            </p>
                            <p className="mt-2 text-lg font-semibold text-white">
                              {item.value}
                            </p>
                            <p className="mt-1 text-sm text-slate-300">
                              {item.note}
                            </p>
                          </div>
                        ))}
                      </div>
                      <NavLink
                        to="/tech-stack"
                        className="mt-4 text-sm font-medium text-sky-300 hover:text-sky-200 hover:underline"
                      >
                        See my full tech stack
                      </NavLink>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      "TypeScript",
                      "NestJS",
                      "Next.js",
                      "PostgreSQL",
                      "WebRTC",
                      "AWS",
                      "LangGraph",
                      "Docker",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[12px] md:text-sm text-slate-100 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={600}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-7 lg:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_40%)]" />

              <div className="relative flex h-full flex-col justify-between gap-5">
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                        Focus Areas
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                        Core expertise
                      </h2>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <Target aria-hidden className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {focusAreas.map((item, index) => (
                      <div
                        key={item.title}
                        className="group rounded-[24px] border border-white/10 bg-black/15 p-4 transition-all duration-300 hover:border-white/20 hover:bg-black/20"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-200">
                            0{index + 1}
                          </div>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-6 text-slate-300">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Replaced snapshot placeholders ── */}
                <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                  {/* By the numbers */}
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <p className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-400">
                      By the numbers
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[16px] border border-white/[0.08] bg-white/[0.04] p-3"
                        >
                          <p className="text-lg font-bold text-sky-300">
                            {stat.value}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-400">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How I work */}
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <p className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-400">
                      How I work
                    </p>
                    <div className="space-y-2">
                      {principles.map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-3 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-3 py-2.5"
                        >
                          <item.icon
                            aria-hidden
                            className="h-4 w-4 shrink-0 text-sky-300"
                          />
                          <p className="text-sm text-slate-200">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* ── End replacement ── */}

                <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    I prefer code that stays easy to read and change after it
                    ships: clear module boundaries, typed interfaces, and good
                    observability.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Middle row */}
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:h-[34rem]">
            <AnimatedWrapper
              delay={800}
              className="flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6"
            >
              <div className="flex-shrink-0 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    About Me
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Who I am
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <UserRound aria-hidden className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                <div className="space-y-3 text-sm leading-7 text-slate-200 md:text-base">
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    Hi, I&apos;m{" "}
                    <span className="font-semibold text-sky-300">
                      Mujibul Haque Tanim
                    </span>
                    , a Full-Stack AI Engineer at{" "}
                    <a
                      href="https://meshever.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      MeshEver
                    </a>
                    . I recently built{" "}
                    <a
                      href="https://zasmate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      Zasmate
                    </a>
                    , a SaaS that answers customer messages across WhatsApp,
                    Messenger, and Instagram using each business&apos;s own
                    data.
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    My core stack is{" "}
                    <span className="font-semibold text-blue-300">
                      TypeScript, Next.js, NestJS, Fastify, and GraphQL
                    </span>
                    , with a focus on secure APIs, modular design, and
                    multi-tenant backends.
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    For data and infrastructure I use{" "}
                    <span className="font-semibold text-emerald-300">
                      PostgreSQL (with row-level security), Drizzle ORM, Redis,
                      Docker, AWS, Kafka, RabbitMQ, and NGINX
                    </span>{" "}
                    to build systems that scale reliably.
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    For AI features I use{" "}
                    <span className="font-semibold text-pink-300">
                      LangGraph, MCP servers, the OpenAI SDK, and n8n
                    </span>{" "}
                    to build agents, retrieval-augmented generation, and
                    workflow automation.
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    For real-time and media work I use{" "}
                    <span className="font-semibold text-yellow-300">
                      WebRTC, Socket.io, HLS, and FFmpeg
                    </span>{" "}
                    for live communication and video streaming pipelines.
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    I hold an{" "}
                    <span className="font-semibold text-indigo-300">
                      M.Sc. and a B.Sc. in Computer Science and Engineering
                    </span>
                    , with research in NLP, AI-generated phishing detection, and
                    explainable machine learning.
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={1000}
              className="flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6"
            >
              <div className="flex-shrink-0 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    Education
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Academic background
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <GraduationCap aria-hidden className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                <div className="space-y-3">
                  {education.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-black/15 p-4"
                    >
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 block text-sm text-sky-300 hover:text-sky-200 hover:underline"
                        >
                          {item.school}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm text-slate-300">
                          {item.school}
                        </p>
                      )}
                      <p className="mt-2 text-sm text-slate-400">{item.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Bottom row */}
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <AnimatedWrapper
              delay={1200}
              className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    Career Timeline
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Experience and milestones
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <CalendarClock aria-hidden className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {timeline.map(([year, desc, Icon]) => (
                  <div
                    key={year}
                    className="rounded-[24px] border border-white/10 bg-black/15 p-4"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <Icon aria-hidden className="h-5 w-5 text-sky-300" />
                      <span className="text-lg font-bold text-sky-300">
                        {year}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={1400}
              className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-2xl md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
                    Currently
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Current focus
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <Compass aria-hidden className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    Building products that pair a reliable backend and a
                    polished interface with AI features that solve a real
                    business problem.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    Areas of interest: scalable architecture, real-time
                    products, multi-tenant SaaS, and workflow automation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Multi-tenant SaaS",
                    "Real-time systems",
                    "AI agents",
                    "Cloud infrastructure",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
