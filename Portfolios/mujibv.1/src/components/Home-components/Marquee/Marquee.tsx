import React from 'react';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className = '',
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: Readonly<MarqueeProps>) {
  const baseClass =
    'group flex overflow-hidden p-2 [--duration:40s] [--gap:2rem] [gap:var(--gap)]';
  const flexDirectionClass = vertical ? 'flex-col' : 'flex-row';
  const combinedClass = `${baseClass} ${flexDirectionClass} ${className}`;

  return (
    <div {...props} className={combinedClass}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => {
          const childBaseClass =
            'flex shrink-0 justify-around [gap:var(--gap)] motion-reduce:animate-none';
          const childDirectionClass = vertical
            ? 'animate-marquee-vertical flex-col'
            : 'animate-marquee flex-row';
          const childPauseClass = pauseOnHover
            ? 'group-hover:[animation-play-state:paused]'
            : '';
          const childReverseClass = reverse ? '[animation-direction:reverse]' : '';
          const childClass = `${childBaseClass} ${childDirectionClass} ${childPauseClass} ${childReverseClass}`;

          return (
            <div key={i} className={childClass}>
              {children}
            </div>
          );
        })}
    </div>
  );
}
