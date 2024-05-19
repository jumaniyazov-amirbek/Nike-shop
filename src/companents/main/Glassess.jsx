import glassess1 from "../../assets/images/0126756_nike-wmns-air-force-1-07-dd8959-100.webp";
import glassess2 from "../../assets/images/0173433_nike-air-force-1-07-fz4617-001.webp";
import glassess3 from "../../assets/images/0125847_nike-court-vision-lo-nn-dh2987-101.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Glassess() {
  const [product, setProduct] = useState([
    {
      id: 1,
      image: glassess2,
      name: "nike air force 5",
    },
    {
      id: 2,
      image: glassess1,
      name: "Nike air force 1",
    },
    {
      id: 3,
      image: glassess3,
      name: "Nike Court Vision Lo Nn  black",
    },
  ]);
  return (
    <div className="Glassess-all">
      <div className="continer">
        <Link to="/WhenPressed">
          <div className="Glassess-block">
            {product.map((item) => (
              <div className="Glassess-block-btn1" key={item.id}>
                <img src={item.image} alt="" />
                <div className="Glassess-block-btn-text1">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}
