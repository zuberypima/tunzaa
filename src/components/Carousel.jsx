import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import {
  slide5,
  slide1,
  slide2,
  slide3,
  slide4,
  screen1,
  screen3,
  screen2,
} from "../assets/images";

// Import Swiper styles
// swiper bundle styles
import "swiper/css/bundle";

// swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./carousel.css";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
const Carousel = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-5 sm:grid-cols-2 ">
      <div className="lg:w-80  lg:relative sm:text-center sm:relative sm:w-full ">
        <p class="text-3xl lg:text-start text-white lg:absolute lg:bottom-40 lg:pl-10 md:text-center sm:text-center ">
          Tiny payments to empower everyday Africans
        </p>
      </div>

      <div className="lg:flex  lg:justify-end  lg:item-end  ">
        <img class="lg:relative top-8  lg:w-1/2 pt-10 pb-5 sm:w-1/4" src={screen1} alt="" />
        <img class="lg:w-1/2 sm:w-1/4 " src={screen2} alt="" />
        <img class="lg:relative top-8  lg:w-1/2 pt-10 pb-5 sm:w-1/4" src={screen3} alt="" />
      </div>
    </div>
  );
  {
  }
};

export default Carousel;
