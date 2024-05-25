import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/svg/Cart.svg";

const ProductMini = () => {
  const [data, setData] = useState([]);

  const url = "https://128de5c23d00ef14.mokky.dev/bannerApi";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
  };

  return (
    <div id="kartoshka" className="bg-[#F6F8F9]">
      <div className="Glassess-all">
        <div className="continer">
          <div className="Glassess-block">
            {data.map((product) => (
            
                <div
                  className="Product-all-product-1-block-mini1"
                  key={product.id}
                >
                  <div className="Glassess-block-btn1">
                    <Link to="/WhenPressed">  <img src={product.img} alt="" />{" "} </Link>
                    <div className="Glassess-block-btn-text1">
                      <p>{product.name}</p>
                    </div>{" "}
                  </div>
                </div>
             
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMini;

// import glassess1 from "../../assets/images/0126756_nike-wmns-air-force-1-07-dd8959-100.webp";
// import glassess2 from "../../assets/images/0173433_nike-air-force-1-07-fz4617-001.webp";
// import glassess3 from "../../assets/images/0125847_nike-court-vision-lo-nn-dh2987-101.webp";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// export default function Glassess() {

//   return (
//     <div className="Glassess-all">
//       <div className="continer">
//         <Link to="/WhenPressed">
//           <div className="Glassess-block">
//             {product.map((item) => (
//               <div className="Glassess-block-btn1" key={item.id}>
//                 <img src={item.image} alt="" />
//                 <div className="Glassess-block-btn-text1">
//                   <p>{item.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>{" "}
//         </Link>
//       </div>
//     </div>
//   );
// }
