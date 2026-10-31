import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Hammer, ImageOff, X } from "lucide-react";

export type Project = {
  src: string;
  alt: string;
  link: string;
  layout: string;
  title: string;
  description: string;
  tags: string[];
  badge: string;
  /** Tailwind object-position for the bento tile crop, e.g. "object-left-top". */
  imagePosition?: string;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Links that point at the portfolio's own coming-soon page should stay in-app.
function getInternalPath(link: string): string | null {
  try {
    const url = new URL(link, window.location.origin);
    const isOwnSite =
      url.origin === window.location.origin ||
      url.hostname.replace(/^www\./, "") === "mujibulhaquetanim.dev";
    return isOwnSite && url.pathname === "/coming-soon" ? url.pathname : null;
  } catch {
    return null;
  }
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return createPortal(
    <AnimatePresence>
      {project && (
        <ModalContent key={project.title} project={project} onClose={onClose} />
      )}
    </AnimatePresence>,
    document.body,
  );
}

function ModalContent({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [imageFailed, setImageFailed] = useState(false);
  const internalPath = getInternalPath(project.link);

  // Scroll lock that doesn't shift the layout when the scrollbar disappears,
  // plus focus in on open and back to the triggering tile on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      // Keep Tab focus inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const ctaClass = "btn-press group w-full justify-center px-5 py-3 text-sm";

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-3 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="relative z-10 w-full max-w-3xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-[28px] border border-white/10 bg-[#2a3547] shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_40%)]" />

        <div className="relative flex flex-col md:flex-row">
          {/* Media */}
          <div className="relative w-full shrink-0 overflow-hidden bg-black/30 md:w-[52%]">
            {imageFailed ? (
              <div className="flex h-56 w-full flex-col items-center justify-center gap-2 text-slate-400 md:h-full">
                <ImageOff aria-hidden className="size-7" />
                <span className="text-xs">Preview unavailable</span>
              </div>
            ) : (
              <motion.img
                src={project.src}
                alt={project.alt}
                onError={() => setImageFailed(true)}
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-56 w-full object-cover md:h-full"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#2a3547] to-transparent md:hidden" />
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <span className="chip inline-flex items-center px-3 py-1 text-xs font-medium text-slate-300">
                  {project.badge}
                </span>
                <h2
                  id={titleId}
                  className="text-xl font-bold tracking-tight text-white md:text-2xl"
                >
                  {project.title}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-slate-300 transition-all duration-200 hover:rotate-90 hover:border-white/20 hover:bg-black/30 hover:text-white active:scale-90"
              >
                <X aria-hidden className="size-4" />
              </button>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black/15 p-4">
              <p
                id={descriptionId}
                className="text-sm leading-7 text-slate-300"
              >
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((tag, i) => (
                <motion.li
                  key={tag}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.03, duration: 0.3 }}
                  className="chip px-3 py-1 text-xs text-slate-200"
                >
                  {tag}
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              {internalPath ? (
                <Link to={internalPath} onClick={onClose} className={ctaClass}>
                  <Hammer aria-hidden className="size-4" />
                  See build status
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClass}
                >
                  Visit project
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
