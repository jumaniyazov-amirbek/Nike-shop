import React from 'react'
import Frame from "../../assets/images/Frame.png";
import Frame1 from "../../assets/images/Frame (1).png";
export default function OredesMini() {
  return (
    <div className="Oredes-praduck-block">
    <div className="Oredes-praduck-block-img">
      <img src={Frame1} alt="" />
    </div>
    <div className="Oredes-praduck-block-text">
      <div className="Oredes-praduck-block-text-mini">
        <p>Nike Dri-FIT ADV TechKnit Ultra</p>
        <p>MRP: ₹ 3 895.00</p>
      </div>
      <p>Men's Short-Sleeve Running Top</p>
      <p>Ashen Slate/Cobalt Bliss</p>
      <div className="Oredes-praduck-block-text-minii">
        Size
        <select>
          <option>L</option>
          <option>M</option>
          <option>XL</option>
          <option>XXL</option>
          <option>XXXL</option>
          <option>XXXXL</option>
        </select>
      </div>
      <div className="Oredes-praduck-block-text-mini-img">
        <img src={Frame} alt="" />
      </div>
    </div>
  </div>
  )
}
