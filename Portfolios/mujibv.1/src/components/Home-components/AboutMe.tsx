import { useState } from "react";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";

export default function AboutMe() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen lg:h-screen w-full text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 h-full">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-6 lg:gap-6 lg:p-6 lg:h-screen">
          {/* LEFT: About Me */}
          <AnimatedWrapper
            delay={500}
            className="grid col-span-1 row-span-6 bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-500/30 hover:border-slate-400/50 transition-all duration-500 group"
          >
            <AnimatedWrapper delay={700} className="flex-shrink-0 p-8 pb-6">
              <h1 className="text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 text-center lg:text-left tracking-wide group-hover:scale-105 transition-transform duration-300">
                About Me
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-purple-600 rounded-full mt-4 mx-auto lg:mx-0"></div>
            </AnimatedWrapper>

            <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
              <div className="text-base xl:text-lg space-y-6 leading-relaxed text-gray-100">
                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">👋</span>
                    <span>
                      Hi, I&apos;m{" "}
                      <span className="font-semibold text-sky-300">
                        Mujibul Haque Tanim
                      </span>
                      , a Full-Stack AI Engineer focused on building scalable,
                      resilient, and production-ready systems. I care about
                      architecture, security, and code that still makes sense
                      after the hype dies down.
                    </span>
                  </p>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">⚙️</span>
                    <span>
                      My core stack is{" "}
                      <span className="font-semibold text-blue-400">
                        TypeScript, Next.js, NestJS, Fastify, and GraphQL
                      </span>
                      , with a strong focus on secure APIs, clean modular design,
                      and multi-tenant backend systems.
                    </span>
                  </p>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <span>
                      I build with{" "}
                      <span className="font-semibold text-green-400">
                        PostgreSQL RLS, Drizzle ORM, Redis, Docker, AWS, Kafka,
                        RabbitMQ, and NGINX
                      </span>
                      , usually when the problem needs scale, reliability, and
                      a system that does not fold under load.
                    </span>
                  </p>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🤖</span>
                    <span>
                      I also work on AI workflows using{" "}
                      <span className="font-semibold text-pink-400">
                        LangGraph, MCP servers, OpenAI SDK, and n8n
                      </span>
                      , especially for Agentic RAG, automation, and smarter
                      product flows.
                    </span>
                  </p>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">📡</span>
                    <span>
                      My work also includes{" "}
                      <span className="font-semibold text-yellow-400">
                        WebRTC, Socket.io, HLS, and FFmpeg
                      </span>
                      , which I have used for realtime systems and video
                      streaming pipelines.
                    </span>
                  </p>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <span>
                      I&apos;m currently pursuing an{" "}
                      <span className="font-semibold text-indigo-400">
                        M.Sc. in Computer Science and Engineering
                      </span>
                      , and I keep sharpening my craft through real projects,
                      architecture work, and continuous learning.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* RIGHT SIDE */}
          <AnimatedWrapper
            delay={700}
            className="grid col-span-1 row-span-6 h-full gap-6"
          >
            {/* EDUCATION */}
            <AnimatedWrapper
              delay={1000}
              className="flex-1 bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-500/30 hover:border-slate-400/50 transition-all duration-500 overflow-hidden group"
            >
              <div className="h-full flex flex-col">
                <AnimatedWrapper
                  delay={1200}
                  className="flex-shrink-0 p-8 pb-6"
                >
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 group-hover:scale-105 transition-transform duration-300">
                    Education
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mt-3"></div>
                </AnimatedWrapper>

                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-gray-100 mb-3">
                        Master of Science (MSc) in Computer Science and
                        Engineering
                      </h3>
                      <a
                        href="https://www.iiuc.ac.bd/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline text-sm block transition-colors duration-200"
                      >
                        International Islamic University Chittagong, Chattogram,
                        Bangladesh
                      </a>
                      <p className="text-gray-400 text-sm mt-2 font-medium">
                        Expected Completion: 2026
                      </p>
                    </div>

                    <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-gray-100 mb-3">
                        Bachelor of Science (BSc) in Computer Science and
                        Engineering
                      </h3>
                      <a
                        href="https://www.portcity.edu.bd/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline text-sm block transition-colors duration-200"
                      >
                        Port City International University, Chattogram,
                        Bangladesh
                      </a>
                      <p className="text-gray-400 text-sm mt-2 font-medium">
                        Completion: 2023
                      </p>
                    </div>

                    <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-gray-100 mb-3">
                        Thesis
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Gender Predictions of Bengali Names: An Ensemble and
                        BERT-based Approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* TIMELINE */}
            <AnimatedWrapper
              delay={1500}
              className="flex-1 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-500/30 hover:border-slate-400/50 transition-all duration-500 overflow-hidden group"
            >
              <div className="h-full flex flex-col">
                <AnimatedWrapper
                  delay={1700}
                  className="flex-shrink-0 p-8 pb-6"
                >
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-600 group-hover:scale-105 transition-transform duration-300">
                    Career Timeline
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-600 rounded-full mt-3"></div>
                </AnimatedWrapper>

                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                  <AnimatedWrapper delay={2000} className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-purple-600"></div>
                    <div className="space-y-6">
                      {[
                        [
                          "2023",
                          "Graduated BSc and started freelance full-stack work",
                          "🎓",
                        ],
                        [
                          "2024",
                          "Built secure client systems with realtime APIs and performance tuning",
                          "💼",
                        ],
                        [
                          "2025",
                          "Joined 3Zero Digital, improved throughput 45%, and shipped Agentic RAG on MCP",
                          "🚀",
                        ],
                        [
                          "2026",
                          "Focused on scalable realtime systems, multi-tenant backends, and AI integration",
                          "🤖",
                        ],
                      ].map(([year, desc, icon]) => (
                        <div key={year} className="relative pl-14">
                          <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-sky-400 to-purple-600 rounded-full shadow-lg border-2 border-slate-800"></div>
                          <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20 hover:border-slate-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-lg">{icon}</span>
                              <span className="text-sky-300 font-bold text-lg">
                                {year}
                              </span>
                            </div>
                            <p className="text-gray-200 text-sm leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnimatedWrapper>
                </div>
              </div>
            </AnimatedWrapper>
          </AnimatedWrapper>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden min-h-screen">
          <div className="p-4 space-y-6">
            {/* About Me Section */}
            <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-500/30 p-6">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 text-center tracking-wide mb-4">
                About Me
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-600 rounded-full mx-auto mb-6"></div>

              <div className="space-y-4 text-gray-100 text-justify leading-relaxed">
                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                  <p className="flex items-start gap-3">
                    <span className="text-xl">👋</span>
                    <span>
                      Hi, I&apos;m{" "}
                      <span className="font-semibold text-sky-300">
                        Mujibul Haque Tanim
                      </span>
                      , a Full-Stack AI Engineer focused on scalable,
                      production-ready systems.
                    </span>
                  </p>
                </div>

                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                  <p className="flex items-start gap-3">
                    <span className="text-xl">⚙️</span>
                    <span>
                      I build with{" "}
                      <span className="font-semibold text-blue-400">
                        TypeScript, Next.js, NestJS, Fastify, and GraphQL
                      </span>
                      , with a strong focus on secure APIs and clean backend
                      architecture.
                    </span>
                  </p>
                </div>

                {!show && (
                  <button
                    onClick={() => setShow(true)}
                    className="w-full mt-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 border border-slate-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Read More...
                  </button>
                )}

                {show && (
                  <>
                    <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                      <p className="flex items-start gap-3">
                        <span className="text-xl">🚀</span>
                        <span>
                          I work with{" "}
                          <span className="font-semibold text-green-400">
                            PostgreSQL RLS, Redis, Docker, AWS, Kafka, RabbitMQ,
                            and NGINX
                          </span>{" "}
                          to build scalable and reliable systems.
                        </span>
                      </p>
                    </div>

                    <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                      <p className="flex items-start gap-3">
                        <span className="text-xl">🤖</span>
                        <span>
                          I also integrate{" "}
                          <span className="font-semibold text-pink-400">
                            LangGraph, MCP servers, OpenAI SDK, and n8n
                          </span>{" "}
                          for AI workflows and automation.
                        </span>
                      </p>
                    </div>

                    <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                      <p className="flex items-start gap-3">
                        <span className="text-xl">🎓</span>
                        <span>
                          I&apos;m currently pursuing an{" "}
                          <span className="font-semibold text-yellow-400">
                            M.Sc. in Computer Science and Engineering
                          </span>
                          , while continuing to build real-world systems and
                          improve my architecture skills.
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-500/30 p-6">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 text-center mb-4">
                Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mx-auto mb-6"></div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                  <h3 className="text-lg font-bold text-gray-100 mb-3">
                    Master of Science (MSc) in Computer Science and Engineering
                  </h3>
                  <a
                    href="https://www.iiuc.ac.bd/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline text-sm block transition-colors duration-200"
                  >
                    International Islamic University Chittagong, Chattogram,
                    Bangladesh
                  </a>
                  <p className="text-gray-400 text-sm mt-2 font-medium">
                    Expected Completion: 2026
                  </p>
                </div>

                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                  <h3 className="text-lg font-bold text-gray-100 mb-3">
                    Bachelor of Science (BSc) in Computer Science and
                    Engineering
                  </h3>
                  <a
                    href="https://www.portcity.edu.bd/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline text-sm block transition-colors duration-200"
                  >
                    Port City International University, Chattogram, Bangladesh
                  </a>
                  <p className="text-gray-400 text-sm mt-2 font-medium">
                    Completion: 2023
                  </p>
                </div>

                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                  <h3 className="text-lg font-bold text-gray-100 mb-3">
                    Thesis
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Gender Predictions of Bengali Names: An Ensemble and
                    BERT-based Approach
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-500/30 p-6">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-600 text-center mb-4">
                Career Timeline
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-600 rounded-full mx-auto mb-6"></div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-purple-600"></div>
                <div className="space-y-4">
                  {[
                    [
                      "2023",
                      "Graduated BSc and started freelance full-stack work",
                      "🎓",
                    ],
                    [
                      "2024",
                      "Built secure client systems with realtime APIs and performance tuning",
                      "💼",
                    ],
                    [
                      "2025",
                      "Joined 3Zero Digital, improved throughput 45%, and shipped Agentic RAG on MCP",
                      "🚀",
                    ],
                    [
                      "2026",
                      "Focused on scalable realtime systems, multi-tenant backends, and AI integration",
                      "🤖",
                    ],
                  ].map(([year, desc, icon]) => (
                    <div key={year} className="relative pl-14">
                      <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-sky-400 to-purple-600 rounded-full shadow-lg border-2 border-slate-800"></div>
                      <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-600/20">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg">{icon}</span>
                          <span className="text-sky-300 font-bold text-lg">
                            {year}
                          </span>
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}