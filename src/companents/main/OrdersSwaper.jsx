import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/glasses/img1.webp";
import img2 from "../../assets/glasses/img2.webp";
import img3 from "../../assets/glasses/img3.webp";
import img4 from "../../assets/glasses/img4.webp";
import img5 from "../../assets/glasses/img5.webp";
import img6 from "../../assets/glasses/img6.webp";
export default function OrdersSwaper() {
  return (
   
         <div className="WhenPressed-all">
      <div className="WhenPressed-block-1-img">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
      <div className="WhenPressed-block-bg">
        <Swiper
          style={{ width: "600px", height: "672px", zIndex: "0" }}
          className="banner-slider slider-banner"
          spaceBetween={0}
          loop={true}
        >
          <SwiperSlide className="slider-slide">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider-slide">
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider-slide">
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider-slide">
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider-slide">
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slider-slide">
            <img src={img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
