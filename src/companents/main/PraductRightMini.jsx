import React, { useState } from "react";
import glasses1 from "../../assets/GlassesImg/Frame (2).png";
import glasses2 from "../../assets/GlassesImg/Frame (3).png";
import glasses3 from "../../assets/GlassesImg/Frame (4).png";
import glasses4 from "../../assets/GlassesImg/Frame (5).png";
import glasses5 from "../../assets/GlassesImg/Image (1).png";
import glasses6 from "../../assets/GlassesImg/Image (2).png";
import glasses7 from "../../assets/GlassesImg/Image (3).png";
import glasses8 from "../../assets/GlassesImg/Image.png";
import { Link } from "react-router-dom";
import cart from '../../assets/svg/Cart.svg'
import heart from "../../assets/svg/heart.svg";
export default function PraductRightMini() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: glasses1,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 2,
      image: glasses2,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 3,
      image: glasses3,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 4,
      image: glasses4,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 5,
      image: glasses5,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 6,
      image: glasses6,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
        id: 7,
        image: glasses7,
        name: "Nike air force 6",
        price: "$299,00",
        sellPrice: "$400,00 ",
        sale: "30% ",
      },
      {
        id: 8,
        image: glasses8,
        name: "Nike air force 6",
        price: "$299,00",
        sellPrice: "$400,00 ",
        sale: "30% ",
      },
  ]);

  return (
    <div className="Product-all-product-1-block-all">
      <div className="Product-all-product-1-block">
        {product.map(item => (
          <Link key={item.id} to="/WhenPressed">
            <div className="Product-all-product-1-block-mini" key={item.id}>
              <div className="imgs">
                <img src={item.image} alt="" />
              </div>
              <div className="Product-all-product-1-block-mini-text-all">
                <div className="Product-all-product-1-block-mini-text">
                  <p>{item.name}</p>
                </div>

                <div className="Product-all-product-1-block-mini-price">
                  <h2>{item.price}</h2>

                  <p>
                    {item.sellPrice} / <span>{item.sale} Off</span>
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
  );
}
