import React from 'react'
import OredesMenu from '../main/OrdersMenu'
import x from "../../assets/svg/x.svg";
function Modal({ open, setOpen }) {
  
  return (
    <div>
      <div className={`chiqarish ${open && ' active'}`}>
        <button className="orders-menu" onClick={() => setOpen(false)}>
          <img src={x} alt="" />
        </button>
        <OredesMenu />
        
      </div>
    </div>
  )
}

export default Modal