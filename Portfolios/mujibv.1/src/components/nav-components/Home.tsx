import { FaXTwitter, FaFileExport } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import ProjectsCard from "../Home-components/ProjectsCard";
import TechStacks from "../Home-components/TechStack";
import GitTimeline from "../Home-components/GithubActivity/GitTimeline";

export default function Home() {
  return (
    <div className="md:h-screen h-full flex items-center justify-center py-7 px-3">
      <section className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 w-full h-full p-3 place-content-center">
        <section className="grid col-span-6 row-span-5 bg-slate-600 rounded-xl">
          <div className="grid place-content-center h-full place-items-center p-10 text-justify gap-3">
            <NavLink
              to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
              target="_blank"
              className="border-2 p-3 rounded-xl tracking-wide hover:uppercase text-white font-bold relative hover:scale-105 cursor-pointer mb-5 hover:bg-slate-700/80 backdrop-blur-xl"
            >
              Available for hire
              <div className="absolute w-7 h-7 bg-green-900/80 backdrop-blur-xl rounded-full right-0 top-0 animate-ping"></div>
            </NavLink>
            <h1 className="text-7xl text-white text-start tracking-wide">
              Salam, I’m Mujibul Haque <span className="font-bold">Tanim</span>,
            </h1>
            <h3 className="text-lg text-gray-300">
              A software engineer. Mainly working in the JavaScript ecosystem,
              I’m a dedicated problem-solver who thrives on learning and
              building.
            </h3>
            <div className="flex gap-3 justify-between items-center place-self-end">
              <NavLink
                to={"/about"}
                className="flex justify-end items-center gap-3 place-self-end rounded-xl text-white font-bold "
              >
                <div className="rounded-full border-2 px-3 py-1 text-white font-bold hover:scale-95 mt-5 cursor-pointer hover:bg-slate-700/80 backdrop-blur-xl">
                  Explore More
                </div>
              </NavLink>
              <div className="rounded-full border-2 px-3 py-1 place-self-end text-white font-bold hover:scale-95 mt-5 cursor-pointer hover:bg-slate-700/80 backdrop-blur-xl">
                <FaFileExport size={24} />
              </div>
            </div>
          </div>
        </section>
        <NavLink
          to={"https://github.com/mujibulhaquetanim"}
          target="_blank"
          className="grid col-span-6 row-span-2 bg-slate-600/80 backdrop-blur-xl rounded-xl"
        >
          <GitTimeline
            markdownText={`![](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mujibulhaquetanim&theme=nord_bright)`}
          />
        </NavLink>
        <NavLink
          to={"/Projects"}
          className="grid col-span-6 row-span-2 bg-slate-600/80 backdrop-blur-xl rounded-xl"
        >
          <div className="relative space-y-5 text-center">
            <h1 className="text-2xl text-white font-bold mt-2 tracking-widest hover:scale-105 hover:underline">
              Projects Overview
            </h1>
            <p className="text-xs text-gray-400 font-bold hover:scale-105 hover:underline">
              Click to see in detail
            </p>
            <div className="w-full absolute">
              <ProjectsCard />
            </div>
          </div>
        </NavLink>

        <NavLink
          to={"https://monkeytype.com/profile/mujibtanim"}
          target="_blank"
          className="grid col-span-3 row-span-2 bg-slate-600/80 backdrop-blur-xl rounded-xl"
        >
          <div className="grid place-items-center place-content-center gap-3">
            <h1 className="text-9xl flex justify-center items-center text-white font-bold gap-3 hover:scale-105">
              60 <p className="text-xs text-gray-400 font-bold text-end">WPM</p>
            </h1>
            <p className="text-base text-white font-bold">Typing Speed ⌨️</p>
          </div>
        </NavLink>
        <div className="grid col-span-3 row-span-2 bg-slate-600/80 backdrop-blur-xl rounded-xl">
          <div className="w-full h-full absolute grid place-items-center place-content-center gap-7">
            <h1 className="text-2xl text-white font-bold hover:scale-105 hover:underline tracking-widest mt-5 text-center">
              Tech Stack
            </h1>
            <TechStacks />
          </div>
        </div>
        <NavLink
          to={"/Blogs"}
          className="grid col-span-3 row-span-1 bg-slate-600/80 backdrop-blur-xl rounded-xl"
        >
          <h1 className="text-lg text-white font-bold mt-2 flex justify-center items-center hover:scale-105 cursor-pointer hover:underline">
            Click to see Blogs 📚
          </h1>
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
          target="_blank"
          className={
            "border hover:border-2 hover:bg-slate-700/80 backdrop-blur-xl hover:scale-95 cursor-pointer  rounded-xl p-1 space-x-1 flex justify-center items-center"
          }
        >
          <FaLinkedin color="white" size={70} />
        </NavLink>
        <NavLink
          to={"https://github.com/mujibulhaquetanim"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center hover:border-2 hover:bg-slate-700/80 backdrop-blur-xl hover:scale-95 cursor-pointer"
          }
        >
          <FaGithub color="white" size={70} />
        </NavLink>
        <NavLink
          to={"https://twitter.com/mmhtanim"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center hover:border-2 hover:bg-slate-700/80 backdrop-blur-xl hover:scale-95 cursor-pointer"
          }
        >
          <FaXTwitter color="white" size={70} />
        </NavLink>
      </section>
    </div>
  );
}
