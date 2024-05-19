import { Link } from "react-router-dom";
import HeadingLogo from "../../assets/images/55f68e1fbbfb3a97de3447dea15fbe28.jpg";
import menuu from "../../assets/svg/menu.svg";
import { useState } from "react";
import x from "../../assets/svg/x.svg";
import payme1 from "../../assets/images/Paypal.png";
import payme2 from "../../assets/images/Western-union.png";
import payme3 from "../../assets/images/Group 19.png";
import karta from "../../assets/karta.png";
import OredesMenu from "../main/OrdersMenu";

export default function Heading({ setOpen }) {
    const [burger, setBurger] = useState(false);

    function menu() {
        if (burger == true) {
            setBurger(false);
        }
        if (burger == false) {
            setBurger(true);
        }
    }
    return (
        <div className="Heading-all">
            <Link to="/">
                <div className="Heading-logo">
                    <img src={HeadingLogo} alt="" />
                </div>
            </Link>
            <div className="Heading-sorche">
                <input placeholder="Search query..." type="text" />
                <button>Search</button>
            </div>
            <div className="Heading-link">
                <Link to="/"> Home</Link>
                <Link to="/orders"> Orders</Link>

                <a href="#product">Product</a>





                <div className="ordersmenu">
                    <button onClick={() => setOpen(true)}>Basket</button>

                </div>

                <Link to="/login">Pirofil</Link>
            </div>

            <div className="menu">
                <button onClick={menu}>
                    <img src={menuu} alt="" />
                </button>
                <div className={burger ? "blok" : "none"}>
                    <div className="release">
                        <button onClick={menu}>
                            <img src={x} alt="" />
                        </button>
                        <div className="link">
                            <Link to="/"> Home</Link>
                            <Link to="/orders"> Orders</Link>
                            <Link to="/login">login</Link>
                        </div>
                        <div className="Heading-logoo">
                            <img src={karta} alt="" />
                        </div>
                        <hr />
                        <div className="Footer-text">
                            <p>© 2018 Ecommerce www.bisenbaev.com</p>
                            <div className="Footer-img">
                                <img src={payme1} alt="" />
                                <img src={payme2} alt="" />
                                <img src={payme3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
