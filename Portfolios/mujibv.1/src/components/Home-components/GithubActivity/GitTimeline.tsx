import React, { useEffect, useMemo, useState } from "react";
import {
  fetchContributions,
  GitTimelineProps,
  DayCell,
  toUTCDateKey,
  startOfUTCDay,
  addUTCDays,
  startOfUTCWeek,
} from "../../../hook/GhTimelineContribution";

export default function GitTimeline({ username, className }: GitTimelineProps) {
  const [contributions, setContributions] = useState<DayCell[]>([]);
  const [totalActivity, setTotalActivity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cardClassName = [
    "group/timeline relative w-full h-full overflow-hidden rounded-xl border border-white/10 bg-slate-700/70 bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_92%_100%,rgba(56,189,248,0.10),transparent_38%)] p-5 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_28px_rgba(15,23,42,0.20)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-500 hover:border-sky-300/20 hover:bg-slate-900/65 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_14px_34px_rgba(15,23,42,0.28),0_0_24px_rgba(56,189,248,0.06)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const controller = new AbortController();

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
        if (controller.signal.aborted) return;

        setError(
          err instanceof Error ? err.message : "Failed to load GitHub activity",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      controller.abort();
    };
  }, [username]);

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

  const styles: Record<string, React.CSSProperties> = {
    card: {
      color: "#e5e7eb",
    },
    header: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    subtitle: {
      marginTop: 6,
      fontSize: 13,
      color: "#9ca3af",
    },
    link: {
      fontSize: 13,
      color: "#cbd5e1",
      textDecoration: "none",
      borderBottom: "1px solid rgba(203, 213, 225, 0.35)",
      paddingBottom: 2,
    },
    legend: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 11,
      color: "#94a3b8",
      marginBottom: 14,
      flexWrap: "wrap",
    },
    legendBox: {
      width: 12,
      height: 12,
      borderRadius: 3,
      border: "1px solid rgba(255, 255, 255, 0.06)",
      display: "inline-block",
    },
    grid: {
      display: "grid",
      gridAutoFlow: "column",
      gap: 3,
      width: "max-content",
    },
    week: {
      display: "grid",
      gridTemplateRows: "repeat(7, 12px)",
      gap: 3,
    },
    cell: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "#111827",
      border: "1px solid rgba(255, 255, 255, 0.06)",
    },
    note: {
      marginTop: 14,
      fontSize: 12,
      color: "#94a3b8",
    },
    error: {
      color: "#fca5a5",
      fontSize: 14,
    },
    skeletonTitle: {
      width: 180,
      height: 18,
      borderRadius: 8,
      background:
        "linear-gradient(90deg, #111827 25%, #1f2937 50%, #111827 75%)",
      backgroundSize: "200% 100%",
    },
    skeletonSubtitle: {
      width: 260,
      height: 14,
      borderRadius: 8,
      marginTop: 8,
      background:
        "linear-gradient(90deg, #111827 25%, #1f2937 50%, #111827 75%)",
      backgroundSize: "200% 100%",
    },
    skeletonCell: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background:
        "linear-gradient(90deg, #111827 25%, #1f2937 50%, #111827 75%)",
      backgroundSize: "200% 100%",
    },
  };

  if (loading) {
    return (
      <div className={cardClassName} style={styles.card}>
        <div style={styles.header}>
          <div>
            <div className="animate-git-shimmer" style={styles.skeletonTitle} />
            <div
              className="animate-git-shimmer"
              style={styles.skeletonSubtitle}
            />
          </div>
        </div>

        <div className="git-timeline-scrollbar">
          <div style={styles.grid}>
            {Array.from({ length: 53 }).map((_, weekIndex) => (
              <div key={weekIndex} style={styles.week}>
                {Array.from({ length: 7 }).map((__, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="animate-git-shimmer"
                    style={styles.skeletonCell}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cardClassName} style={styles.card}>
        <div style={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={cardClassName} style={styles.card}>
      <div style={styles.header}>
        <div>
          <div style={styles.title}>GitHub activity</div>
          <div style={styles.subtitle}>
            {totalActivity} contributions in the last year
          </div>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          View profile
        </a>
      </div>

      <div style={styles.legend}>
        <span>Less</span>
        <span style={{ ...styles.legendBox, background: "#111827" }} />
        <span style={{ ...styles.legendBox, background: "#0e4429" }} />
        <span style={{ ...styles.legendBox, background: "#006d32" }} />
        <span style={{ ...styles.legendBox, background: "#26a641" }} />
        <span style={{ ...styles.legendBox, background: "#39d353" }} />
        <span>More</span>
      </div>

      <div className="git-timeline-scrollbar">
        <div style={styles.grid}>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} style={styles.week}>
              {week.map((cell) => {
                const level = cell.level;

                const background =
                  level === 0
                    ? "#111827"
                    : level === 1
                      ? "#0e4429"
                      : level === 2
                        ? "#006d32"
                        : level === 3
                          ? "#26a641"
                          : "#39d353";

                return (
                  <div
                    key={cell.date}
                    title={`${cell.date} — ${cell.count} activity`}
                    aria-label={`${cell.date} — ${cell.count} activity`}
                    style={{
                      ...styles.cell,
                      background,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.note}>
        Contribution data matches the calendar shown on the public GitHub
        profile of @{username}.
      </div>
    </div>
  );
}
