import { NavLink } from "react-router";
import { FaHome, FaFolder, FaRss } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export default function NavBar() {
  const routes = [
    { to: "/", icon: FaHome, name: "Home" },
    { to: "/projects", icon: FaFolder, name: "Projects" },
    { to: "/blogs", icon: FaRss, name: "Blogs" },
    { to: "/work-updates", icon: MdOutlineDashboard, name: "Updates" },
  ];

  return (
    <nav className="grid place-items-center place-content-center h-full drop-shadow-lg gap-3">
      <div className="border-2 py-3 md:py-7 px-5 rounded-2xl gap-7 grid md:grid-flow-row grid-flow-col bg-slate-700">
        {routes.map((route, index) => (
          <NavLink
            to={route.to}
            key={index}
            className={({ isActive }) =>
              `relative flex flex-col items-center group transition-transform duration-200 ${
                isActive ? "custom-border" : "hover:scale-110"
              }`
            }
          >
            <route.icon color="white" size={20} />
            <span className="absolute bottom-[24px] bg-slate-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {route.name}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
