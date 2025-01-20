import { Link } from "react-router";

const Frontend = () => {
  // Simulating fetched data without layout-specific classes.
  const images = [
    { src: "/YumDispatch.png", alt: "YumDispatch" },
    { src: "/rawStripePayment.png", alt: "rawStripePayment" },
    { src: "/UITesting.png", alt: "UITesting" },
    { src: "/VanillaAmazon.png", alt: "VanillaAmazon" },
    { src: "/ClientProject.png", alt: "ClientProject" },
    { src: "/ComponentTesting.png", alt: "ComponentTesting" },
    { src: "/RawTw.png", alt: "RawTw" },
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
    "https://yumdispatchbd.netlify.app/",
    "https://github.com/mujibulhaquetanim/Backend-Functionalities/tree/main/Payment%20Gateways/Stripe/One-time%20Payment",
    "https://third-party-ui.netlify.app/",
    "https://vanilla-amazon.netlify.app/",
    "https://github.com/KRShanto/memorica",
    "https://tw-react-components.netlify.app/",
    "https://tw-projects.netlify.app/",
  ];

  // Mapping images and layout classes to create grid. hardcoded classes.
  return (
    <div className="w-full">
      <div className="grid w-full gap-4 auto-rows-[minmax(3.3rem,auto)] grid-cols-12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl bg-indigo-400 ${layoutClasses[index]}`}
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
