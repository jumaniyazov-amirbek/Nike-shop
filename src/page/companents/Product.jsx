import React from "react";
import glasses1 from "../../assets/images/0152890_nike-air-force-1-07-fq8201-100.webp";
import glasses2 from "../../assets/images/0171318_nike-court-vision-lo-nn-dh2987-111.webp";
import glasses3 from "../../assets/images/0169903_nike-dunk-low-fz4618-001.webp";
import glasses4 from "../../assets/images/0158067_nike-dunk-low-fj5429-133.webp";
import heart from "../../assets/svg/heart.svg";
export default function Product() {
  return (
    <div class="Product-all">
      <div className="Product-all-titile">
        <h1>BEST SELLER</h1>
      </div>
      <div className="Product-all-link">
        <a href="#">All</a>
        <a href="#">Bags</a>
        <a href="#">Sneakers</a>
        <a href="#">Belt</a>
        <a href="#">Sunglasses</a>
      </div>
      <div className="Product-all-product-all">
        <div className="Product-all-product-1-block">
          <div className="Product-all-product-1-block-mini">
            <div className="imgs">
              <img src={glasses1} alt="" />
            </div>
            <div className="Product-all-product-1-block-mini-text-all">
              <div className="Product-all-product-1-block-mini-text">
                <p>Nike air force 5</p>
              </div>

              <div className="Product-all-product-1-block-mini-price">
                <h2>$299,43</h2>
                <p>
                  $534,33 / <span>24% Off</span>
                </p>
                <div className="heart-block">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="Product-all-product-1-block-mini">
            <div className="imgs">
              <img src={glasses2} alt="" />
            </div>
            <div className="Product-all-product-1-block-mini-text-all">
              <div className="Product-all-product-1-block-mini-text">
                <p>Nike air force 5</p>
              </div>

              <div className="Product-all-product-1-block-mini-price">
                <h2>$299,43</h2>
                <p>
                  $534,33 / <span>24% Off</span>
                </p>
                <div className="heart-block">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="Product-all-product-1-block-mini">
            <div className="imgs">
              <img src={glasses3} alt="" />
            </div>
            <div className="Product-all-product-1-block-mini-text-all">
              <div className="Product-all-product-1-block-mini-text">
                <p>Nike air force 5</p>
              </div>

              <div className="Product-all-product-1-block-mini-price">
                <h2>$299,43</h2>
                <p>
                  $534,33 / <span>24% Off</span>
                </p>
                <div className="heart-block">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="Product-all-product-1-block-mini">
            <div className="imgs">
              <img src={glasses4} alt="" />
            </div>
            <div className="Product-all-product-1-block-mini-text-all">
              <div className="Product-all-product-1-block-mini-text">
                <p>Nike air force 5</p>
              </div>

              <div className="Product-all-product-1-block-mini-price">
                <h2>$299,43</h2>
                <p>
                  $534,33 / <span>24% Off</span>
                </p>
                <div className="heart-block">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
