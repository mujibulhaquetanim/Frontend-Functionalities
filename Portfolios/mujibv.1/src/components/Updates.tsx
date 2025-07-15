import { useEffect, useState } from "react";
import AnimatedWrapper from "./wrapper/AnimatedWrapper";

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

export default function Updates() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.twttr) {
      // Inject the script only if Twitter is not already loaded
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
          window.twttr?.widgets?.load();
        }, 100);
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, just trigger a widget reload
      window.twttr.widgets.load();
      setIsLoaded(true);
    }
  }, []); // No dependency — just run once

  return (
    <div className="border-2 m-3 border-slate-700/80 backdrop-blur-xl rounded-xl text-white flex flex-col lg:flex-row items-center justify-center text-center min-h-screen overflow-x-hidden lg:overflow-hidden">
      {!isLoaded ? (
        <div className="animate-pulse text-xl text-slate-300 p-6">
          Loading tweet…
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:h-screen lg:items-start lg:justify-center gap-6 w-full overflow-y-auto lg:overflow-y-hidden p-4">
          <AnimatedWrapper delay={100}>
            <AnimatedWrapper delay={1500} className="w-full lg:w-1/3 max-w-md">
              <blockquote className="twitter-tweet">
                <p lang="in" dir="ltr">
                  New Year Plan 2025
                  <a href="https://t.co/LeXx8pw7Yq"></a>
                </p>
                <a href="https://twitter.com/mmhtanim/status/1874347986450608597?ref_src=twsrc%5Etfw"></a>
              </blockquote>
            </AnimatedWrapper>
          </AnimatedWrapper>

          <AnimatedWrapper delay={200}>
            <AnimatedWrapper delay={2000} className="w-full lg:w-1/3 max-w-md">
              <blockquote className="twitter-tweet">
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
                  <a href="https://t.co/HaRK34THWx">
                    pic.twitter.com/HaRK34THWx
                  </a>
                </p>
                &mdash; Mujibul Haque Tanim (@mmhtanim){" "}
                <a href="https://twitter.com/mmhtanim/status/1874438603746799715?ref_src=twsrc%5Etfw">
                  January 1, 2025
                </a>
              </blockquote>
            </AnimatedWrapper>
          </AnimatedWrapper>

          <AnimatedWrapper delay={300}>
            <AnimatedWrapper delay={2500} className="w-full lg:w-1/3 max-w-md">
              <blockquote className="twitter-tweet">
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
          </AnimatedWrapper>
        </div>
      )}
    </div>
  );
}
