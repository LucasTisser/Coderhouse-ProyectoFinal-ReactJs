import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ id, producto, descripcion, precio, img }) => {
  return (
    <div id={id} className="ItemDetailCard">
      <div className="imgDetailCard">
        <img src="" alt="" />
      </div>
      <div className="txtDetailCard">
        <h2>{producto}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
      </div>
    </div>
  );
};
