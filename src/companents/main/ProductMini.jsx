import React, { useState } from "react";
import glasses1 from "../../assets/images/0152890_nike-air-force-1-07-fq8201-100.webp";
import glasses2 from "../../assets/GlassesImg/glases2.webp";
import glasses3 from "../../assets/images/0169903_nike-dunk-low-fz4618-001.webp";
import glasses4 from "../../assets/GlassesImg/glases7.webp";
import glasses5 from "../../assets/GlassesImg/glases6.webp";
import glasses6 from "../../assets/images/0155276_nike-dunk-low-fv0384-001.webp";
import glasses7 from "../../assets/GlassesImg/glases8.webp";
import glasses8 from "../../assets/images/0153517_nike-air-dunk-jumbo-dv0821-002.webp";
import { Link } from "react-router-dom";
import heart from "../../assets/svg/heart.svg";
import Heart from "./Heart.jsx";

export default function ProductMini() {
  const [burger, setBurger] = useState(false);

  function menu() {
    if (burger == true) {
      setBurger(false);
    }
    if (burger == false) {
      setBurger(true);
    }
  }
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
      },])
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
                   <Heart/>
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
