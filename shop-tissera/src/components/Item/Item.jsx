import React from "react";
import Contador from "../ItemCount/ItemCount";
import "./Item.css";

export const Item = ({ id, producto, precio, img }) => {
  return (
    <div className="itemCountain">
      <div id={id} className="itemCard">
        <img src="{}" alt="" />
        <h2 className="tituloCard">{producto}</h2>
        <p>{precio}</p>
        <Contador stock={15} initial={0} />
      </div>
    </div>
  );
};
