import { NavLink, Outlet } from "react-router";

export default function Projects() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-5 transition-all duration-300 ${
      isActive
        ? "text-white uppercase font-semibold border-b border-r border-l rounded-full border-white"
        : "text-gray-300 hover:text-white hover:bg-slate-500 rounded-full"
    }`;

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2">
      <div className="flex justify-center items-center border rounded-full m-1 md:px-7 p-2 md:py-2 text-center bg-slate-400">
        <NavLink to="/projects/frontend" className={navLinkClass}>
          Frontend
        </NavLink>
        <NavLink to="/projects/fullstack" className={navLinkClass}>
          FullStack
        </NavLink>
        <NavLink to="/projects/backend" className={navLinkClass}>
          Backend
        </NavLink>
      </div>
      <div className="w-full h-full md:pr-2 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
