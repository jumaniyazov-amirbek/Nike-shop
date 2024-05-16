import React from 'react'
import left from "../../assets/svg/left.svg";
import { Link } from "react-router-dom";
import PraductRightMini from '../main/PraductRightMini.jsx';
export default function PraductRight() {
    return (
        <div className="continer">
            <div className="Product-all">
                <div className="Product-all-titile">
                </div>


                <div className="Product-all-product-all">
                    <PraductRightMini />
                    <div className="Product-all-product-all-btn">


                    </div>
                </div>
            </div>
        </div>
    )
}
