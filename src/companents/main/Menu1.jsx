import React from 'react'
import OredesMenu from './OrdersMenu';
import x from "../../assets/svg/x.svg";

export default function menu1() {
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
    <div className="ordersmenu">
    <button onClick={menu}>Heart</button>
    <div className={burger ? "blok" : "none"}>
        <div className="chiqarish">
            <button className="orders-menu" onClick={menu}>
                <img src={x} alt="" />
            </button>
            <OredesMenu/>
        </div>
    </div>
</div>
);
};
