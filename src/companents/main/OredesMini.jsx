import React, { useState } from "react";
import Frame from "../../assets/images/Frame.png";
import img3 from "../../assets/GlassesImg/Frame (4).png";
import img1 from "../../assets/glasses/img1.webp";
import img2 from "../../assets/kiyim-image/nike.webp";
export default function OredesMini() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: img1,
      name: "Nike air force 1",
      price: "$ 799.00",
    },
    {
      id: 2,
      image: img2,
      name: "Nike clothes",
      price: "$ 1.000",
    },
    {
      id: 3,
      image: img3,
      name: "Nike jordan 1",
      price: "$ 599.00",
      about: "Men's Short-Sleeve Running Top",
      about1: "Ashen Slate/Cobalt Bliss",
    },
  ]);
  return (
    <div className="oreders-mini-all" >
      {product.map((item) => (
        <div className="Oredes-praduck-block" key={item.id}>
          <div className="Oredes-praduck-block-img">
            <img src={item.image} alt="" />
          </div>
          <div className="Oredes-praduck-block-text">
            <div className="Oredes-praduck-block-text-mini">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <p>{item.about}</p>
            <p>{item.about1}</p>
            <div className="Oredes-praduck-block-text-minii">
              Size
              <select>
                <option>L</option>
                <option>M</option>
                <option>XL</option>
                <option>XXL</option>
                <option>XXXL</option>
                <option>XXXXL</option>
              </select>
            </div>
            <div className="Oredes-praduck-block-text-mini-imgg">
              <img
                className="Oredes-praduck-block-text-mini-img"
                src={Frame}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
