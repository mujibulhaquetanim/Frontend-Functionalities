import { NavLink } from "react-router";
import { Home, FolderGit, Rss, LayoutDashboard } from "lucide-react";

export default function NavBar() {
  const routes = [
    { to: "/", icon: <Home color="white" /> },
    { to: "/Projects", icon: <FolderGit color="white" /> },
    { to: "/Blogs", icon: <Rss color="white" /> },
    { to: "/dashboard", icon: <LayoutDashboard color="white" /> },
  ];
  return (
    <nav className="grid place-items-center place-content-center h-full drop-shadow-lg gap-3">
      <div className="border-2 py-7 px-5 rounded-2xl gap-7 grid bg-slate-700">
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
