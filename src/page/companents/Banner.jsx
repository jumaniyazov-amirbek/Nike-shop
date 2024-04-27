import React from "react";
import BannerBg from "../../assets/images/BannerBg.png";
export default function Banner() {
  return (
    <div className="Banner-all">
      <div className="continer">
        <div className="Banner-block">
          <div className="Banner-bg-img">
            <img src={BannerBg} alt="" />
          </div>
          <div className="Banner-text">
            <p>
              Super Flash Sale <br />
              50% Of.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
