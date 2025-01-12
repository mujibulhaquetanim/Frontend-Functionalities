import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useState } from "react";
import RawTw from "/RawTw.png";
import VanillaAmazon from "/VanillaAmazon.png";
import ClientProject from "/ClientProject.png";
import YumDispatch from "/YumDispatch.png";
import rawStripePayment from "/rawStripePayment.png";
import ComponentTesting from "/ComponentTesting.png";
import UITesting from "/UITesting.png";
import CliProjectGo from "/CliProjectGo.png";
import BackendFuncs from "/BackendFuncs.png";
import GoBackEnd from "/GoBackEnd.png";

export default function ProjectsCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    VanillaAmazon,
    ClientProject,
    YumDispatch,
    rawStripePayment,
    ComponentTesting,
    RawTw,
    UITesting,
    CliProjectGo,
    BackendFuncs,
    GoBackEnd,
  ];

  return (
    <div className="flex items-center justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 25,
          modifier: 3.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition-all ${
              activeIndex === index ? "border-4 border-green-700" : ""
            }`}
          >
            <div className="w-full h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
