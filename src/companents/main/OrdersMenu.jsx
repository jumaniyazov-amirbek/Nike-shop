import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function OredesMenu() {
  const [data, setData] = useState([]);

  const url = "https://128de5c23d00ef14.mokky.dev/BasketApi";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
  };
  const updateCount = (id, delta) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, count: Math.max(1, product.count + delta) }
          : product
      )
    );
  };
  return (
    <div className="OredesMENU">
      {data.map((product) => (
        <div className="ordesMiniBlock-all" key={product.id}>
          <div className="ordesMiniBlock">
            <div className="img-text">
              <img className="imgMini" src={product.image} alt="" />
              <p>{product.name}</p>
            </div>
            <div className="orders-text">
              <div className="counter">
                <button
                  className="counter-button"
                  onClick={() => updateCount(product.id, -1)}
                >
                  <h1>-</h1>
                </button>
                <span className="counter-text">{product.count}</span>
                <button
                  onClick={() => updateCount(product.id, 1)}
                  className="counter-button"
                >
                  <h1>+</h1>
                </button>
              </div>
              <Link to="/orders">
                <button className="txt-btn">Order</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
