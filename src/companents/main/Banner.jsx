import BannerBgImg from "./BannerBgImg";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Banner = () => {
  const [data, setData] = useState([]);

  const url = "https://128de5c23d00ef14.mokky.dev/bannerApi1";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
  };

  return (
    <div className="Banner-all">
      <div className="continer">
        {data.map((product) => (
          <div className="Banner-block">
            <div className="banner-bg-img">
              <BannerBgImg />
            </div>
            <div className="Banner-text">
              <h1></h1>
              <h2 className="my-headline"> XZ Nike</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Banner;
