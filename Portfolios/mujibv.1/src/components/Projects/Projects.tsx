import { NavLink, Outlet } from "react-router";
import { motion } from "framer-motion";

const tabs = [
  { to: "/projects", label: "Projects" },
  { to: "/projects/code-samples", label: "Code samples" },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen lg:min-h-0 lg:h-[100dvh] flex flex-col items-center gap-2 pt-2">
      <nav
        aria-label="Project categories"
        className="flex items-center gap-1 rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur-xl"
      >
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end
            className={({ isActive }) =>
              `relative rounded-full px-5 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                isActive ? "text-slate-800" : "text-slate-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="projects-tab"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="w-full flex-1 min-h-0 md:pr-2 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
