import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import carritoImg from "./carritoCompras.png";
import Bubble from "../Bubble/Bubble";
import "./CartWidget.css";
import CartContext from "../../store/CartContext";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

function CartWidget() {
  const cartCtx = useContext(CartContext);
  const [badgeShow, setBadgeShow] = useState(false);
  useEffect(() => {
    cartCtx.getCartQuantity() === 0 ? setBadgeShow(false) : setBadgeShow(true);
    console.log(badgeShow);
  }, [cartCtx, badgeShow]);
  return (
    <div>
      <div className="badgeCart">
        <Bubble>
          <Badge pill>{cartCtx.getCartQuantity()}</Badge>
        </Bubble>
      </div>
      <Link to="/cart">
        <img
          src={carritoImg}
          className="carritoImg"
          alt="Imagen del Carrito"
        ></img>
      </Link>
    </div>
  );
}
export default CartWidget;
