import React from "react";
import FooterLink from "./FooterLink";
import HeadingLogo from "../../assets/images/55f68e1fbbfb3a97de3447dea15fbe28.jpg";
import payme1 from "../../assets/images/Paypal.png";
import payme2 from "../../assets/images/Western-union.png";
import payme3 from "../../assets/images/Group 19.png";
export default function Footer() {
  return (
    <div className="Footer-all">
        <div className="Footer-logo">
          <img src={HeadingLogo} alt="" />
        </div>
        <FooterLink />
        <hr />
        <div className="Footer-text">
          <p>Jumaniyaz_ov_</p>
          <div className="Footer-img">
            <img src={payme1} alt="" />
            <img src={payme2} alt="" />
            <img src={payme3} alt="" />
          </div>
        </div>
    </div>
  );
}
