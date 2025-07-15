import React from "react";
import { useScrollAnimation } from "../../hook/use-scroll-animation";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedWrapper({
  children,
  delay = 0,
  className = "",
}: AnimatedWrapperProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animated-wrapper ${isVisible ? "enter" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
