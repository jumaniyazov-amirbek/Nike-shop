import React from 'react'
import left from "../../assets/svg/left.svg";
import ProductMini from "./ProductMini.jsx";
import { Link } from "react-router-dom";
export default function PraductRight() {
    return (
        <div className="continer">
            <div className="Product-all">
                <div className="Product-all-titile">
                    <h1>BEST SELLER</h1>
                </div>


                <div className="Product-all-product-all">
                    <ProductMini />
                    <div className="Product-all-product-all-btn">
                        <Link to="/ProductMini">
                            <button>
                                <img src={left} alt="" />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
