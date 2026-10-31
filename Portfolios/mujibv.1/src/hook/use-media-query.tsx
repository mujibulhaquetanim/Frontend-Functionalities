import { useEffect, useState } from "react";

function getMatches(query: string): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
  // Read synchronously so the first render already uses the right value
  // (otherwise desktop briefly renders with the mobile branch).
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia(query); //returns a media query list. it has properties like matches, onchange and other methods

    const listener = () => setMatches(media.matches);
    listener(); // Check initial state

    media.addEventListener("change", listener); // triggers when the media query changes

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
