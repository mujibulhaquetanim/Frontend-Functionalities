import { FaXTwitter, FaFileExport } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import ProjectsCard from "../Home-components/ProjectsCard";
import TechStacks from "../Home-components/TechStack";
import GitTimeline from "../Home-components/GithubActivity/GitTimeline";
import resume from "/Mujibulhaquetanim.pdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 w-full overflow-x-hidden px-2 sm:px-4 lg:px-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 max-w-7xl mx-auto py-4">
        {/* Main intro section */}
        <section className="md:col-span-2 lg:col-span-6 bg-slate-600 rounded-xl">
          <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6">
            <NavLink
              to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
              target="_blank"
              className="inline-block border-2 p-3 rounded-xl text-white font-bold hover:scale-105 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300 relative w-fit"
            >
              Available for hire
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -right-1 -top-1">
                <div className="absolute w-full h-full bg-green-500/50 rounded-full animate-ping"></div>
              </div>
            </NavLink>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">
              Salam, I'm Mujibul Haque <span className="font-bold">Tanim</span>
            </h1>
            
            <h3 className="text-sm sm:text-base lg:text-lg text-gray-300">
              A software engineer. Mainly working in the JavaScript ecosystem,
              I'm a dedicated problem-solver who thrives on learning and
              building.
            </h3>

            <div className="flex gap-3 mt-auto">
              <NavLink
                to={"/about"}
                className="rounded-xl border-2 px-4 py-2 text-white font-bold hover:scale-95 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300"
              >
                Explore More
              </NavLink>
              <a
                href={resume}
                aria-label="Download Resume"
                download={"Mujibulhaquetanim-resume.pdf"}
                className="rounded-xl border-2 px-4 py-2 text-white font-bold hover:scale-95 hover:bg-slate-700/80 backdrop-blur-xl transition-transform duration-300"
              >
                <FaFileExport size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <NavLink
          to={"/projects"}
          target="_blank"
          className="md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4 hover:bg-slate-600 transition-colors duration-300"
        >
                    <div className="relative">
            <h1 className="text-xl sm:text-2xl text-white font-bold tracking-wider hover:scale-95 hover:underline text-center mb-4">
              Projects Overview
            </h1>
            <ProjectsCard />
          </div>
        </NavLink>

        {/* GitHub section */}
        <NavLink
          to={"https://github.com/mujibulhaquetanim"}
          className="md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4 hover:bg-slate-600 transition-colors duration-300"
        >
                    <div className="h-full flex flex-col justify-center">
            <GitTimeline
              markdownText={`![](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mujibulhaquetanim&theme=nord_bright)`}
            />
          </div>
        </NavLink>

        {/* Typing speed section */}
        <NavLink
          to={"https://monkeytype.com/profile/mujibtanim"}
          target="_blank"
          className="md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300"
        >
          <div className="flex flex-col items-center justify-center h-full p-4 gap-2">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold">60</span>
              <span className="text-xs text-gray-400 font-bold ml-2">WPM</span>
            </div>
            <p className="text-sm sm:text-base text-white font-bold">Typing Speed ⌨️</p>
          </div>
        </NavLink>

        {/* Tech stack section */}
        <div className="md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h1 className="text-xl sm:text-2xl text-white font-bold tracking-wider">
              Tech Stack
            </h1>
            <TechStacks />
          </div>
        </div>

        {/* Blogs section */}
        <NavLink
          to={"/Blogs"}
          className="md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl p-4 hover:bg-slate-600 transition-colors duration-300"
        >
          <h1 className="text-base sm:text-lg text-white font-bold flex items-center justify-center h-full hover:scale-105 hover:underline">
            Click to see Blogs 📚
          </h1>
        </NavLink>

        {/* Social links section */}
        <div className="md:col-span-1 lg:col-span-3 rounded-xl">
          <div className="grid grid-cols-3 gap-2 h-full">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/mujibulhaquetanim/" },
              { icon: FaGithub, url: "https://github.com/mujibulhaquetanim" },
              { icon: FaXTwitter, url: "https://twitter.com/mmhtanim" }
            ].map((social, index) => (
              <NavLink
                key={index}
                to={social.url}
                target="_blank"
                className="border rounded-xl p-2 hover:border-2 hover:bg-slate-600/80 backdrop-blur-xl hover:scale-95 transition-all duration-300 flex items-center justify-center"
              >
                <social.icon color="white" className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}