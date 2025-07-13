import React, { useEffect, useState } from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number; // optional delay in ms
}

export default function AnimatedWrapper({ children, delay = 0 }: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`animated-wrapper ${isVisible ? "enter" : ""}`}>
      {children}
    </div>
  );
}
