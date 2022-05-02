import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="nav">
      <a href="#" className="logo">
        Tiendamania!
      </a>
      <ul className="navList">
        <a href="#">Dulces</a>
        <a href="#">Carnes</a>
        <a href="#">Lacteos</a>
      </ul>
      <a href="#">
        <CartWidget />
      </a>
    </div>
  );
}

export default NavBar;
