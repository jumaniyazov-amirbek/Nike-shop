import React, { useState } from "react";
import left from '../../assets/svg/left.svg'
import right from '../../assets/svg/right.svg'
import ProductMini from "./ProductMini";
import Output from '../../components/Output.jsx'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export default function Product() {
  return (
      <div className="continer">
          <BrowserRouter>
              <div className="Product-all">
                  <div className="Product-all-titile">
                      <h1>BEST SELLER</h1>
                  </div>

                  <div className="Product-all-link">
                      <NavLink to="/Product">Glasses</NavLink>
                      <NavLink to="/Output">Clothes</NavLink>
                  </div>
                  <div className="Product-all-product-all">
                      <ProductMini />
                      <div className="Product-all-product-all-btn">
                          <button>
                              <img src={left} alt="" />
                          </button>
                          <button>
                              <img src={right} alt="" />
                          </button>
                      </div>
                  </div>
              </div>
              <Routes>
                  <Route path="/Output" element={<Output />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
