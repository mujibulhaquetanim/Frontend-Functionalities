import React, { useState } from "react";
import { useScrollAnimation } from "../../hook/use-scroll-animation";
import { useMediaQuery } from "../../hook/use-media-query";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  subDelay?: number;
  className?: string;
}

// Content must never wait long to appear; anything above this is clamped.
const MAX_DELAY_MS = 1200;

export default function AnimatedWrapper({
  children,
  delay = 0,
  subDelay, // no default as it is not passed in some components; only for mobile screen
  className = "",
}: AnimatedWrapperProps) {
  const { ref, isVisible } = useScrollAnimation();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );
  // Once the entrance finishes, drop the entrance styles so the delay and
  // transition don't leak into hover/focus transitions from `className`.
  const [settled, setSettled] = useState(false);

  const appliedDelay = prefersReducedMotion
    ? 0
    : Math.min(
        isLargeScreen
          ? delay // large screen → ignore subDelay
          : (subDelay ?? delay), // mobile → use subDelay if provided, else fallback to delay
        MAX_DELAY_MS,
      );

  if (settled || prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`animated-wrapper ${isVisible ? "enter" : ""} ${className}`}
      style={{ transitionDelay: `${appliedDelay}ms` }}
      onTransitionEnd={(e) => {
        if (
          isVisible &&
          e.target === e.currentTarget &&
          e.propertyName === "transform"
        ) {
          setSettled(true);
        }
      }}
    >
      {children}
    </div>
  );
}
