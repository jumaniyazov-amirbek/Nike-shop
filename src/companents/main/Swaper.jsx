import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function Swaper() {
  return (
    <div>
                <Swiper style={{width: '600px', height: '672px', zIndex:'0'}}
                    className="banner-slider slider-banner"
                    spaceBetween={0}
                    loop={true}>
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
  )
}
