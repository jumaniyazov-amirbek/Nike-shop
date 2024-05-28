import React, { useState } from "react";
import Frame from "../../assets/images/Frame.png";
import img3 from "../../assets/GlassesImg/Frame (4).png";
import img1 from "../../assets/glasses/img1.webp";
import img2 from "../../assets/kiyim-image/nike.webp";
import img4 from "../../assets/kiyim-image/4416382265_w640_h640_sportivnyj-kostyum-muzhskoj.webp";
import img5 from "../../assets/GlassesImg/glases5.webp";
import karasofka from '../../assets/glasses/karasofka.webp'
export default function OredesMini() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: img1,
      name: "Nike air force 1",
      price: "$ 799.00",
      about: "Men's Short-Sleeve Running Top",
      about1: "Ashen Slate/Cobalt Bliss",
    },
    {
      id: 2,
      image: img2,
      name: "Nike clothes",
      price: "$ 1.000",
      about: "Men's Short-Sleeve Running Top",
      about1: "Ashen Slate/Cobalt Bliss",
    },
    {
      id: 3,
      image: img3,
      name: "Nike jordan 1",
      price: "$ 599.00",
      about: "Men's Short-Sleeve Running Top",
      about1: "Ashen Slate/Cobalt Bliss",
      option: "39",
      option1: "40",
      option2: "41",
      option3: "42",
    },
    {
      id: 2,
      image: img4,
      name: "Nike clothes",
      price: "$ 699.00",
      about: "Men's Short-Sleeve Running Top",
      about1: "Ashen Slate/Cobalt Bliss",
    },
    {
      id: 5,
      image: img5,
      name: "Nike jordan 1",
      price: "$ 899.00",
      about: "Men's Short-Sleeve Running Top",
      about1: "Ashen Slate/Cobalt Bliss",
      option: "39",
      option1: "40",
      option2: "41",
      option3: "42",
    },

  ]);


  const handleDeleteClick = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  return (
    <div className="oreders-mini-all">
        {!items.length && 
        <div className="razultat"><h1>No product</h1><img src={karasofka} alt="" /></div>
        }

{items.length > 0 && (
      <div class="scrollbar" id="style-1"> 
        <div class="force-overflow"></div>
     
        {items.map((items) => (
          <div className="Oredes-praduck-block-scrol">
            <div>


              <div className="Oredes-praduck-block" key={items.id} >

                <div className="Oredes-praduck-block-img">
                  <img src={items.image} alt="" />
                </div>
                <div className="Oredes-praduck-block-text">
                  <div className="Oredes-praduck-block-text-mini">
                    <p>{items.name}</p>
                    <p>{items.price}</p>
                  </div>
                  <p>{items.about}</p>
                  <p>{items.about1}</p>
                  <div className="Oredes-praduck-block-text-minii">
                    Size
                    <select>
                      <option>M</option>
                      <option>XL</option>
                      <option>XXL</option>
                      <option>XXXL</option>
                    </select>
                  </div>

                  <button className="Oredes-praduck-block-text-mini-imgg" onClick={() => handleDeleteClick(items.id)}>

                    <img
                      className="Oredes-praduck-block-text-mini-img"
                      src={Frame}
                      alt=""
                    /></button>


                </div>
              </div>
            </div>

          </div>

        ))} 
      </div>
    )}</div >
  );
}
