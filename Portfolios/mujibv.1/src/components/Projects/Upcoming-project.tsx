export default function UpcomingProjectPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
      <div className="max-w-xl">
        <h1 className="mb-4 text-5xl font-bold">🚧 Coming Soon</h1>

        <p className="mb-8 text-lg text-muted-foreground">
          This project is currently under development. Check back later for
          updates.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="rounded-md bg-primary px-5 py-3 text-primary-foreground"
          >
            Go Home
          </a>

          <a href="/projects" className="rounded-md border px-5 py-3">
            View Other Projects
          </a>
        </div>
      </div>
    </div>
  );
}
