import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HeadingLogo from "../../assets/images/55f68e1fbbfb3a97de3447dea15fbe28.jpg";
import Oredes from "../../components/Oredes.jsx";

export default function Heading() {
  return (
      <div className="Heading-all">
          <BrowserRouter>
              <div className="continer">
                  <div className="Heading-block">
                      <a href="/App">
                          <div className="Heading-logo">
                              <img src={HeadingLogo} alt="" />
                          </div>
                      </a>
                      <div className="Heading-sorche">
                          <input placeholder="Search query..." type="text" />
                          <button>Search</button>
                      </div>
                      <div className="Heading-link">
                          <NavLink to="/Oredes">HOME</NavLink>
                          <NavLink to="/Oredes">Orders</NavLink>
                          <NavLink to="/Oredes">CONTACT</NavLink>
                      </div>
                  </div>
              </div>{" "}
              <Routes>
                  <Route path="/Oredes" element={<Oredes />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
