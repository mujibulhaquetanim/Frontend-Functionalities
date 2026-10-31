import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { FaHome, FaFolder, FaTasks } from "react-icons/fa";
import { MdSupervisedUserCircle } from "react-icons/md";

const routes = [
  { to: "/", icon: FaHome, name: "Home" },
  { to: "/projects", icon: FaFolder, name: "Projects" },
  { to: "/tech-stack", icon: FaTasks, name: "Stack" },
  { to: "/about", icon: MdSupervisedUserCircle, name: "About" },
];

export default function NavBar({ layoutGroup }: { layoutGroup: string }) {
  return (
    <nav
      aria-label="Primary"
      className="grid place-items-center place-content-center h-full drop-shadow-lg gap-3"
    >
      <div className="tile border-2 border-white/70 bg-page py-2 md:py-4 px-2 md:px-2 grid md:grid-flow-row grid-flow-col gap-1 md:gap-2">
        {routes.map((route) => (
          <NavLink
            to={route.to}
            key={route.to}
            end={route.to === "/"}
            aria-label={route.name}
            className="relative grid place-items-center size-11 rounded-xl group"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId={`nav-active-${layoutGroup}`}
                    className="absolute inset-0 rounded-xl bg-white/15 ring-1 ring-white/30"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <route.icon
                  aria-hidden
                  size={20}
                  className={`relative transition-transform duration-200 ease-out-expo ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 group-hover:text-white group-hover:-translate-y-0.5"
                  }`}
                />
                {/* Tooltip: above on mobile (bottom bar), right on desktop (side bar) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute whitespace-nowrap rounded-md bg-slate-900/90 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 ease-out-expo
                             bottom-full mb-2 translate-y-1
                             md:bottom-auto md:mb-0 md:left-full md:ml-3 md:translate-y-0 md:-translate-x-1
                             group-hover:opacity-100 group-hover:translate-y-0 md:group-hover:translate-x-0
                             group-focus-visible:opacity-100 group-focus-visible:translate-y-0 md:group-focus-visible:translate-x-0"
                >
                  {route.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
