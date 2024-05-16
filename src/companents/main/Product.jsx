import { useState } from "react";
import ProductMini from "./ProductMini.jsx";
import { Link } from "react-router-dom";
import OredesMenu from "./OrdersMenu.jsx";
import PraductRight from "./PraductRight.jsx";

export default function Product() {
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
      <div id="product" className="Product-all">
        <div className="Product-all-titile">
          <h1>BEST SELLER</h1>
        </div>

        <div className="Product-all-link">
          <Link to="/product">Glasses</Link>
          <Link to="/output">Clothes</Link>
        </div>
        <div className="Product-all-product-all">
          <ProductMini />
          <div className="Product-all-product-all-btn">
            <Link to="/PraductLeft"></Link>

            <div className="new-praduct">
              <button className="new-praduct-button" onClick={menu}>+</button>
              <div className={burger ? "blok" : "none"}>
                <div className="fuck">
                  <PraductRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
