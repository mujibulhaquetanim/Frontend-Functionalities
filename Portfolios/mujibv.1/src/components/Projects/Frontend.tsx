import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

type Project = {
  src: string;
  alt: string;
  link: string;
  layout: string;
};

function LazyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setImageSrc(src);
        observer.disconnect();
      },
      {
        rootMargin: "200px",
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export default function Frontend() {
  const projects: Project[] = [
    {
      src: "/shopmart.gif",
      alt: "Ecomm with dashboard",
      link: "https://shopmart.mujibulhaquetanim.dev/",
      layout:
        "col-span-12 row-span-6 md:col-span-6 md:row-span-8 lg:col-span-4 lg:row-span-8",
    },
    {
      src: "/pharmacms.gif",
      alt: "Pharma CMS",
      link: "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Payment%20Gateways/Stripe/One-time%20Payment",
      layout:
        "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
    },
    {
      src: "/aatbaazar.gif",
      alt: "ClientProject",
      link: "https://aat-baazar.mujibulhaquetanim.dev/",
      layout:
        "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    },
    {
      src: "/vanillaamazon.gif",
      alt: "VanillaAmazon",
      link: "https://github.com/mujibulhaquetanim/Frontend-Functionalities/tree/main/E-commerce/Amazon-vanilajs",
      layout:
        "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    },
    {
      src: "/instafeed.gif",
      alt: "instafeed",
      link: "https://instafeed.netlify.app/",
      layout:
        "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    },
    {
      src: "/YumDispatch.png",
      alt: "YumDispatch",
      link: "https://yumdispatchbd.netlify.app/",
      layout:
        "col-span-12 row-span-3 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4",
    },
    {
      src: "/reelclone.gif",
      alt: "reelclone",
      link: "https://reelclone.netlify.app/",
      layout:
        "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
    },
  ];

  return (
    <div className="w-full px-4 py-2 lg:p-2">
      <div className="grid w-full grid-cols-12 gap-4 auto-rows-[minmax(3.3rem,auto)]">
        {projects.map((project) => (
          <div
            key={project.alt}
            className={`relative overflow-hidden rounded-2xl bg-slate-700 ${project.layout}`}
          >
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <LazyImage
                src={project.src}
                alt={project.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
