import { useState } from "react";
import img1 from "../../assets/glasses/img1.webp";
import img2 from "../../assets/GlassesImg/Image (2).png";
import img4 from "../../assets/images/0158067_nike-dunk-low-fj5429-133.webp";
import img5 from "../../assets/images/0153517_nike-air-dunk-jumbo-dv0821-002.webp";
import img3 from "../../assets/kiyim-image/nike.webp";
import img6 from "../../assets/GlassesImg/Frame (4).png";
import { Link } from "react-router-dom";

export default function OredesMenu() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: img1,
      name: "Nike air force 1",
      count: 1,
    },
    {
      id: 2,
      image: img2,
      name: "Nike jordan 1",
      count: 1,
    },
    {
      id: 3,
      image: img3,
      name: "Nike clothes",
      count: 1,
    },
    {
      id: 4,
      image: img4,
      name: "Nike air force red",
      count: 1,
    },
    {
      id: 5,
      image: img5,
      name: "Nike air white",
      count: 1,
    },
    {
      id: 6,
      image: img6,
      name: "Nike jordan 1",
      count: 1,
    },
  ]);

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
      {products.map((item) => (
        <div className="ordesMiniBlock-all" key={item.id}>
          <div className="ordesMiniBlock">
            <div className="img-text">
              <img className="imgMini" src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
            <div className="orders-text">
              <div className="counter">
                <button
                  className="counter-button"
                  onClick={() => updateCount(item.id, -1)}
                >
                  <h1>-</h1>
                </button>
                <span className="counter-text">{item.count}</span>
                <button
                  onClick={() => updateCount(item.id, 1)}
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
