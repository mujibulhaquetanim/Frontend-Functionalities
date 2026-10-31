import { Link } from "react-router";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function UpcomingProjectPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-white [--hard:#1e293b]">
      <Helmet>
        <title>In progress — Mujibul Haque Tanim</title>
      </Helmet>

      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="tile mx-auto mb-6 grid size-16 place-items-center"
        >
          <Hammer aria-hidden className="size-7" />
        </motion.div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Still being built
        </h1>

        <p className="mb-8 text-lg text-slate-300">
          This project is under active development and isn't public yet. The
          finished projects are ready to explore in the meantime.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/projects" className="btn-press px-5 py-2.5 text-sm">
            View finished projects
          </Link>
          <Link to="/" className="btn-press bg-transparent px-5 py-2.5 text-sm">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
}
