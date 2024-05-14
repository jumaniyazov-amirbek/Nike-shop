import { useState } from "react";
import img1 from "../../assets/glasses/img1.webp";
import img2 from "../../assets/GlassesImg/Image (2).png";
import img4 from "../../assets/images/0158067_nike-dunk-low-fj5429-133.webp";
import img5 from "../../assets/images/0153517_nike-air-dunk-jumbo-dv0821-002.webp";
import img3 from "../../assets/kiyim-image/nike.webp";
import img6 from "../../assets/GlassesImg/Frame (4).png";
export default function OredesMenu() {
    const [product, setProduct] = useState([
        {
            id: 1,
            image: img1,
            name: "Nike air force 1",
        },
        {
            id: 2,
            image: img2,
            name: "Nike jordan 1",
        },
        {
            id: 3,
            image: img3,
            name: "Nike clothes",
        },
        {
            id: 4,
            image: img4,
            name: "Nike air force  red",
        },
        {
            id: 5,
            image: img5,
            name: "Nike air white",
        },
        {
            id: 6,
            image: img6,
            name: "Nike jordan 1",
        },
    ]);
    return (
        <div className="OredesMENU">
            {product.map((item) => (
                <div className="ordesMiniBlock-all" key={item.id}>
                    <div className="ordesMiniBlock">
                        <img className="imgMini" src={item.image} alt="" />
                        <div className="orders-text">
                            <p>{item.name}</p>
                            
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}
