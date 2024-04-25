import React from "react";
import Banner from "./companents/Banner";
import Glassess from "./companents/Glassess";
import Product from "./companents/Product";

export default function Main() {
  return (
    <div className="Main">
      <Banner />
      <Glassess />
      <Product/>
    </div>
  );
}
