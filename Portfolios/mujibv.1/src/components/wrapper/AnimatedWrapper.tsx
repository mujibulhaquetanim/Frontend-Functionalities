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
  subDelay,
  className = "",
}: AnimatedWrapperProps) {
  const { ref, isVisible } = useScrollAnimation();
  const isLargerScreen = useMediaQuery("(max-width: 1024px)");

  const appliedDelay = isLargerScreen ? delay : subDelay ?? delay;

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
