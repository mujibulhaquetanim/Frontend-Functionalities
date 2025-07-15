import React, { useEffect, useState } from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedWrapper({
  children,
  delay = 0,
  className = "", // Provide a default value
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  // Apply the passed className to the div
  return (
    <div className={`animated-wrapper ${isVisible ? "enter" : ""} ${className}`}>
      {children}
    </div>
  );
}