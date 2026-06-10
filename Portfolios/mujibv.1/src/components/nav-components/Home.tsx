import { FaXTwitter, FaFileExport } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import ProjectsCard from "../Home-components/ProjectsCard";
import TechStacks from "../Home-components/TechStack";
import GitTimeline from "../Home-components/GithubActivity/GitTimeline";
import resume from "/Mujibulhaquetanim.pdf";
import { Helmet } from "react-helmet-async";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import { MdEmail } from "react-icons/md";
import { GrArticle } from "react-icons/gr";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mujibul Haque Tanim - Full-stack Software Engineer</title>
        <meta
          name="description"
          content="Full-stack engineer specializing in JavaScript, TypeScript, NestJS, and AI integrations."
        />
        <meta property="og:title" content="Mujibul Haque Tanim - Portfolio" />
        <meta
          property="og:description"
          content="Explore my projects, skills, blogs, and more."
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
            ],
            jobTitle: "Full-stack Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            description:
              "Full-stack software engineer specializing in JavaScript/TypeScript, clean architecture, NestJS, and AI model integrations.",
            image: "https://www.mujibulhaquetanim.dev/og-image.png",
            knowsAbout: [
              "React",
              "TypeScript",
              "NestJS",
              "NextJS",
              "AWS",
              "MERN",
              "PostgreSQL",
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

      <div className="min-h-screen bg-slate-700 w-full overflow-x-hidden">
        <section
          className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
          gap-2 sm:gap-3 lg:gap-2 xl:gap-4

          max-w-[90rem] mx-auto
          py-2 px-3 sm:px-4 lg:py-2 lg:px-4

          h-auto
          lg:h-[100dvh]

          auto-rows-auto
          lg:grid-rows-[3fr_2fr_0.8fr]

          justify-items-stretch
        "
        >
          {/* ── Intro Section ── */}
          <AnimatedWrapper
            delay={1000}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600 rounded-xl w-full h-full shadow-lg"
          >
            <section>
              {/* Reduced padding at lg; restored at xl+ */}
              <div className="flex flex-col h-full p-4 sm:p-5 lg:p-4 xl:p-6 2xl:p-8 gap-2 sm:gap-4 lg:gap-2 xl:gap-4 2xl:gap-6">

                <AnimatedWrapper delay={2900}>
                  <NavLink
                    to={
                      "mailto:info@mujibulhaquetanim.dev?subject=Salam%20Mujibul%20Haque%20Tanim&body=I%20would%20like%20to%20connect%20with%20you!"
                    }
                    target="_blank"
                    className="mt-2 lg:mt-1 xl:mt-4 px-3 py-1.5 lg:px-3 lg:py-1 xl:px-4 xl:py-2 border-solid hover:border-white border-2 shadow-[-7px_7px_0px_#334155] inline-block hover:shadow-[7px_7px_0px_#334155] rounded-xl text-white font-bold hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300 relative w-fit group"
                  >
                    <AnimatedWrapper delay={3200}>
                      <h1 className="text-sm lg:text-xs xl:text-sm">Available for hire</h1>
                    </AnimatedWrapper>

                    <AnimatedWrapper
                      delay={3500}
                      className="absolute w-2.5 h-2.5 lg:w-2 lg:h-2 xl:w-3 xl:h-3 bg-green-500 rounded-full -right-1 -top-1"
                    >
                      <div className="absolute w-full h-full bg-green-500/50 rounded-full animate-ping"></div>
                    </AnimatedWrapper>

                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white bg-slate-600 px-2 py-1 rounded-md text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[7px_7px_0px_#334155] inline-block">
                      <MdEmail size={20} className="inline-block text-center" />
                    </span>
                  </NavLink>
                </AnimatedWrapper>

                {/* Heading: tighter at lg, restored at xl+ */}
                <AnimatedWrapper delay={1500}>
                  <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-white leading-tight">
                    Salam, I'm Mujibul Haque{" "}
                    <span className="font-bold">Tanim</span>
                  </h1>
                </AnimatedWrapper>

                {/* Body text: xs at lg to save vertical space */}
                <AnimatedWrapper delay={1900}>
                  <h3 className="text-sm sm:text-base lg:text-xs xl:text-sm 2xl:text-base text-gray-300 text-justify leading-relaxed pr-2">
                    A performance-driven <b>Full Stack & AI Engineer</b>{" "}
                    crafting intelligent, end-to-end applications. I combine
                    robust backend expertise (Node.js/TypeScript, microservices,
                    real-time streaming) with hands-on AI/ML integration.
                  </h3>
                </AnimatedWrapper>

                {/* Tech tags: tighter padding + smaller text at lg */}
                <AnimatedWrapper delay={2100}>
                  <div className="flex flex-wrap gap-1">
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
                        className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 lg:px-2 lg:py-0.5 xl:px-3 xl:py-1 text-[11px] lg:text-[10px] xl:text-sm text-slate-100 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </AnimatedWrapper>

                {/* CTA buttons: tighter top margin at lg */}
                <AnimatedWrapper delay={2300}>
                  <div className="flex gap-3 lg:gap-3 mt-auto">
                    <NavLink
                      to={"/about"}
                      className="mt-2 lg:mt-1 xl:mt-4 px-3 py-1.5 lg:px-3 lg:py-1 xl:px-4 xl:py-2 bg-white/20 border-solid border-white border-2 shadow-[-7px_7px_0px_#334155] hover:shadow-[7px_7px_0px_#334155] active:bg-gray-600 rounded-xl text-white font-bold hover:scale-95 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300 text-sm lg:text-xs xl:text-sm"
                    >
                      <AnimatedWrapper delay={2500}>
                        Explore More
                      </AnimatedWrapper>
                    </NavLink>
                    <a
                      href={resume}
                      aria-label="Download Resume"
                      download={"Mujibulhaquetanim-resume.pdf"}
                      className="mt-2 lg:mt-1 xl:mt-4 px-3 py-1.5 lg:px-3 lg:py-1 xl:px-4 xl:py-2 bg-white/20 border-solid border-white border-2 shadow-[-7px_7px_0px_#334155] hover:shadow-[7px_7px_0px_#334155] active:bg-gray-600 rounded-xl text-white font-bold hover:scale-95 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300 text-sm lg:text-xs xl:text-sm"
                    >
                      <AnimatedWrapper delay={3000} className="flex gap-1.5 items-center">
                        <FaFileExport size={18} />
                        Resume
                      </AnimatedWrapper>
                    </a>
                  </div>
                </AnimatedWrapper>
              </div>
            </section>
          </AnimatedWrapper>

          {/* ── Projects Section ── */}
          <AnimatedWrapper
            delay={3500}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl pb-4 lg:pb-4 xl:pb-8 hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink to={"/projects"}>
              <AnimatedWrapper delay={3700} className="w-full h-full">
                <div className="relative h-full w-full">
                  <AnimatedWrapper delay={3800}>
                    <h1 className="text-lg sm:text-xl lg:text-lg xl:text-2xl text-white font-bold tracking-wider hover:scale-95 hover:underline hover:underline-offset-4 text-center mb-1 mt-2 lg:mt-2">
                      Projects Overview
                    </h1>
                  </AnimatedWrapper>
                  <AnimatedWrapper delay={3900} className="w-full h-full">
                    <ProjectsCard />
                  </AnimatedWrapper>
                </div>
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* ── GitHub Section ── */}
          <AnimatedWrapper
            delay={4100}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl p-3 lg:p-2 xl:p-4 hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink
              to={"https://github.com/mujibulhaquetanim"}
              target="_blank"
            >
              <AnimatedWrapper
                delay={4500}
                className="h-full flex flex-col justify-center"
              >
                <GitTimeline
                  markdownText={`![](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mujibulhaquetanim&theme=nord_bright)`}
                />
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* ── Typing Speed Section ── */}
          <AnimatedWrapper
            delay={4700}
            subDelay={700}
            className="col-span-full md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink
              to={"https://monkeytype.com/profile/mujibtanim"}
              target="_blank"
            >
              <div className="flex flex-col items-center justify-center h-full p-3 gap-1.5">
                <div className="flex items-baseline">
                  <AnimatedWrapper
                    delay={5000}
                    subDelay={1000}
                    className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-white font-bold"
                  >
                    <p className="hover:shadow-[7px_7px_0px_#334155] hover:scale-95 transition-transform duration-300">
                      60
                    </p>
                  </AnimatedWrapper>
                  <span className="text-xs text-gray-400 font-bold ml-1.5">
                    WPM
                  </span>
                </div>
                <AnimatedWrapper
                  delay={5300}
                  subDelay={1500}
                  className="text-xs sm:text-sm lg:text-xs xl:text-base text-white font-bold"
                >
                  Typing Speed ⌨️
                </AnimatedWrapper>
              </div>
            </NavLink>
          </AnimatedWrapper>

          {/* ── Tech Stack Section ── */}
          <AnimatedWrapper
            delay={5700}
            subDelay={2000}
            className="col-span-full md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl p-3 lg:p-2 xl:p-4 w-full h-full"
          >
            <NavLink to={"/tech-stack"}>
              <AnimatedWrapper
                delay={6000}
                subDelay={2500}
                className="flex flex-col items-center justify-center h-full gap-2 lg:gap-1.5 xl:gap-4"
              >
                <AnimatedWrapper delay={6500} subDelay={3000}>
                  <h1 className="text-lg sm:text-xl lg:text-base xl:text-2xl text-white font-bold tracking-wider hover:scale-95 hover:underline hover:underline-offset-4 text-center mb-0.5 mt-1">
                    Tech Stack
                  </h1>
                </AnimatedWrapper>
                <TechStacks />
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* ── Blogs Section ── */}
          <AnimatedWrapper
            delay={6700}
            subDelay={3200}
            className="col-span-full md:col-span-1 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl p-3 lg:p-2 xl:p-4 hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink to={"/Blogs"}>
              <AnimatedWrapper
                delay={7000}
                subDelay={3500}
                className="w-full h-full"
              >
                {/* Scaled down at lg; xl gets the larger icon back */}
                <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-white font-bold flex items-center justify-center h-full hover:scale-105 hover:underline hover:underline-offset-4">
                  <GrArticle />
                </h1>
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* ── Social Links Section ── */}
          <AnimatedWrapper
            delay={7500}
            subDelay={4000}
            className="col-span-full md:col-span-1 lg:col-span-6 rounded-xl w-full h-full"
          >
            <div className="grid grid-cols-3 gap-2 h-full transition-colors">
              {[
                {
                  icon: FaLinkedin,
                  url: "https://www.linkedin.com/in/mujibulhaquetanim/",
                },
                {
                  icon: FaGithub,
                  url: "https://github.com/mujibulhaquetanim",
                },
                { icon: FaXTwitter, url: "https://twitter.com/mmhtanim" },
              ].map((social, index) => (
                <NavLink
                  key={index}
                  to={social.url}
                  target="_blank"
                  className="border rounded-xl p-2 hover:border-4 hover:bg-slate-600/80 backdrop-blur-xl hover:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  <social.icon
                    color="white"
                    className="w-6 h-6 sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 hover:shadow-[7px_7px_0px_#334155] hover:scale-110 transition-transform duration-300"
                  />
                </NavLink>
              ))}
            </div>
          </AnimatedWrapper>
        </section>
      </div>
    </>
  );
}