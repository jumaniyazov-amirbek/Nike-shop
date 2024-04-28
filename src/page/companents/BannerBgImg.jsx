import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import bg from "../../assets/images/2fb597b08532ba13f43e168e61ac03063c7035cc-1070x760.jpg";
import BannerBg from "../../assets/images/How_to_spot_fake_Nike_Air_Force_1_Low_White_Sneakers_1024x1024.webp";
import bgg from "../../assets/images/235993291.webp";
export default function BannerBgImg() {
  return (
    <Swiper
      className="banner-slider slider-banner"
      spaceBetween={0}
      loop={true}
    >
      <SwiperSlide className="slider-slide">
        <img src={BannerBg} alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <img src={bg} alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <img src={bgg} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
