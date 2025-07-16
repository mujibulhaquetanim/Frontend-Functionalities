import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query); //returns a media query list. it has properties like matches, onchange and other methods

    const listener = () => setMatches(media.matches);
    listener(); // Check initial state

    media.addEventListener("change", listener); // triggers when the media query changes

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
