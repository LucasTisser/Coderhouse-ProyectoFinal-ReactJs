import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="logoContainer">
        <NavLink to={"/"}>
          <img
            className="logoImg"
            src="https://play-lh.googleusercontent.com/byZDtGXJxSbMoFgmJA_RHWU7DCt-Lv6IzOVTJd_uPV3HPb0YQSaAx-fb_VZ1OA8sVj0"
            alt="Imagen del logo"
          />
        </NavLink>
      </div>
      <div className="navLinks">
        <ul className="navList">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/category/chocolate"}>Chocolates</NavLink>
          </li>
          <li>
            <NavLink to={"/category/golosina"}>Golosinas</NavLink>
          </li>
        </ul>
      </div>
      <div className="cartWidget">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
