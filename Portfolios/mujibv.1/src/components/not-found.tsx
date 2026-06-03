// components/NotFound.tsx

import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
      <h1 className="mb-2 text-8xl font-bold">404</h1>

      <h2 className="mb-4 text-3xl font-semibold">Page Not Found</h2>

      <p className="mb-8 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="rounded-lg border px-6 py-3 transition hover:bg-accent"
      >
        Back Home
      </Link>
    </div>
  );
}
