import React from 'react'
import left from "../../assets/svg/left.svg";
import { Link } from "react-router-dom";
import PraductRightMini from '../main/PraductRightMini.jsx';
export default function PraductRight() {
    return (
        <div className="continer">
            <div className="Product-all">
                <div className="Product-all-titile">
                    <h1>BEST SELLER</h1>
                </div>


                <div className="Product-all-product-all">
                    <PraductRightMini />
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
