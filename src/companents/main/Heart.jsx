import React, { useState } from 'react'
import heart from "../../assets/svg/heart.svg";
export default function Heart() {
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
    <div>
      <div className="heart">
        <button className='heart-img' onClick={menu}>
        <img src={heart} alt="" />
        </button>
        <div className={burger ? "blok" : "none"}>
          <div className="heart-cursor">
          <img src={heart} alt="" />
          </div>
        </div>
      </div></div>
  )
}
