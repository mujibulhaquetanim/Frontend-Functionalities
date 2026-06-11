import { useState } from "react";
import ProjectModal from "../wrapper/ProjectModal";
import { Project } from "../wrapper/ProjectModal";
import { LazyImage } from "../wrapper/LazyImage";
import { projects } from "../../assets/projectData";

/*
  // At lg the row spans sum to exactly 12 per column:
  //   col 1-4 : shopmart(8)  + yumdispatch(4)               = 12
  //   col 5-8 : pharmacms(3) + vanillaamazon(6) + reelclone(3) = 12
  //   col 9-12: aatbaazar(6) + instafeed(6)                  = 12
  // grid-template-rows: repeat(12, 1fr) + h-full tiles them
  // exactly into the available viewport height with no overflow.
*/

export default function Frontend() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <div
        className="w-full overflow-hidden p-1.5
                   lg:h-[calc(100dvh-3.5rem)] lg:p-2"
      >
        <div
          className="grid w-full grid-cols-12 gap-1.5
                     auto-rows-[minmax(2.8rem,auto)]
                     lg:h-full lg:gap-2
                     lg:[grid-auto-rows:unset]
                     lg:[grid-template-rows:repeat(12,minmax(0,1fr))]"
        >
          {projects.map((project) => (
            <div
              key={project.alt}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-700 ${project.layout}`}
              onClick={() => setActiveProject(project)}
              role="button"
              tabIndex={0}
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
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
                  {project.badge}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {project.title}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-sky-300">
                  View details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </p>
              </div>
            </div>
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
