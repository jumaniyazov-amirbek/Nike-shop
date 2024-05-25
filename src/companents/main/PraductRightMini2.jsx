import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/svg/Cart.svg";

const PraductRightMini2 = () => {
  const [data, setData] = useState([]);

  const url = "https://128de5c23d00ef14.mokky.dev/products";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
  };

  return (
    <div id="kartoshka" className="bg-[#F6F8F9]">
      <div className="Product-all-product-1-block-all">
        <div className="Product-all-product-1-block">
          {data.map((product) => (
            <Link to="/WhenPressed">
              <div
                className="Product-all-product-1-block-mini"
                key={product.id}
              >
               <div className="Product-all-product-1-block-mini-bgg-img">
                     <img src={product.img} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>{product.name}</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>{product.price}</h2>

                    <p>
                      {product.sellPrice} / <span>{product.sale} Off</span>
                    </p>
                    <Link to="/orders">
                      <div className="heart-block">
                        <img src={cart} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PraductRightMini2;
