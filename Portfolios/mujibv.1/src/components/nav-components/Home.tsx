import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import ProjectsCard from "../Home-components/ProjectsCard";
import TechStacks from "../Home-components/TechStack";

export default function Home() {
  return (
    <div className="md:h-screen h-full flex items-center justify-center py-7 px-3">
      <section className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 w-full h-full p-3 place-content-center">
        <section className="grid col-span-6 row-span-5 bg-slate-600 rounded-xl">
          <div className="grid place-content-center h-full place-items-center p-10 text-justify gap-3">
            <NavLink
              to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
              target="_blank"
              className="border-2 p-3 rounded-xl text-white font-bold relative hover:scale-105 cursor-pointer mb-5 hover:bg-slate-700"
            >
              Available for hire
              <div className="absolute w-7 h-7 bg-green-900 rounded-full right-0 top-0 animate-ping"></div>
            </NavLink>
            <h1 className="text-7xl text-white text-start tracking-wide">
              Salam, I’m Mujibul Haque <span className="font-bold">Tanim</span>,
            </h1>
            <h3 className="text-lg text-gray-300">
              A software engineer. Mainly working in the JavaScript ecosystem,
              I’m a dedicated problem-solver who thrives on learning and
              building.
            </h3>
            <NavLink
              to={"/about"}
              className="border-2 px-3 py-1 place-self-end rounded-xl text-white font-bold hover:scale-95 mt-5 cursor-pointer hover:bg-slate-700"
            >
              Explore More
            </NavLink>
          </div>
        </section>
        <div className="grid col-span-6 row-span-2 bg-slate-600 rounded-xl">
          GitHub Timeline
        </div>
        <NavLink
          to={"/Projects"}
          className="grid col-span-6 row-span-2 bg-slate-600 rounded-xl"
        >
          <div className="relative space-y-5 text-center">
            <h1 className="text-lg text-white font-bold mt-2 tracking-widest">
              Projects Overview
            </h1>
            <p className="text-xs text-gray-400 font-bold">
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
          className="grid col-span-3 row-span-2 bg-slate-600 rounded-xl"
        >
          <div className="grid place-items-center place-content-center gap-3">
            <h1 className="text-9xl flex justify-center items-center text-white font-bold gap-3">
              60 <p className="text-xs text-gray-400 font-bold text-end">WPM</p>
            </h1>
            <p className="text-base text-white font-bold">Typing Speed ⌨️</p>
          </div>
        </NavLink>
        <div className="grid col-span-3 row-span-2 bg-slate-600 rounded-xl">
          <h1 className="text-lg text-white font-bold flex justify-center items-center underline tracking-widest">
            Tech Stack
          </h1>
          <TechStacks />
        </div>
        <NavLink
          to={"/Blogs"}
          className="grid col-span-3 row-span-1 bg-slate-600 rounded-xl"
        >
          <h1 className="text-lg text-white font-bold mt-2 flex justify-center items-center hover:scale-105 cursor-pointer hover:underline">
            Click to see Blogs 📚
          </h1>
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
          target="_blank"
          className={
            "border hover:border-2 hover:bg-slate-700 hover:scale-95 cursor-pointer  rounded-xl p-1 space-x-1 flex justify-center items-center"
          }
        >
          <FaLinkedin color="white" size={70} />
        </NavLink>
        <NavLink
          to={"https://github.com/mujibulhaquetanim"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center hover:border-2 hover:bg-slate-700 hover:scale-95 cursor-pointer"
          }
        >
          <FaGithub color="white" size={70} />
        </NavLink>
        <NavLink
          to={"https://twitter.com/mmhtanim"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center hover:border-2 hover:bg-slate-700 hover:scale-95 cursor-pointer"
          }
        >
          <FaXTwitter color="white" size={70} />
        </NavLink>
      </section>
    </div>
  );
}
