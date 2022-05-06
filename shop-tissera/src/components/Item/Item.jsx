import React from "react";
import { Link } from "react-router-dom";
import Contador from "../ItemCount/ItemCount";
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
        <div className="Counter">
          <Contador stock={stock} initial={0} />
        </div>
      </div>
    </div>
  );
}

export default Item;
