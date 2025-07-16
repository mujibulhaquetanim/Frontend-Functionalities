import React from "react";
import { useScrollAnimation } from "../../hook/use-scroll-animation";
import { useMediaQuery } from "../../hook/use-media-query";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  subDelay?: number;
  className?: string;
}

export default function AnimatedWrapper({
  children,
  delay = 0,
  subDelay, // no default as it is not passed in some components; only for mobile screen
  className = "",
}: AnimatedWrapperProps) {
  const { ref, isVisible } = useScrollAnimation();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const appliedDelay = isLargeScreen
    ? delay // large screen → ignore subDelay
    : subDelay ?? delay; // mobile → use subDelay if provided, else fallback to delay

  return (
    <div
      ref={ref}
      className={`animated-wrapper ${isVisible ? "enter" : ""} ${className}`}
      style={{ transitionDelay: `${appliedDelay}ms` }}
    >
      {children}
    </div>
  );
}
