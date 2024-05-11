import heart from "../assets/svg/heart.svg";
import clothes1 from "../assets/kiyim-image/4268151945_w640_h640_sportivnyj-kostyum-jordan.webp";
import clothes2 from "../assets/kiyim-image/4268151947_w640_h640_sportivnyj-kostyum-jordan.webp";
import clothes3 from "../assets/kiyim-image/4416382265_w640_h640_sportivnyj-kostyum-muzhskoj.webp";
import clothes4 from "../assets/kiyim-image/4418222546_w640_h640_sportivnyj-kostyum-muzhskoj.webp";
import clothes5 from "../assets/kiyim-image/4756535899_w640_h640_muzhskoj-sportivnyj-kostyum.webp";
import clothes6 from "../assets/kiyim-image/5737313928_w640_h640_hudi-belyj-.webp";
import clothes7 from "../assets/kiyim-image/nike.webp";
import clothes8 from "../assets/kiyim-image/TheNorthFace.webp";
import { Link } from "react-router-dom";
export default function Output() {
  return (
    <div className="continer">
      <div className="Output">
        <div className="Product-all-product-1-block-all">
        <div className="Product-all-titile">
          <h1>BEST SELLER</h1>
        </div>
          <div className="Product-all-link">
            <Link to="/product">Glasses</Link>
          </div>
          <div className="Product-all-product-1-block">
            <Link to="/WhenPressed">
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes1} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike air force 5</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$299,00</h2>

                    <p>
                      $400,00 / <span>30% Off</span>
                    </p>
                    <div className="heart-block">
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/WhenPressed">
              {" "}
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes2} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike air force 5</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$399,00</h2>
                    <p>
                      $499,00 / <span>10% Off</span>
                    </p>
                    <div className="heart-block">
                      {" "}
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/WhenPressed">
              {" "}
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes3} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike Dunk Low</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$350,00</h2>
                    <p>
                      $520,00 / <span>28% Off</span>
                    </p>
                    <div className="heart-block">
                      {" "}
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/WhenPressed">
              {" "}
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes4} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike Dunk Low</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$380,00</h2>
                    <p>
                      $530,00 / <span>20% Off</span>
                    </p>
                    <div className="heart-block">
                      {" "}
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="Product-all-product-1-block">
            <Link to="/WhenPressed">
              {" "}
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes5} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike air force 5</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$240,00</h2>

                    <p>
                      $534,00 / <span>24% Off</span>
                    </p>
                    <div className="heart-block">
                      {" "}
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/WhenPressed">
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes6} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike air force 5</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$199,00</h2>
                    <p>
                      $550,00 / <span>45% Off</span>
                    </p>
                    <div className="heart-block">
                      {" "}
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/WhenPressed">
              {" "}
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes7} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike Dunk Low</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$599,00</h2>
                    <p>
                      $800,00 / <span>35% Off</span>
                    </p>
                    <div className="heart-block">
                      {" "}
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/WhenPressed">
              {" "}
              <div className="Product-all-product-1-block-mini">
                <div className="imgs">
                  <img src={clothes8} alt="" />
                </div>
                <div className="Product-all-product-1-block-mini-text-all">
                  <div className="Product-all-product-1-block-mini-text">
                    <p>Nike Dunk Low</p>
                  </div>

                  <div className="Product-all-product-1-block-mini-price">
                    <h2>$499,00</h2>
                    <p>
                      $510,00 / <span>5% Off</span>
                    </p>
                    <div className="heart-block">
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
