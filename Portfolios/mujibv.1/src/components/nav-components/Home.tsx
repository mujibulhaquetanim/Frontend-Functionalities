import { Github, Linkedin, Twitter } from "lucide-react";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center py-10">
      <section className="grid grid-cols-12 grid-rows-6 gap-4 w-full h-full p-3 place-content-center">
        <section className="grid col-span-6 row-span-5 bg-slate-600 rounded-xl">
          <div className="grid place-content-center h-full place-items-center p-5 text-justify gap-3">
            <div className="border-2 p-3 rounded-xl text-white font-bold relative hover:scale-110 cursor-pointer">
              Available for hire{" "}
              <div className="absolute w-7 h-7 bg-green-900 rounded-full right-0 top-0 animate-ping"></div>
            </div>
            <h1 className="text-7xl text-white text-start">
              Salam, I’m Mujibul Haque Tanim,
            </h1>
            <h3 className="text-base text-gray-300">
              A software engineer. Mainly working in the JavaScript ecosystem,
              I’m a dedicated problem-solver who thrives on learning and
              building.
            </h3>
          </div>
        </section>
        <div className="grid col-span-6 row-span-2 bg-slate-600 rounded-xl">
          GitHub Timeline
        </div>
        <NavLink
          to={"/Projects"}
          className="grid col-span-6 row-span-2 bg-slate-600 rounded-xl"
        >
          Projects
        </NavLink>
        <div className="grid col-span-3 row-span-2 bg-slate-600 rounded-xl">
          Typing Speed
        </div>
        <div className="grid col-span-3 row-span-2 bg-slate-600 rounded-xl">
          Tech Stack
        </div>
        <NavLink
          to={"/Blogs"}
          className="grid col-span-3 row-span-1 bg-slate-600 rounded-xl"
        >
          Blogs
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/mujibulhaquetanim/"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center"
          }
        >
          <Linkedin color="white" />
        </NavLink>
        <NavLink
          to={"https://github.com/mujibulhaquetanim"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center"
          }
        >
          <Github color="white" />
        </NavLink>
        <NavLink
          to={"https://twitter.com/mmhtanim"}
          target="_blank"
          className={
            "border rounded-xl p-1 space-x-1 flex justify-center items-center"
          }
        >
          <Twitter color="white" />
        </NavLink>
      </section>
    </div>
  );
}
