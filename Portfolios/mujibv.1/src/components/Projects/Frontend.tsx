import { Link } from "react-router";

const Frontend = () => {
  // Simulating fetched data without layout-specific classes.
  const images = [
    { src: "/shopmart.gif", alt: "Ecomm with dashboard" },
    { src: "/pharmacms.gif", alt: "Pharma CMS" },
    { src: "/aatbaazar.gif", alt: "ClientProject" },
    { src: "/vanillaamazon.gif", alt: "VanillaAmazon" },
    { src: "/instafeed.gif", alt: "instafeed" },
    { src: "/YumDispatch.png", alt: "YumDispatch" },
    { src: "/reelclone.gif", alt: "reelclone" },
  ];

  // Defined layout classes separately, hardcoded for now.
  const layoutClasses = [
    "col-span-12 row-span-6 md:col-span-6 md:row-span-8 lg:col-span-4 lg:row-span-8",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    "col-span-12 row-span-4 md:col-span-6 md:row-span-5 lg:col-span-4 lg:row-span-6",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4",
    "col-span-12 row-span-3 md:col-span-6 md:row-span-3 lg:col-span-4 lg:row-span-3",
  ];

  const links = [
    "https://shopmart.mujibulhaquetanim.dev/",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Payment%20Gateways/Stripe/One-time%20Payment",
    "https://aat-baazar.mujibulhaquetanim.dev/",
    "https://github.com/mujibulhaquetanim/Frontend-Functionalities/tree/main/E-commerce/Amazon-vanilajs",
    "https://instafeed.netlify.app/",
    "https://yumdispatchbd.netlify.app/",
    "https://reelclone.netlify.app/",
  ];

  // Mapping images and layout classes to create grid. hardcoded classes.
  return (
    <div className="w-full px-4 py-2 lg:p-2">
      <div className="grid w-full gap-4 auto-rows-[minmax(3.3rem,auto)] grid-cols-12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl bg-slate-600 ${layoutClasses[index]}`}
          >
            <Link
              to={links[index]}
              target="_blank"
              className="absolute inset-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
