import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import {
  fetchContributions,
  GitTimelineProps,
  DayCell,
  toUTCDateKey,
  startOfUTCDay,
  addUTCDays,
  startOfUTCWeek,
} from "../../../hook/GhTimelineContribution";

const LEVEL_COLORS = ["#1e293b", "#0e4429", "#006d32", "#26a641", "#39d353"];
const REQUEST_TIMEOUT_MS = 10_000;

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatDay(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? date : dateFormatter.format(parsed);
}

function pluralize(count: number) {
  return `${count.toLocaleString()} ${count === 1 ? "contribution" : "contributions"}`;
}

export default function GitTimeline({ username, className }: GitTimelineProps) {
  const [contributions, setContributions] = useState<DayCell[]>([]);
  const [totalActivity, setTotalActivity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [hovered, setHovered] = useState<DayCell | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const cardClassName = [
    "tile group/timeline flex flex-col w-full h-full overflow-hidden p-4 xl:p-5 text-slate-100 [--cell:10px] xl:[--cell:12px] 2xl:[--cell:14px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const controller = new AbortController();
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, REQUEST_TIMEOUT_MS);

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchContributions(username, controller.signal);
        setContributions(data.contributions);
        setTotalActivity(
          data.total.lastYear ??
            data.contributions.reduce((sum, day) => sum + day.count, 0),
        );
      } catch (err) {
        if (controller.signal.aborted && !timedOut) return; // unmounted

        setError(
          timedOut
            ? "GitHub took too long to respond."
            : !navigator.onLine
              ? "You're offline. Reconnect to load GitHub activity."
              : err instanceof Error && !(err instanceof TypeError)
                ? err.message
                : "Couldn't reach GitHub.",
        );
      } finally {
        window.clearTimeout(timeout);
        if (!controller.signal.aborted || timedOut) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [username, attempt]);

  const weeks = useMemo(() => {
    const daysByDate = new Map(contributions.map((day) => [day.date, day]));

    const today = startOfUTCDay(new Date());
    const end = today;
    const start = startOfUTCWeek(addUTCDays(end, -364));

    const cells: DayCell[] = [];
    for (let d = new Date(start); d <= end; d = addUTCDays(d, 1)) {
      const key = toUTCDateKey(d);
      cells.push({
        date: key,
        count: daysByDate.get(key)?.count ?? 0,
        level: daysByDate.get(key)?.level ?? 0,
      });
    }

    const groupedWeeks: DayCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      groupedWeeks.push(cells.slice(i, i + 7));
    }

    return groupedWeeks;
  }, [contributions]);

  const busiestDay = useMemo(
    () =>
      contributions.reduce<DayCell | null>(
        (best, day) => (day.count > (best?.count ?? 0) ? day : best),
        null,
      ),
    [contributions],
  );

  // On narrow screens the grid scrolls; start at the most recent weeks.
  useEffect(() => {
    if (loading || error) return;
    const el = scrollerRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [loading, error, weeks]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  const header = (
    <div className="mb-3 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h2 className="text-base xl:text-lg font-bold leading-tight text-white">
          GitHub activity
        </h2>
        {loading ? (
          <div className="mt-1.5 h-3.5 w-44 rounded-md animate-git-shimmer" />
        ) : (
          <p className="mt-1 text-xs xl:text-[13px] text-slate-300">
            {error
              ? "Activity couldn't be loaded"
              : totalActivity > 0
                ? `${pluralize(totalActivity)} in the last year`
                : "No public contributions in the last year"}
          </p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <div
          className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400"
          aria-hidden
        >
          <span>Less</span>
          {LEVEL_COLORS.map((color) => (
            <span
              key={color}
              className="size-[var(--cell)] rounded-[3px] border border-white/5"
              style={{ background: color }}
            />
          ))}
          <span>More</span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-0.5 border-b border-slate-300/30 pb-0.5 text-xs xl:text-[13px] text-slate-200 transition-colors hover:border-white hover:text-white"
        >
          View profile
          <ArrowUpRight
            aria-hidden
            className="size-3.5 transition-transform duration-300 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );

  if (error) {
    return (
      <section className={cardClassName} aria-label="GitHub activity">
        {header}
        <div
          role="alert"
          className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/15 p-4 text-center"
        >
          <p className="text-sm text-slate-200">{error}</p>
          <button
            type="button"
            onClick={retry}
            className="btn-press group px-3 py-1 text-xs"
          >
            <RotateCw
              aria-hidden
              className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:rotate-180"
            />
            Try again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cardClassName}
      aria-label="GitHub activity"
      aria-busy={loading}
    >
      {header}

      <div
        ref={scrollerRef}
        className="git-timeline-scrollbar my-auto min-h-0 py-0.5 px-0.5"
      >
        <div
          role="img"
          aria-label={
            loading
              ? "Contribution calendar loading"
              : `Contribution calendar: ${pluralize(totalActivity)} in the last year`
          }
          className="grid w-max grid-flow-col gap-[3px]"
          onPointerLeave={() => setHovered(null)}
        >
          {loading
            ? Array.from({ length: 53 }).map((_, weekIndex) => (
                <div
                  key={weekIndex}
                  className="grid grid-rows-[repeat(7,var(--cell))] gap-[3px]"
                >
                  {Array.from({ length: 7 }).map((__, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="size-[var(--cell)] rounded-[3px] animate-git-shimmer"
                    />
                  ))}
                </div>
              ))
            : weeks.map((week, weekIndex) => (
                <div
                  key={week[0]?.date ?? weekIndex}
                  className="grid grid-rows-[repeat(7,var(--cell))] gap-[3px] animate-cell-in"
                  style={{ animationDelay: `${weekIndex * 12}ms` }}
                >
                  {week.map((cell) => {
                    const label = `${pluralize(cell.count)} on ${formatDay(cell.date)}`;
                    return (
                      <div
                        key={cell.date}
                        title={label}
                        onPointerEnter={() => setHovered(cell)}
                        className={`size-[var(--cell)] rounded-[3px] border border-white/5 transition-transform duration-150 ease-out-expo hover:scale-[1.35] hover:border-white/60 ${
                          hovered?.date === cell.date ? "relative z-10" : ""
                        }`}
                        style={{
                          background:
                            LEVEL_COLORS[
                              Math.min(
                                Math.max(cell.level, 0),
                                LEVEL_COLORS.length - 1,
                              )
                            ],
                        }}
                      />
                    );
                  })}
                </div>
              ))}
        </div>
      </div>

      <p className="mt-2 truncate text-[11px] xl:text-xs text-slate-400">
        {loading
          ? "Loading contributions…"
          : hovered
            ? `${pluralize(hovered.count)} on ${formatDay(hovered.date)}`
            : busiestDay
              ? `Busiest day was ${formatDay(busiestDay.date)} with ${pluralize(busiestDay.count)}.`
              : `Matches the public calendar on @${username}'s GitHub profile.`}
      </p>
    </section>
  );
}
