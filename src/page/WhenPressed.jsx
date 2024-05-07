import React from 'react'
import img1 from '../assets/glasses/img1.webp'
import img2 from '../assets/glasses/img2.webp'
import img3 from '../assets/glasses/img3.webp'
import img4 from '../assets/glasses/img4.webp'
import img5 from '../assets/glasses/img5.webp'
import img6 from '../assets/glasses/img6.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function WhenPressed() {
    return (
        <div className='WhenPressed-all'>
            <div className="WhenPressed-block-1-img">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
            <div className="WhenPressed-block-bg">

                <Swiper style={{width: '600px', height: '672px'}}
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
            <div className="WhenPressed-block-aboutozi">
                <h1>Nike Air Force 1 07</h1>
                <h2>erkek low-top sneaker</h2>
                <h3>4699,00 TL</h3>
                <img src={img1} alt="" />
                <select>
                    <option>Sootnoshenie</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                </select>
               
                <Link to="/orders"><button className='buttton'>Oreder</button></Link>
                <div className="WhenPressed-about">
                    <h2>Nike Air Force 1 07 about</h2>
                    <div className="pp">   <p>Marka : Nike</p>
                        <p> Cinsiyet : Erkek</p>
                        <p>Renk : Beyaz</p>

                        <p>  Özellik : Konforlu air taban, konforlu taban</p>                        Model Bilgisi : Low-top
                        <p> Ürün Ad: Nike Air Force 1 07</p></div>
                </div>
            </div>
        </div>
    )
}
