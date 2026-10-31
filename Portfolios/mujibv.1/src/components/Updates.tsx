import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedWrapper from "./wrapper/AnimatedWrapper";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

const WIDGET_SRC = "https://platform.twitter.com/widgets.js";
// Ad/tracking blockers commonly block the widget silently; don't wait forever.
const LOAD_TIMEOUT_MS = 8000;

type Status = "loading" | "ready" | "failed";

const tweets = [
  {
    url: "https://twitter.com/mmhtanim/status/1874347986450608597",
    date: "January 1, 2025",
    text: "New Year Plan 2025",
  },
  {
    url: "https://twitter.com/mmhtanim/status/1874438603746799715",
    date: "January 1, 2025",
    text: "I started doing the same on January 1, 2024, and haven't missed a single day since. #Consistency #coding #github",
  },
  {
    url: "https://twitter.com/mmhtanim/status/1871563219724275907",
    date: "December 24, 2024",
    text: "New Start. Over 800 tweets have been deleted from my timeline.",
  },
];

export default function Updates() {
  const [status, setStatus] = useState<Status>(
    window.twttr?.widgets ? "ready" : "loading",
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = () => {
      window.twttr?.widgets?.load(containerRef.current ?? undefined);
      setStatus("ready");
    };

    if (window.twttr?.widgets) {
      // Script already loaded (e.g. navigating back), just render the widgets
      render();
      return;
    }

    // Reuse a script tag that's still loading from a previous visit instead of adding a second one.
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    const onLoad = () =>
      window.twttr?.widgets ? render() : setStatus("failed");
    const onError = () => setStatus("failed");
    const timeout = window.setTimeout(() => {
      if (!window.twttr?.widgets) setStatus("failed");
    }, LOAD_TIMEOUT_MS);

    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    return () => {
      window.clearTimeout(timeout);
      script?.removeEventListener("load", onLoad);
      script?.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="m-3 min-h-[calc(100dvh-1.5rem)] rounded-2xl border-2 border-white/10 text-white flex flex-col items-center justify-center text-center overflow-x-hidden">
      {status === "loading" && (
        <div role="status" className="flex flex-col items-center gap-3 p-6">
          <span className="size-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          <span className="text-sm text-slate-300">Loading posts from X…</span>
        </div>
      )}

      {status === "failed" && (
        <div className="flex w-full max-w-2xl flex-col gap-3 p-4">
          <p className="text-sm text-slate-300">
            The X embed didn't load. A content blocker may be stopping it, so
            here are the posts as links.
          </p>
          <ul className="flex flex-col gap-2 text-left">
            {tweets.map((tweet) => (
              <li key={tweet.url}>
                <a
                  href={tweet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile tile-link group flex items-start justify-between gap-3 p-4"
                >
                  <span>
                    <span className="block text-sm text-white">
                      {tweet.text}
                    </span>
                    <span className="mt-1 block text-xs text-slate-400">
                      @mmhtanim, {tweet.date}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 text-slate-300 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Kept mounted and laid out while loading so widgets.js can find and measure the blockquotes */}
      <div
        ref={containerRef}
        hidden={status === "failed"}
        aria-hidden={status === "loading"}
        className={`flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 w-full p-4 transition-opacity duration-500 ${
          status === "ready" ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <AnimatedWrapper delay={0} className="w-full lg:w-1/3 max-w-md mx-auto">
          <blockquote className="twitter-tweet" data-theme="dark">
            <p lang="in" dir="ltr">
              New Year Plan 2025
              <a href="https://t.co/LeXx8pw7Yq"></a>
            </p>
            <a href="https://twitter.com/mmhtanim/status/1874347986450608597?ref_src=twsrc%5Etfw"></a>
          </blockquote>
        </AnimatedWrapper>

        <AnimatedWrapper
          delay={100}
          className="w-full lg:w-1/3 max-w-md mx-auto"
        >
          <blockquote className="twitter-tweet" data-theme="dark">
            <p lang="en" dir="ltr">
              I started doing the same on January 1, 2024, and haven&#39;t
              missed a single day since.
              <a href="https://twitter.com/hashtag/Consistency?src=hash&amp;ref_src=twsrc%5Etfw">
                #Consistency
              </a>{" "}
              <a href="https://twitter.com/hashtag/coding?src=hash&amp;ref_src=twsrc%5Etfw">
                #coding
              </a>{" "}
              <a href="https://twitter.com/hashtag/github?src=hash&amp;ref_src=twsrc%5Etfw">
                #github
              </a>{" "}
              <a href="https://t.co/HaRK34THWx">pic.twitter.com/HaRK34THWx</a>
            </p>
            &mdash; Mujibul Haque Tanim (@mmhtanim){" "}
            <a href="https://twitter.com/mmhtanim/status/1874438603746799715?ref_src=twsrc%5Etfw">
              January 1, 2025
            </a>
          </blockquote>
        </AnimatedWrapper>

        <AnimatedWrapper
          delay={200}
          className="w-full lg:w-1/3 max-w-md mx-auto"
        >
          <blockquote className="twitter-tweet" data-theme="dark">
            <p lang="en" dir="ltr">
              New Start <br />
              Over 800 tweets have been deleted from my timeline.
            </p>
            &mdash; Mujibul Haque Tanim (@mmhtanim){" "}
            <a href="https://twitter.com/mmhtanim/status/1871563219724275907?ref_src=twsrc%5Etfw">
              December 24, 2024
            </a>
          </blockquote>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
