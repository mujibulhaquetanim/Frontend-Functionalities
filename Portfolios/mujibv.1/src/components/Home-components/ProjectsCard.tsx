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
    <div className="flex items-center justify-center p-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={4} // Default slides per view
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
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
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
            <div className="w-full h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className="w-full h-56 md:h-40 object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
