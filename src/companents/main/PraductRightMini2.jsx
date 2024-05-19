import React, { useState } from "react";
import glasses1 from "../../assets/images/0171318_nike-court-vision-lo-nn-dh2987-111.webp";
import glasses2 from "../../assets/GlassesImg/glases1.webp";
import glasses3 from "../../assets/images/0158067_nike-dunk-low-fj5429-133.webp";
import glasses4 from "../../assets/GlassesImg/glases4.webp";
import glasses5 from "../../assets/GlassesImg/glases5.webp";
import glasses6 from "../../assets/images/0164107_nike-dunk-low-fv6909-800.webp";
import glasses7 from "../../assets/GlassesImg/glases3.webp";
import glasses8 from "../../assets/images/0170288_nike-air-dunk-low-jumbo-fj4192-001.webp";
import { Link } from "react-router-dom";
import cart from '../../assets/svg/Cart.svg'
import heart from "../../assets/svg/heart.svg";
export default function PraductRightMini2() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: glasses1,
      name: "Jordan Air 1 Mid ",
      price: "$399,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 2,
      image: glasses2,
      name: "Jordan Air 1 Mid ",
      price: "$199,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 3,
      image: glasses3,
      name: "Jordan Air 1 Mid ",
      price: "$499,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 4,
      image: glasses4,
      name: "Jordan Air 1 Mid ",
      price: "$699,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 5,
      image: glasses5,
      name: "Jordan Air 1 Mid ",
      price: "$300,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 6,
      image: glasses6,
      name: "Jordan Air 1 Mid ",
      price: "$100,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 7,
      image: glasses7,
      name: "Jordan Air 1 Mid ",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
    },
    {
      id: 8,
      image: glasses8,
      name: "Jordan Air 1 Mid ",
      price: "$199,00",
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
                  <div className="heart-block">
                  <img src={cart} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
