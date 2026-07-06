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

async function fetchContributions(
  username: string,
  signal?: AbortSignal,
): Promise<ContributionsResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(
      username,
    )}?y=last`,
    { signal },
  );

  if (!response.ok) {
    throw new Error(`Contribution API error: ${response.status}`);
  }

  const data = (await response.json()) as ContributionsResponse;
  if (!Array.isArray(data.contributions)) {
    throw new Error("Invalid contribution data received");
  }

  return data;
}

export {fetchContributions, toUTCDateKey, startOfUTCDay, addUTCDays, startOfUTCWeek, };