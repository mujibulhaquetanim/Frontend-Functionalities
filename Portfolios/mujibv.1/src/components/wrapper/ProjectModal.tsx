import { useCallback, useEffect, useState } from "react";

export type Project = {
  src: string;
  alt: string;
  link: string;
  layout: string;
  title: string;
  description: string;
  tags: string[];
  badge: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!project) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setVisible(true)),
    );
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 280);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      />

      <div
        className={`relative z-10 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[#2a3547] shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_40%)]" />

        <div className="relative flex flex-col md:flex-row">
          {/* Media */}
          <div className="relative w-full shrink-0 overflow-hidden bg-black/30 md:w-[52%]">
            <img
              src={project.src}
              alt={project.alt}
              className="h-56 w-full object-cover md:h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#2a3547] to-transparent md:hidden" />
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                  {project.badge}
                </span>
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-slate-300 transition-colors hover:border-white/20 hover:bg-black/30 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black/15 p-4">
              <p className="text-sm leading-7 text-slate-300">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/15 bg-white/8 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-300"
              >
                Visit project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
