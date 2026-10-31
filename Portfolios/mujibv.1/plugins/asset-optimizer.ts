import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { Logger, Plugin, ResolvedConfig } from "vite";

/*
  Build-time asset optimizer.

  After Vite writes `dist/` (bundled assets + copied `public/` files) this:
    1. converts large PNG/JPEG/GIF images to WebP (animated GIFs stay animated),
       downscaling anything wider than the site ever displays;
    2. rewrites references in the built HTML/JS/CSS to the new files;
    3. deletes originals that nothing references anymore;
    4. prints a before/after table and flags every file still over budget.

  Source files in `public/` are never modified, and results are cached by content
  hash in node_modules/.cache, so only new or changed images cost time.
*/

export type AssetOptimizerOptions = {
  /** Max width for still images. Default 1600 (≈ 2x the largest tile/modal). */
  maxWidth?: number;
  /** Max width for animated images, which carry hundreds of frames. Default 960. */
  maxAnimatedWidth?: number;
  /** WebP quality, 1–100. Default 78 (stills) / 70 (animated). */
  quality?: number;
  animatedQuality?: number;
  /** Images smaller than this are left alone. Default 40 KB. */
  minBytes?: number;
  /** A conversion is only kept if it saves at least this fraction. Default 0.1. */
  minSavings?: number;
  /** Size budgets (bytes) per output file, checked after optimization. */
  budgets?: Partial<Record<AssetKind, number>>;
  /** Fail the build when a budget is exceeded. Also enabled by ASSET_BUDGET_STRICT=1. */
  strict?: boolean;
};

type AssetKind =
  "image" | "animated" | "script" | "style" | "document" | "other";

type Conversion = {
  from: string; // path relative to outDir, posix
  to: string | null; // null → kept original
  before: number;
  after: number;
  animated: boolean;
  cached: boolean;
  note?: string;
};

const CONVERTIBLE = new Set([".png", ".jpg", ".jpeg", ".gif"]);
const TEXT_FILES = new Set([
  ".html",
  ".js",
  ".mjs",
  ".css",
  ".json",
  ".webmanifest",
]);
const CACHE_VERSION = 1;

const DEFAULT_BUDGETS: Record<AssetKind, number> = {
  image: 500 * 1024,
  // Screen-recording GIFs stay animated, so they get a looser budget than stills
  animated: 2.5 * 1024 * 1024,
  script: 300 * 1024,
  style: 100 * 1024,
  document: 1024 * 1024,
  other: 1024 * 1024,
};

function kindOf(file: string): AssetKind {
  const ext = path.extname(file).toLowerCase();
  if ([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg"].includes(ext))
    return "image";
  if ([".js", ".mjs"].includes(ext)) return "script";
  if (ext === ".css") return "style";
  if ([".pdf", ".doc", ".docx"].includes(ext)) return "document";
  return "other";
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function listFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(full) : Promise.resolve([full]);
    }),
  );
  return nested.flat();
}

async function fileExists(file: string): Promise<boolean> {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

function toPosix(file: string): string {
  return file.split(path.sep).join("/");
}

export default function assetOptimizer(
  options: AssetOptimizerOptions = {},
): Plugin {
  const opts = {
    maxWidth: options.maxWidth ?? 1600,
    maxAnimatedWidth: options.maxAnimatedWidth ?? 960,
    quality: options.quality ?? 78,
    animatedQuality: options.animatedQuality ?? 70,
    minBytes: options.minBytes ?? 40 * 1024,
    minSavings: options.minSavings ?? 0.1,
    budgets: { ...DEFAULT_BUDGETS, ...options.budgets },
    strict: options.strict ?? process.env.ASSET_BUDGET_STRICT === "1",
  };

  let config: ResolvedConfig;
  let logger: Logger;

  async function convert(
    file: string,
    cacheDir: string,
  ): Promise<{ buffer: Buffer; animated: boolean; cached: boolean }> {
    const input = await fs.readFile(file);
    const meta = await sharp(input, {
      animated: true,
      limitInputPixels: false,
    }).metadata();
    const animated = (meta.pages ?? 1) > 1;
    const width = animated ? opts.maxAnimatedWidth : opts.maxWidth;
    const quality = animated ? opts.animatedQuality : opts.quality;

    const key = createHash("sha1")
      .update(input)
      .update(JSON.stringify({ v: CACHE_VERSION, width, quality, animated }))
      .digest("hex");
    const cachePath = path.join(cacheDir, `${key}.webp`);

    try {
      return { buffer: await fs.readFile(cachePath), animated, cached: true };
    } catch {
      // Not cached yet
    }

    const buffer = await sharp(input, { animated, limitInputPixels: false })
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 4, smartSubsample: !animated })
      .toBuffer();

    await fs.mkdir(cacheDir, { recursive: true });
    await fs.writeFile(cachePath, buffer);
    return { buffer, animated, cached: false };
  }

  function printReport(conversions: Conversion[], overBudget: string[][]) {
    const converted = conversions.filter((c) => c.to);
    const rows = conversions.map((c) => [
      c.from,
      c.to ?? "(kept)",
      formatBytes(c.before),
      formatBytes(c.after),
      c.to ? `-${Math.round((1 - c.after / c.before) * 100)}%` : (c.note ?? ""),
      c.animated ? "animated" : "",
      c.cached ? "cached" : "",
    ]);
    const header = ["Source", "Output", "Before", "After", "Saved", "", ""];
    const widths = header.map((h, i) =>
      Math.max(h.length, ...rows.map((r) => r[i].length)),
    );
    const line = (cells: string[]) =>
      "  " +
      cells
        .map((cell, i) =>
          i >= 2 && i <= 4 ? cell.padStart(widths[i]) : cell.padEnd(widths[i]),
        )
        .join("  ")
        .trimEnd();

    logger.info("\n\x1b[1m[asset-optimizer] Image optimization\x1b[0m");
    if (rows.length === 0) {
      logger.info("  No images above the size threshold.");
    } else {
      logger.info(line(header));
      rows.forEach((r) => logger.info(line(r)));
      const before = converted.reduce((s, c) => s + c.before, 0);
      const after = converted.reduce((s, c) => s + c.after, 0);
      if (converted.length > 0) {
        logger.info(
          `\x1b[32m  ${converted.length} converted: ${formatBytes(before)} → ${formatBytes(after)} (-${Math.round((1 - after / before) * 100)}%)\x1b[0m`,
        );
      }
    }

    if (overBudget.length > 0) {
      logger.warn(
        `\n\x1b[1m[asset-optimizer] ${overBudget.length} file(s) over budget\x1b[0m`,
      );
      overBudget.forEach(([file, size, budget]) =>
        logger.warn(`  ${file}  ${size} (budget ${budget})`),
      );
    } else {
      logger.info("\x1b[32m  All files within budget.\x1b[0m");
    }
  }

  return {
    name: "asset-optimizer",
    apply: "build",
    enforce: "post",

    configResolved(resolved) {
      config = resolved;
      logger = resolved.logger;
    },

    closeBundle: {
      sequential: true,
      async handler() {
        const outDir = path.resolve(config.root, config.build.outDir);
        const cacheDir = path.resolve(
          config.root,
          "node_modules/.cache/asset-optimizer",
        );
        if (!(await fileExists(outDir))) return;

        sharp.cache(false); // animated GIFs decode to very large buffers; don't keep them around

        const files = await listFiles(outDir);
        const conversions: Conversion[] = [];
        const takenNames = new Set(
          files.map((f) => toPosix(path.relative(outDir, f))),
        );

        // Sequential on purpose: a single 1900px × 746-frame GIF is several GB decoded.
        for (const file of files) {
          const ext = path.extname(file).toLowerCase();
          if (!CONVERTIBLE.has(ext)) continue;

          const { size: before } = await fs.stat(file);
          if (before < opts.minBytes) continue;

          const rel = toPosix(path.relative(outDir, file));
          try {
            const result = await convert(file, cacheDir);
            const after = result.buffer.length;

            if (after > before * (1 - opts.minSavings)) {
              conversions.push({
                from: rel,
                to: null,
                before,
                after: before,
                animated: result.animated,
                cached: result.cached,
                note: "no gain",
              });
              continue;
            }

            // shopmart.gif and shopmart.png can both exist; don't let them collide.
            const stem = rel.slice(0, -ext.length);
            let target = `${stem}.webp`;
            if (takenNames.has(target)) target = `${stem}-${ext.slice(1)}.webp`;
            takenNames.add(target);

            await fs.writeFile(path.join(outDir, target), result.buffer);
            conversions.push({
              from: rel,
              to: target,
              before,
              after,
              animated: result.animated,
              cached: result.cached,
            });
          } catch (err) {
            conversions.push({
              from: rel,
              to: null,
              before,
              after: before,
              animated: false,
              cached: false,
              note: "failed",
            });
            logger.warn(
              `[asset-optimizer] Couldn't convert ${rel}: ${err instanceof Error ? err.message : String(err)}`,
            );
          }
        }

        // Point built HTML/JS/CSS at the new files. The path must follow a "/" and end at a
        // quote, query, hash, paren or whitespace, so "pharma.png" never matches "pharmadash.png".
        const replacements = conversions
          .filter((c): c is Conversion & { to: string } => Boolean(c.to))
          .map((c) => ({
            ...c,
            pattern: new RegExp(
              `(?<=/)${escapeRegExp(c.from)}(?=["'\`?#)\\s,]|$)`,
              "g",
            ),
          }));
        const textFiles = files.filter((f) =>
          TEXT_FILES.has(path.extname(f).toLowerCase()),
        );
        const contents = new Map<string, string>();

        for (const file of textFiles) {
          const original = await fs.readFile(file, "utf8");
          let updated = original;
          for (const r of replacements)
            updated = updated.replace(r.pattern, r.to);
          if (updated !== original) await fs.writeFile(file, updated);
          contents.set(file, updated);
        }

        // Remove originals only when no built file still mentions them by name.
        for (const r of replacements) {
          const name = path.posix.basename(r.from);
          const stillUsed = [...contents.values()].some((text) =>
            text.includes(name),
          );
          if (!stillUsed) await fs.rm(path.join(outDir, r.from));
          else
            logger.warn(
              `[asset-optimizer] Kept ${r.from}: still referenced in the build.`,
            );
        }

        // Budget check on the final output
        const finalFiles = await listFiles(outDir);
        const animatedOutputs = new Set(
          conversions.filter((c) => c.animated).map((c) => c.to ?? c.from),
        );
        const overBudget: string[][] = [];
        for (const file of finalFiles) {
          const { size } = await fs.stat(file);
          const rel = toPosix(path.relative(outDir, file));
          const budget =
            opts.budgets[animatedOutputs.has(rel) ? "animated" : kindOf(file)];
          if (size > budget) {
            overBudget.push([rel, formatBytes(size), formatBytes(budget)]);
          }
        }

        printReport(conversions, overBudget);

        if (opts.strict && overBudget.length > 0) {
          throw new Error(
            `[asset-optimizer] ${overBudget.length} file(s) exceed their size budget (strict mode).`,
          );
        }
      },
    },
  };
}
