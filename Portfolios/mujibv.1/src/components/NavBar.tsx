import { NavLink } from "react-router";
import { FaHome, FaFolder, FaRss } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export default function NavBar() {
  const routes = [
    { to: "/", icon: <FaHome color="white" size={20} /> },
    { to: "/Projects", icon: <FaFolder color="white" size={20} /> },
    { to: "/Blogs", icon: <FaRss color="white" size={20} /> },
    { to: "/dashboard", icon: <MdOutlineDashboard color="white" size={20} /> },
  ];
  return (
    <nav className="grid place-items-center place-content-center h-full drop-shadow-lg gap-3">
      <div className=" border-2 py-3 md:py-7 px-5 rounded-2xl gap-7 grid md:grid-flow-row grid-flow-col bg-slate-700">
        {routes.map((route, index) => {
          return (
            <NavLink
              to={route.to}
              key={index}
              className={({ isActive }) =>
                isActive ? "custom-border" : "hover:scale-110"
              }
            >
              {route.icon}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
