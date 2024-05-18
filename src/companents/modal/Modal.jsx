import React, { useState } from 'react'
import OredesMenu from '../main/OrdersMenu'
import x from "../../assets/svg/x.svg";
function Modal({ open, setOpen }) {
  
  const [count, setCount] = useState(1);
  
  return (
    <div>
      <div className={`chiqarish ${open && ' active'}`}>
        <button className="orders-menu" onClick={() => setOpen(false)}>
          <img src={x} alt="" />
        </button>
        <OredesMenu count={count} setCount={setCount}/>
        
      </div>
    </div>
  )
}

export default Modal