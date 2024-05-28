import React from "react";
import Banner from "./Banner";
import Glassess from "./Glassess";
import Product from "./Product";
import Member from "./Member";
import About from "./About";
import ProductMini from "./ProductMini";

export default function Main() {
  return (
    <div className="Main">
      <Banner />
      <Glassess />
      <Member />
      <Product />
      <About />
    </div>
  );
}
