import right from "../../assets/svg/right.svg";
import ProductMini from "./ProductMini.jsx";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="continer">
      <div id="product" className="Product-all">
        <div className="Product-all-titile">
          <h1>BEST SELLER</h1>
        </div>

        <div className="Product-all-link">
          <Link to="/product">Glasses</Link>
          <Link to="/output">Clothes</Link>
        </div>
        <div className="Product-all-product-all">
          <ProductMini />
          <div className="Product-all-product-all-btn">
            <Link to="/PraductLeft">

            </Link>
            <Link to="/PraductRight"><button>
              <img src={right} alt="" />
            </button></Link>

          </div>
        </div>
      </div>
    </div>
  );
}
