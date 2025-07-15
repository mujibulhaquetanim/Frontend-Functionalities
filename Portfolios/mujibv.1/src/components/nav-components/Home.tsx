import { FaXTwitter, FaFileExport } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import ProjectsCard from "../Home-components/ProjectsCard";
import TechStacks from "../Home-components/TechStack";
import GitTimeline from "../Home-components/GithubActivity/GitTimeline";
import resume from "/Mujibulhaquetanim.pdf";
import { Helmet } from "react-helmet-async";
import AnimatedWrapper from "../AnimatedWrapper";

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
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 
          max-w-[90rem] mx-auto py-4 px-4 sm:px-6

          h-auto
          lg:h-screen

          auto-rows-auto
          lg:grid-rows-[3.5fr_2.5fr_1fr]

          justify-items-stretch
        "
        >
          {/* Intro Section */}
          <AnimatedWrapper
            delay={500}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600 rounded-xl w-full h-full shadow-lg"
          >
            <section>
              <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6">
                <AnimatedWrapper delay={2500}>
                  <NavLink
                    to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
                    target="_blank"
                    className="mt-4 px-4 py-2 border-solid hover:border-white border-2 shadow-[-7px_7px_0px_#334155] inline-block rounded-xl text-white font-bold hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300 relative w-fit"
                  >
                    <AnimatedWrapper delay={3000}>
                      <h1>Available for hire</h1>
                    </AnimatedWrapper>
                    <AnimatedWrapper
                      delay={3500}
                      className="absolute w-3 h-3 bg-green-500 rounded-full -right-1 -top-1"
                    >
                      <div className="absolute w-full h-full bg-green-500/50 rounded-full animate-ping"></div>
                    </AnimatedWrapper>
                  </NavLink>
                </AnimatedWrapper>

                <AnimatedWrapper delay={1500}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">
                    Salam, I'm Mujibul Haque{" "}
                    <span className="font-bold">Tanim</span>
                  </h1>
                </AnimatedWrapper>

                <AnimatedWrapper delay={2000}>
                  <h3 className="text-sm sm:text-base lg:text-lg text-gray-300">
                    A software engineer. Mainly working in the JavaScript
                    ecosystem, I'm a dedicated problem-solver who thrives on
                    learning and building.
                  </h3>
                </AnimatedWrapper>

                <AnimatedWrapper delay={3700}>
                  <div className="flex gap-3 mt-auto">
                    <NavLink
                      to={"/about"}
                      className="mt-4 px-4 py-2 bg-white/20 border-solid border-white border-2 shadow-[-7px_7px_0px_#334155] active:bg-gray-600 rounded-xl text-white font-bold hover:scale-95 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300"
                    >
                      <AnimatedWrapper delay={4000}>
                        Explore More
                      </AnimatedWrapper>
                    </NavLink>
                    <a
                      href={resume}
                      aria-label="Download Resume"
                      download={"Mujibulhaquetanim-resume.pdf"}
                      className="mt-4 px-4 py-2 bg-white/20 border-solid border-white border-2 shadow-[-7px_7px_0px_#334155] active:bg-gray-600 rounded-xl text-white font-bold hover:scale-95 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300"
                    >
                      <AnimatedWrapper delay={4000}>
                        <FaFileExport size={24} />
                      </AnimatedWrapper>
                    </a>
                  </div>
                </AnimatedWrapper>
              </div>
            </section>
          </AnimatedWrapper>

          {/* Projects Section */}
          <AnimatedWrapper
            delay={2500}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl pb-12 hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink to={"/projects"}>
              <AnimatedWrapper delay={3000} className="w-full h-full">
                <div className="relative h-full w-full">
                  <AnimatedWrapper delay={3400}>
                    <h1 className="text-xl sm:text-2xl text-white font-bold tracking-wider hover:scale-95 hover:underline hover:underline-offset-4 text-center mb-1 mt-3">
                      Projects Overview
                    </h1>
                  </AnimatedWrapper>
                  <AnimatedWrapper delay={3700} className="w-full h-full">
                    <ProjectsCard />
                  </AnimatedWrapper>
                </div>
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* GitHub Section */}
          <AnimatedWrapper
            delay={3000}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4 hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink
              to={"https://github.com/mujibulhaquetanim"}
              target="_blank"
            >
              <AnimatedWrapper
                delay={3000}
                className="h-full flex flex-col justify-center"
              >
                <GitTimeline
                  markdownText={`![](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mujibulhaquetanim&theme=nord_bright)`}
                />
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* Typing Speed Section */}
          <AnimatedWrapper
            delay={3500}
            className="col-span-full md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink
              to={"https://monkeytype.com/profile/mujibtanim"}
              target="_blank"
            >
              <div className="flex flex-col items-center justify-center h-full p-4 gap-2">
                <div className="flex items-baseline">
                  <AnimatedWrapper
                    delay={3700}
                    className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold"
                  >
                    <p>60</p>
                  </AnimatedWrapper>
                  <span className="text-xs text-gray-400 font-bold ml-2">
                    WPM
                  </span>
                </div>
                <AnimatedWrapper
                  delay={4000}
                  className="text-sm sm:text-base text-white font-bold"
                >
                  Typing Speed ⌨️
                </AnimatedWrapper>
              </div>
            </NavLink>
          </AnimatedWrapper>

          {/* Tech Stack Section */}
          <AnimatedWrapper
            delay={4500}
            className="col-span-full md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4 w-full h-full"
          >
            <AnimatedWrapper
              delay={4700}
              className="flex flex-col items-center justify-center h-full gap-4"
            >
              <AnimatedWrapper delay={5000}>
                <h1 className="text-xl sm:text-2xl text-white font-bold tracking-wider">
                  Tech Stack
                </h1>
              </AnimatedWrapper>
              <TechStacks />
            </AnimatedWrapper>
          </AnimatedWrapper>

          {/* Blogs Section */}
          <AnimatedWrapper
            delay={5300}
            className="col-span-full md:col-span-1 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4 hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <NavLink to={"/Blogs"}>
              <AnimatedWrapper delay={5500} className="w-full h-full">
                <h1 className="md:text-7xl sm:text-lg text-white font-bold flex items-center justify-center h-full hover:scale-105 hover:underline hover:underline-offset-4">
                  Blogs
                </h1>
              </AnimatedWrapper>
            </NavLink>
          </AnimatedWrapper>

          {/* Social Links Section */}
          <AnimatedWrapper
            delay={6000}
            className="col-span-full md:col-span-1 lg:col-span-6 rounded-xl w-full h-full"
          >
            <div className="grid grid-cols-3 gap-2 h-full">
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
                  className="border rounded-xl p-2 hover:border-2 hover:bg-slate-600/80 backdrop-blur-xl hover:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  <social.icon
                    color="white"
                    className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
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
