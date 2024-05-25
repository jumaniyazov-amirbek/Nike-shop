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



// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import cart from "../../assets/svg/Cart.svg";

// const BannerBgImg = () => {
//   const [data, setData] = useState([]);

//   const url = "https://3d6af63b73d1ffb5.mokky.dev/baner-bg";

//   useEffect(() => {
//     axios.get(url).then((res) => setData(res.data));
//   }, []);

//   const onAdd = (product) => {
//     addBasket(product);
//   };

//   return (
//     <div id="kartoshka" className="bg-[#F6F8F9]">
//       {data.map((product) => (
//         <Swiper
//           className="banner-slider slider-banner"
//           spaceBetween={0}
//           loop={true}
//         >
//           <SwiperSlide className="slider-slide">
//             <div className="Product-all-product-1-block-mini-bgg-img">
//               <img src={product.img} alt="" />
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       ))}
//     </div>
//   );
// };

// export default BannerBgImg;
