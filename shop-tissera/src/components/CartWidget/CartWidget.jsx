import React from "react";
import carritoImg from "./carritoCompras.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img
        src={carritoImg}
        className="carritoImg"
        alt="Imagen del Carrito"
      ></img>
    </div>
  );
};

export default CartWidget;
