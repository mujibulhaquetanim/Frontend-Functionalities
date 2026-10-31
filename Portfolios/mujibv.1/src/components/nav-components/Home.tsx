import { FaXTwitter, FaFileExport } from "react-icons/fa6";
import { FaGithub, FaKeyboard, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import ProjectsCard from "../Home-components/ProjectsCard";
import TechStacks from "../Home-components/TechStack";
import GitTimeline from "../Home-components/GithubActivity/GitTimeline";
import resume from "/Mujibulhaquetanim.pdf";
import { Helmet } from "react-helmet-async";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import { MdEmail } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import CountUp from "../wrapper/CountUp";
import { POSTS } from "../../assets/BlogData";

const HIRE_MAILTO =
  "mailto:info@mujibulhaquetanim.dev?subject=Salam%20Mujibul%20Haque%20Tanim&body=I%20would%20like%20to%20connect%20with%20you!";

const CORE_STACK = [
  "TypeScript",
  "NestJS",
  "Next.js",
  "PostgreSQL",
  "WebRTC",
  "AWS",
  "LangGraph",
  "Docker",
];

const SOCIALS = [
  {
    icon: FaLinkedin,
    label: "LinkedIn profile",
    url: "https://www.linkedin.com/in/mujibulhaquetanim/",
  },
  {
    icon: FaGithub,
    label: "GitHub profile",
    url: "https://github.com/mujibulhaquetanim",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter) profile",
    url: "https://twitter.com/mmhtanim",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mujibul Haque Tanim - Full-Stack AI Engineer</title>
        <meta
          name="description"
          content="Full-Stack AI Engineer at MeshEver and builder of Zasmate, specializing in TypeScript, clean architecture, NestJS, and AI agent integrations."
        />
        <meta
          property="og:title"
          content="Mujibul Haque Tanim - Full-Stack AI Engineer"
        />
        <meta
          property="og:description"
          content="Full-Stack AI Engineer at MeshEver and builder of Zasmate, specializing in TypeScript, clean architecture, NestJS, and AI agent integrations."
        />
        <meta property="og:url" content="https://www.mujibulhaquetanim.dev" />
        <meta
          property="og:image"
          content="https://www.mujibulhaquetanim.dev/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.mujibulhaquetanim.dev" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.mujibulhaquetanim.dev#person",
            name: "Mujibul Haque Tanim",
            alternateName: "Tanim",
            url: "https://www.mujibulhaquetanim.dev",
            sameAs: [
              "https://www.linkedin.com/in/mujibulhaquetanim",
              "https://github.com/mujibulhaquetanim",
              "https://twitter.com/mmhtanim",
              "https://www.kaggle.com/mujibulhaque",
            ],
            jobTitle: "Full-Stack AI Engineer",
            worksFor: {
              "@type": "Organization",
              name: "MeshEver",
              url: "https://meshever.com",
            },
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "International Islamic University Chittagong",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Port City International University",
              },
            ],
            description:
              "Full-Stack AI Engineer at MeshEver specializing in TypeScript, NestJS, Next.js, multi-tenant backends, real-time systems, and AI agent integrations. Builder of Zasmate, an AI customer messaging SaaS.",
            image: "https://www.mujibulhaquetanim.dev/og-image.png",
            knowsAbout: [
              "React",
              "TypeScript",
              "NestJS",
              "NextJS",
              "AWS",
              "MERN",
              "PostgreSQL",
              "LangGraph",
              "Clean Architecture",
              "Redis",
              "Rabbitmq",
              "Go",
              "AI Integration",
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.mujibulhaquetanim.dev",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden">
        <section
          className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
          gap-2 sm:gap-3 lg:gap-2 xl:gap-4

          max-w-[90rem] mx-auto
          py-2 px-3 sm:px-4 lg:py-2 lg:px-4

          h-auto
          lg:h-[100dvh]

          auto-rows-auto
          lg:grid-rows-[minmax(min-content,3fr)_minmax(13.5rem,2fr)_minmax(4.25rem,0.8fr)]

          justify-items-stretch
        "
        >
          {/* ── Intro Section ── */}
          <AnimatedWrapper
            delay={0}
            className="col-span-full md:col-span-2 lg:col-span-6 w-full h-full"
          >
            <div className="tile flex flex-col h-full p-4 sm:p-5 lg:p-4 xl:p-6 2xl:p-8 gap-3 sm:gap-4 lg:gap-2 xl:gap-4 2xl:gap-6 short:p-4 short:gap-2">
              <a
                href={HIRE_MAILTO}
                className="btn-press group relative w-fit mt-2 lg:mt-1 xl:mt-4 short:mt-1 px-3 py-1.5 lg:px-3 lg:py-1 xl:px-4 xl:py-2 bg-transparent text-sm lg:text-xs xl:text-sm"
              >
                <span className="absolute -right-1 -top-1 flex size-2.5 xl:size-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-signal/60 animate-ping" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-signal" />
                </span>
                <MdEmail
                  aria-hidden
                  size={16}
                  className="transition-transform duration-300 ease-out-expo group-hover:-rotate-12"
                />
                Open to opportunities
              </a>

              <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl short:text-3xl text-white leading-[1.05] tracking-tight font-medium">
                Salam, I'm Mujibul Haque{" "}
                <span className="font-extrabold">Tanim</span>
              </h1>

              <p className="max-w-[62ch] text-sm sm:text-base lg:text-xs xl:text-sm 2xl:text-base text-slate-300 leading-relaxed text-pretty">
                <b className="font-semibold text-white">
                  Full-Stack AI Engineer
                </b>{" "}
                building production web applications with TypeScript, Node.js,
                and Next.js. I work across backend services, real-time systems,
                and AI features such as agents and RAG, from API design to
                deployment.
              </p>

              <p className="text-sm lg:text-xs xl:text-sm text-slate-300">
                <span className="mr-1.5 rounded-md bg-signal/15 px-1.5 py-0.5 text-[11px] lg:text-[10px] xl:text-xs font-semibold text-signal">
                  Now
                </span>
                Working at{" "}
                <a
                  href="https://meshever.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  MeshEver
                </a>
                , building{" "}
                <a
                  href="https://zasmate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Zasmate
                </a>
                , an AI customer messaging SaaS.
              </p>

              <ul className="flex flex-wrap gap-1" aria-label="Core stack">
                {CORE_STACK.map((item) => (
                  <li
                    key={item}
                    className="chip text-[11px] lg:text-[10px] xl:text-sm short:text-[11px] short:py-0 transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-auto pt-2 short:pt-1">
                <Link
                  to="/about"
                  className="btn-press group px-3 py-1.5 lg:px-3 lg:py-1 xl:px-4 xl:py-2 text-sm lg:text-xs xl:text-sm"
                >
                  About me
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <a
                  href={resume}
                  download="Mujibulhaquetanim-resume.pdf"
                  className="btn-press group px-3 py-1.5 lg:px-3 lg:py-1 xl:px-4 xl:py-2 text-sm lg:text-xs xl:text-sm"
                >
                  <FaFileExport
                    aria-hidden
                    size={16}
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5"
                  />
                  Download resume
                </a>
              </div>
            </div>
          </AnimatedWrapper>

          {/* ── Projects Section ── */}
          <AnimatedWrapper
            delay={90}
            className="col-span-full md:col-span-2 lg:col-span-6 w-full h-full min-h-[16rem] lg:min-h-0"
          >
            <Link
              to="/projects"
              className="tile tile-link group flex flex-col h-full w-full pb-2 lg:pb-2 xl:pb-6"
            >
              <h2 className="flex items-center justify-center gap-1.5 text-lg sm:text-xl lg:text-lg xl:text-2xl text-white font-bold pt-3 lg:pt-3 tracking-tight">
                Projects overview
                <ArrowUpRight
                  aria-hidden
                  className="size-5 opacity-60 transition-all duration-300 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </h2>
              <div className="flex-1 min-h-0 w-full">
                <ProjectsCard />
              </div>
            </Link>
          </AnimatedWrapper>

          {/* ── GitHub Section ── */}
          <AnimatedWrapper
            delay={180}
            className="col-span-full md:col-span-2 lg:col-span-6 w-full h-full min-h-0"
          >
            <GitTimeline username="mujibulhaquetanim" />
          </AnimatedWrapper>

          {/* ── Typing Speed Section ── */}
          <AnimatedWrapper
            delay={240}
            className="col-span-full md:col-span-1 lg:col-span-3 w-full h-full"
          >
            <a
              href="https://monkeytype.com/profile/mujibtanim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Typing speed: over 60 words per minute. Opens Monkeytype profile."
              className="tile tile-link group flex flex-col items-center justify-center h-full p-4 gap-1.5 lg:gap-1 xl:gap-2"
            >
              <div className="flex items-baseline gap-1" aria-hidden>
                <span className="font-display text-5xl sm:text-6xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-white font-bold tracking-tight">
                  <CountUp to={60} suffix="+" />
                </span>
                <span className="text-xs text-slate-300 font-semibold ml-1.5">
                  WPM
                </span>
              </div>
              <span
                aria-hidden
                className="flex items-center gap-1.5 text-xs sm:text-sm lg:text-xs xl:text-base text-white font-semibold"
              >
                <FaKeyboard className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5" />
                Typing speed
              </span>
            </a>
          </AnimatedWrapper>

          {/* ── Tech Stack Section ── */}
          <AnimatedWrapper
            delay={300}
            className="col-span-full md:col-span-1 lg:col-span-3 w-full h-full"
          >
            <Link
              to="/tech-stack"
              className="tile tile-link group flex flex-col items-center justify-center h-full gap-2 lg:gap-1 xl:gap-3 p-3 lg:p-2 xl:p-4 overflow-hidden"
            >
              <h2 className="flex items-center gap-1 text-lg sm:text-xl lg:text-base xl:text-2xl text-white font-bold tracking-tight">
                Tech stack
                <ArrowUpRight
                  aria-hidden
                  className="size-4 xl:size-5 opacity-60 transition-all duration-300 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </h2>
              <TechStacks />
            </Link>
          </AnimatedWrapper>

          {/* ── Blogs Section ── */}
          <AnimatedWrapper
            delay={360}
            className="col-span-full md:col-span-1 lg:col-span-6 w-full h-full"
          >
            <Link
              to="/blogs"
              className="tile tile-link group flex items-center justify-center gap-4 h-full p-4 lg:p-2 xl:p-4"
            >
              <GrArticle
                aria-hidden
                className="size-10 sm:size-12 lg:size-8 xl:size-12 2xl:size-14 text-white transition-transform duration-300 ease-out-expo group-hover:-rotate-6 group-hover:scale-110"
              />
              <span className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl lg:text-lg xl:text-2xl font-bold text-white tracking-tight">
                  Blogs
                </span>
                <span className="text-xs lg:text-[11px] xl:text-sm text-slate-300">
                  {POSTS.length} {POSTS.length === 1 ? "article" : "articles"}{" "}
                  in the pipeline
                </span>
              </span>
            </Link>
          </AnimatedWrapper>

          {/* ── Social Links Section ── */}
          <AnimatedWrapper
            delay={420}
            className="col-span-full md:col-span-1 lg:col-span-6 w-full h-full"
          >
            <ul className="grid grid-cols-3 gap-2 sm:gap-3 xl:gap-4 h-full">
              {SOCIALS.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="tile tile-link group flex h-full min-h-16 items-center justify-center p-2"
                  >
                    <social.icon
                      aria-hidden
                      className="size-8 sm:size-10 lg:size-8 xl:size-11 2xl:size-14 text-white transition-transform duration-300 ease-out-expo group-hover:scale-110 group-hover:-translate-y-0.5 group-active:scale-95"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedWrapper>
        </section>
      </div>
    </>
  );
}
