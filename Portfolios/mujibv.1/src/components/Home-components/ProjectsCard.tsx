import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { useReducedMotion } from "framer-motion";

import zasmate from "/zasmate.png";
import VanillaAmazon from "/VanillaAmazon.png";
import YumDispatch from "/YumDispatch.png";
import rawStripePayment from "/rawStripePayment.png";
import ComponentTesting from "/ComponentTesting.png";
import CliProjectGo from "/CliProjectGo.png";
import instafeed from "/instafeed.gif";
import tinderClone from "/tinderClone.gif";
import aatbazar from "/aatbazar.png";
import shopmart from "/shopmart.png";
import pharma from "/pharma.png";

const slides = [
  { src: zasmate, title: "Zasmate" },
  { src: VanillaAmazon, title: "Vanilla Amazon" },
  { src: instafeed, title: "ScrollFeed" },
  { src: tinderClone, title: "Tinder Clone" },
  { src: shopmart, title: "Shopmart" },
  { src: aatbazar, title: "AatBaazar" },
  { src: CliProjectGo, title: "Go CLI project" },
  { src: YumDispatch, title: "YumDispatch" },
  { src: pharma, title: "PharmaCMS" },
  { src: rawStripePayment, title: "Raw Stripe payment" },
  { src: ComponentTesting, title: "Component testing" },
];

export default function ProjectsCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex items-center justify-center p-4 lg:p-3 h-full w-full">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 30,
          modifier: 3.5,
          slideShadows: true,
        }}
        autoplay={
          reduceMotion
            ? false
            : {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full"
      >
        {slides.map(({ src, title }) => (
          <SwiperSlide
            key={title}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            {({ isActive }) => (
              <div className="relative w-full h-full aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={src}
                  alt={`${title} screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover bg-slate-800"
                />
                {/* Active frame sits above the image so the inset ring isn't covered */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 rounded-xl ring-inset ring-slate-300 transition-[box-shadow] duration-500 ease-out-expo ${
                    isActive ? "ring-4" : "ring-0"
                  }`}
                />
                <span
                  className={`absolute bottom-2 left-2 rounded-md bg-slate-900/80 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-500 ease-out-expo ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                >
                  {title}
                </span>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
