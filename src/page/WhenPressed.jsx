import React, { useState } from 'react'
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
import x from "../assets/svg/x.svg";
export default function WhenPressed() {
  const [activeBtn, setActiveBtn] = useState(null);
  const [results, setResults] = useState("");

  const handleClick = (value) => {
    setActiveBtn(value);
    setResults(value);
  }; 
  const [burger, setBurger] = useState(false);

  function menu() {
    if (burger == true) {
      setBurger(false);
    }
    if (burger == false) {
      setBurger(true);
    }
  }
  return (
        <div className='WhenPressed-all'>  <div className="WhenPressed-block-1-img">
           <div id="test">
      <div className="btn-group" role="group">
        <button
          className={`btn ${activeBtn === "img1.webp" ? "btn-primary" : "btn-grey"}`}
          type="button"
          value="img1.webp"
          onClick={() => handleClick(<img className='imges' src={img1} alt="" />)}
        >
        <img className='imges' src={img1} alt="" />
        </button>
        <button
          className={`btn ${activeBtn === "img1.webp" ? "btn-primary" : "btn-grey"}`}
          type="button"
          value="img1.webp"
          onClick={() => handleClick(<img className='imges' src={img2} alt="" />)}
        >
        <img className='imges' src={img2} alt="" />
        </button>
        <button
          className={`btn ${activeBtn === "img1.webp" ? "btn-primary" : "btn-grey"}`}
          type="button"
          value="img1.webp"
          onClick={() => handleClick(<img className='imges' src={img3} alt="" />)}
        >
        <img className='imges' src={img3} alt="" />
        </button>
        <button
          className={`btn ${activeBtn === "img1.webp" ? "btn-primary" : "btn-grey"}`}
          type="button"
          value="img1.webp"
          onClick={() => handleClick(<img className='imges' src={img4} alt="" />)}
        >
        <img className='imges' src={img4} alt="" />
        </button>
        <button
          className={`btn ${activeBtn === "img1.webp" ? "btn-primary" : "btn-grey"}`}
          type="button"
          value="img1.webp"
          onClick={() => handleClick(<img className='imges' src={img5} alt="" />)}
        >
        <img className='imges' src={img5} alt="" />
        </button>
        <button
          className={`btn ${activeBtn === "img1.webp" ? "btn-primary" : "btn-grey"}`}
          type="button"
          value="img1.webp"
          onClick={() => handleClick(<img className='imges' src={img6} alt="" />)}
        >
        <img className='imges' src={img6} alt="" />
        </button>
      </div>
      <div className='results' id="results">{results}</div>
    </div>
 </div>
          
                
 {/* <div className="rezultat-all">
        <button className='onciliker' onClick={menu}>
        <img src={img6} alt="" />
        </button>
        <div className={burger ?  "blok" : "none"}>
          <div className="rezultat">
          <button className='onciliker' onClick={menu}>
        <img src={x} alt="" />
        </button>
          </div>
        </div>
      </div>
            */}
            <div className="WhenPressed-block-bg">

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
            <div className="WhenPressed-block-aboutozi">
                <h1>Nike Air Force 1 07</h1>
                <h2>erkek low-top sneaker</h2>
                <h3>4699,00 TL</h3>
                <img src={img1} alt="" />

               
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
