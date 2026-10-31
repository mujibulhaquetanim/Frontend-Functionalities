import { useState } from "react";
import ProjectModal from "../wrapper/ProjectModal";
import { Project } from "../wrapper/ProjectModal";
import { LazyImage } from "../wrapper/LazyImage";
import { projects } from "../../assets/projectData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/*
  // At lg each tile has an explicit col/row start, and the spans sum to 12 per column:
  //   col 1-4 : zasmate(7)   + shopmart(5)                        = 12
  //   col 5-8 : pharmacms(3) + vanillaamazon(6) + tinderclone(3) = 12
  //   col 9-12: aatbaazar(4) + scrollfeed(4) + yumdispatch(4)    = 12
  // grid-template-rows: repeat(12, 1fr) + h-full tiles them
  // exactly into the available viewport height with no overflow.
*/

export default function Frontend() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <div
        className="w-full overflow-hidden p-1.5
                   lg:h-full lg:p-2"
      >
        <div
          className="grid w-full grid-cols-12 gap-1.5
                     auto-rows-[minmax(2.8rem,auto)]
                     lg:h-full lg:gap-2
                     lg:[grid-auto-rows:unset]
                     lg:[grid-template-rows:repeat(12,minmax(0,1fr))]"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.alt}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-800 transition-[border-color] duration-300 hover:border-white/30 focus-visible:border-white/30 ${project.layout}`}
              onClick={() => setActiveProject(project)}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Open ${project.title} details`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
            >
              <LazyImage
                src={project.src}
                alt={project.alt}
                className={`h-full w-full object-cover ${project.imagePosition ?? ""} group-hover:scale-[1.04] group-focus-visible:scale-[1.04]`}
              />

              {/* Overlay: on hover/focus for pointers, always visible on touch (no hover) */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
                <p className="text-[11px] font-medium text-slate-300 translate-y-1 transition-transform duration-300 ease-out-expo group-hover:translate-y-0">
                  {project.badge}
                </p>
                <p className="mt-0.5 font-display text-sm font-semibold text-white translate-y-1 transition-transform duration-300 delay-[40ms] ease-out-expo group-hover:translate-y-0">
                  {project.title}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-sky-300">
                  View details
                  <ArrowUpRight
                    aria-hidden
                    className="size-3 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
