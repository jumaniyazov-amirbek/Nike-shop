import heart from "../assets/svg/heart.svg";
import clothes1 from "../assets/kiyim-image/4268151945_w640_h640_sportivnyj-kostyum-jordan.webp";
import clothes2 from "../assets/kiyim-image/4268151947_w640_h640_sportivnyj-kostyum-jordan.webp";
import clothes3 from "../assets/kiyim-image/4416382265_w640_h640_sportivnyj-kostyum-muzhskoj.webp";
import clothes4 from "../assets/kiyim-image/4418222546_w640_h640_sportivnyj-kostyum-muzhskoj.webp";
import clothes5 from "../assets/kiyim-image/4756535899_w640_h640_muzhskoj-sportivnyj-kostyum.webp";
import clothes6 from "../assets/kiyim-image/5737313928_w640_h640_hudi-belyj-.webp";
import clothes7 from "../assets/kiyim-image/nike.webp";
import clothes8 from "../assets/kiyim-image/TheNorthFace.webp";
import { Link } from "react-router-dom";
import cart from "../assets/svg/Cart.svg";
import { useState } from "react";

export default function Output() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: clothes1,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 2,
      image: clothes2,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 3,
      image: clothes3,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 4,
      image: clothes4,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 5,
      image: clothes5,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 6,
      image: clothes6,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 7,
      image: clothes7,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
    {
      id: 8,
      image: clothes8,
      name: "Nike air force 6",
      price: "$299,00",
      sellPrice: "$400,00 ",
      sale: "30% ",
      heartImg: cart,
    },
  ]);
  return (
    <div className="Product-all-product-1-block-all2">
          <div className="Product-all-titile">
          <h1>BEST SELLER</h1>
        </div>
        <div className="Product-all-link">
          <Link to="/">Glasses</Link>
        </div>
      <div className="Product-all-product-1-block-all">
        <div className="Product-all-product-1-block">
          {product.map((item) => (
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
                        <img src={item.heartImg} alt="" />
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
}
