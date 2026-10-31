export type DayCell = {
  date: string;
  count: number;
  level: number;
};

export type ContributionsResponse = {
  total: Record<string, number>;
  contributions: DayCell[];
};

export type GitTimelineProps = {
  username: string;
  className?: string;
};

const CACHE_TTL_MS = 60 * 60 * 1000;

function toUTCDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function startOfUTCDay(date: Date): Date {
  const d = new Date(date);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

function addUTCDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function startOfUTCWeek(date: Date): Date {
  const d = startOfUTCDay(date);
  const day = d.getUTCDay(); // 0 = Sunday
  return addUTCDays(d, -day);
}

function cacheKey(username: string) {
  return `gh-contributions:${username.toLowerCase()}`;
}

// Storage can be unavailable (private mode, blocked cookies), so every access is guarded.
function readCachedContributions(
  username: string,
): ContributionsResponse | null {
  try {
    const raw = sessionStorage.getItem(cacheKey(username));
    if (!raw) return null;
    const { at, data } = JSON.parse(raw) as {
      at: number;
      data: ContributionsResponse;
    };
    if (Date.now() - at > CACHE_TTL_MS || !Array.isArray(data?.contributions))
      return null;
    return data;
  } catch {
    return null;
  }
}

function writeCachedContributions(
  username: string,
  data: ContributionsResponse,
) {
  try {
    sessionStorage.setItem(
      cacheKey(username),
      JSON.stringify({ at: Date.now(), data }),
    );
  } catch {
    // Quota exceeded or storage disabled — caching is best-effort.
  }
}

async function fetchContributions(
  username: string,
  signal?: AbortSignal,
): Promise<ContributionsResponse> {
  const cached = readCachedContributions(username);
  if (cached) return cached;

  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(
      username,
    )}?y=last`,
    { signal },
  );

  if (!response.ok) {
    throw new Error(
      response.status === 404
        ? "GitHub user not found."
        : "GitHub activity is unavailable right now.",
    );
  }

  const data = (await response.json()) as Partial<ContributionsResponse>;
  if (!Array.isArray(data.contributions)) {
    throw new Error("GitHub returned activity in an unexpected format.");
  }

  const normalized: ContributionsResponse = {
    total: data.total ?? {},
    contributions: data.contributions,
  };
  writeCachedContributions(username, normalized);
  return normalized;
}

export {
  fetchContributions,
  toUTCDateKey,
  startOfUTCDay,
  addUTCDays,
  startOfUTCWeek,
};
