import { useEffect, useState, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Old browsers / some webviews: never leave content stuck at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        // Start a little before the element enters so it's settled by the time it's read.
        rootMargin: "0px 0px -5% 0px",
        threshold: 0.05,
      },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
