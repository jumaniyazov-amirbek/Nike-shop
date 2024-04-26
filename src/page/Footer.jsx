import React from "react";
import FooterLink from "./companents/FooterLink";
import HeadingLogo from "../assets/images/55f68e1fbbfb3a97de3447dea15fbe28.jpg";
export default function Footer() {
  return (
    <div className="Footer-all">
      <div className="continer">

        <FooterLink />
       <hr /> <div className="Footer-text">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
         <div className="Footer-logo">
      <img src={HeadingLogo} alt="" />
      </div>
       </div>
       
      </div>
    </div>
  );
}
