// components/NotFound.tsx

import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center text-white [--hard:#1e293b]">
      <Helmet>
        <title>Page not found — Mujibul Haque Tanim</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: 16, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="mb-2 font-display text-8xl font-extrabold tracking-tight sm:text-9xl"
      >
        404
      </motion.h1>

      <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
        This page doesn't exist
      </h2>

      <p className="mb-8 max-w-md text-slate-300">
        Nothing lives at{" "}
        <code className="break-all rounded-md bg-black/25 px-1.5 py-0.5 text-sm text-slate-100">
          {pathname}
        </code>
        . Check the address, or head back to the home page.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn-press px-5 py-2.5 text-sm">
          Go to home
        </Link>
        <Link
          to="/projects"
          className="btn-press bg-transparent px-5 py-2.5 text-sm"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}
