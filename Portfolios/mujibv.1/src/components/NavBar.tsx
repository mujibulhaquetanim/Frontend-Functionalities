import { NavLink } from "react-router";
import { Home, FolderGit, Rss, LayoutDashboard } from "lucide-react";

export default function NavBar() {
  const routes = [
    <NavLink to="/">
      <Home color="white" />
    </NavLink>,
    <NavLink to="/Projects">
      <FolderGit color="white" />
    </NavLink>,
    <NavLink to="/Blogs">
      <Rss color="white" />
    </NavLink>,
    <NavLink to="/dashboard">
      <LayoutDashboard color="white" />
    </NavLink>,
  ];
  return (
    <nav className="grid place-items-center place-content-center h-full drop-shadow-lg gap-3 bg-slate-700">
      <div className="border-2 py-7 px-5 rounded-2xl gap-7 grid">
        {routes.map((route, index) => {
          return (
            <div
              key={index}
              className="rounded-full w-10 h-10 border-2 flex justify-center items-center"
            >
              {route}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
