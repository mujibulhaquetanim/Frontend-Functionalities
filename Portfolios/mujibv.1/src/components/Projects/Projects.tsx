import { NavLink, Outlet } from "react-router";

export default function Projects() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-5 ${
      isActive
        ? "text-white uppercase border-b-2 border-white"
        : "hover:text-white cursor-pointer"
    }`;

  return (
    <div className="w-full min-h-screen grid place-content-center place-items-center gap-3">
      <div className="flex justify-center items-center border rounded-full px-7 py-2 text-center bg-slate-400">
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
      <Outlet />
    </div>
  );
}
