import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BannerBg from "../../assets/GlassesImg/25154f0b1870cfbdd92a7f59e9bf1e52e494dccc.webp";
import bg from "../../assets/glasses/jordin.jpg";
import bgg from "../../assets/glasses/Nike_Air_Force_1_07_Low_Obsidian_Black_Grey_GI2366-012.jpg";
export default function BannerBgImg() {
  return (
    <Swiper
      className="banner-slider slider-banner"
      spaceBetween={0}
      loop={true}
    >
      <SwiperSlide className="slider-slide">
        <img src={bgg} alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <img src={BannerBg} alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <img src={bg} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
