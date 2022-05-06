import React from "react";
import "./ItemDetail.css";

function ItemDetail({ items }) {
  console.log(items);
  return (
    <div id={items?.id} className="ItemDetailCard">
      <div className="imgDetailCard"></div>
      <div className="txtDetailCard">
        <h2>{items?.producto}</h2>
        <img src={items?.img} alt="" />
        <p>{items?.descripcion}</p>
        <p>{items?.precio}</p>
        <button className="btnBuy">Comprar</button>
      </div>
    </div>
  );
}

export default ItemDetail;
