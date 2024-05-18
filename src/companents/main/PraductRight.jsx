import React, { useState } from 'react'
import PraductRightMini from '../main/PraductRightMini.jsx';
import PraductRightMini2 from './PraductRightMini2.jsx';
export default function PraductRight() {
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
        <div className="continer">
            <div className="Product-all">
                <div className="Product-all-titile">
                </div>


                <div className="Product-all-product-all">
                    <PraductRightMini />
                    <div className="Product-all-product-all-btn">


                    </div>
                </div>
                
            </div>
            <div className="new-praduct">
              <button className="new-praduct-button" onClick={menu}>+</button>
              <div className={burger ? "blok" : "none"}>
                <div className="fuck">
                <PraductRightMini2 />
                </div>
              </div>
            </div>
        </div>
    )
}
