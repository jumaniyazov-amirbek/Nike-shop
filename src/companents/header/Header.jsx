import ManLogo from "../../assets/svg/ManLogo.svg";
import Cart from "../../assets/svg/Cart.svg";
export default function Header() {
  return (
    <div className="Header-all">
      <div className="Header-1-block-all">
        <div className="Header-select">
          <select>
            <option>EN</option>
            <option>EN</option>
            <option>EN</option>
          </select>
          <select>
            <option>USD</option>
          </select>
        </div>
      </div>
      <div className="Header-2-block-all">
        <div className="Header-btn">
          <div className="Header-btn-1">
            <button>
              <img src={ManLogo} alt="" />
              My profile
            </button>
          </div>
          <div className="Header-btn-2">
            <button>
              <img src={Cart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
