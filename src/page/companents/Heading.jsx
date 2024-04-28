import React from "react";
import HeadingLogo from "../../assets/images/55f68e1fbbfb3a97de3447dea15fbe28.jpg";
export default function Heading() {
  return (
    <div className="Heading-all">
      <div className="continer">
        <div className="Heading-block">
         <a href="#">
         <div className="Heading-logo">
            <img src={HeadingLogo} alt="" />
          </div>
         </a>
          <div className="Heading-sorche">
            <input placeholder="Search query..." type="text" />
            <button>Search</button>
          </div>
          <div className="Heading-link">
            <a href="#">HOME</a>
            <a href="#">CATEGORIES</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}
