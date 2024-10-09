import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./../css/homeSlider.css";

import { Autoplay, Pagination } from "swiper/modules";
function HomeSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./img/slider3.jpg" alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slider2.jpg" alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slider1.png" alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slider4.png" alt="slider4" />
        </SwiperSlide>
        <div className="custom-pagination"></div>
      </Swiper>
    </div>
  );
}

export default HomeSlider;
