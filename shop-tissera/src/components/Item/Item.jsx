import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ id, producto, precio, img, stock }) {
  return (
    <div id={id} className="itemCountain">
      <div className="itemCard">
        <img className="imgCard" src={img} alt="" />
        <h2 className="tituloCard">{producto}</h2>
        <p>{precio}</p>
        <Link to={"/item/" + id}>
          <button className="btnDetail">Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
