import { useState } from "react";
import { ImageOff } from "lucide-react";

// Native lazy loading + a shimmer until decoded, and a readable fallback if the file is missing.
export function LazyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  if (status === "error") {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-800 text-slate-400"
      >
        <ImageOff aria-hidden className="size-6" />
        <span className="px-3 text-center text-xs">{alt}</span>
      </div>
    );
  }

  return (
    <>
      {status === "loading" && (
        <div aria-hidden className="absolute inset-0 animate-git-shimmer" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={`${className ?? ""} transition-[opacity,transform] duration-500 ease-out-expo ${
          status === "loaded" ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
