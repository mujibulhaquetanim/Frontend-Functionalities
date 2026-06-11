import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { useState } from "react";

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

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    VanillaAmazon,
    instafeed,
    tinderClone,
    shopmart,
    aatbazar,
    CliProjectGo,
    YumDispatch,
    pharma,
    rawStripePayment,
    ComponentTesting,
  ];

  return (
    <div className="flex items-center justify-center p-4 h-full w-full">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={4}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 30,
          modifier: 3.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition-all ${
              activeIndex === index ? "border-4 border-slate-300" : ""
            }`}
          >
            <div className="w-full h-full aspect-[16/9]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}