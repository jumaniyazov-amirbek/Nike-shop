import React from "react";
import Banner from "./Banner";
import Glassess from "./Glassess";
import Product from "./Product";
import Member from "./Member";
import About from "./About";

export default function Main() {
  return (
    <div className="Main">
      <Banner />
      <Glassess />
      <About/>
      <Member />
      <Product />
    </div>
  );
}
