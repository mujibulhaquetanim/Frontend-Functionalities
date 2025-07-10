import { useEffect, useState } from "react";

export default function Updates() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "");
    script.onload = () => setIsLoaded(true); // when Twitter finishes loading
    document.body.appendChild(script);
  }, []);

  return (
    <div className="border-2 m-3 border-slate-700/80 backdrop-blur-xl rounded-xl p-3 text-white flex items-center justify-center h-[calc(100vh-64px)] text-center text-5xl">
      {!isLoaded ? (
        <div className="animate-pulse text-xl text-slate-300">
          Loading tweet…
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <blockquote className="twitter-tweet">
            <p lang="in" dir="ltr">
              New Year Plan 2025
              <a href="https://t.co/LeXx8pw7Yq"></a>
            </p>
            <a href="https://twitter.com/mmhtanim/status/1874347986450608597?ref_src=twsrc%5Etfw"></a>
          </blockquote>

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
              <a href="https://t.co/HaRK34THWx">pic.twitter.com/HaRK34THWx</a>
            </p>
            &mdash; Mujibul Haque Tanim (@mmhtanim){" "}
            <a href="https://twitter.com/mmhtanim/status/1874438603746799715?ref_src=twsrc%5Etfw">
              January 1, 2025
            </a>
          </blockquote>

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
        </div>
      )}
    </div>
  );
}
