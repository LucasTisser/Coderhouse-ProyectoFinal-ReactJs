import React from "react";
import Contador from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

function ItemDetail({ items }) {
  const [count, setCount] = useState(null);
  function onAdd(quantityToAdd) {
    setCount(quantityToAdd);
  }

  return (
    <div id={items?.id} className="ItemDetailCard">
      <div className="imgDetailCard"></div>
      <div className="txtDetailCard">
        <h2>{items?.producto}</h2>
        <img src={items?.img} alt="" />
        <p>{items?.descripcion}</p>
        <p>{items?.precio}</p>
        {count ? (
          <Link to="/cart">
            <button className="btnBuy">Terminar compra ({count} Items)</button>
          </Link>
        ) : (
          <Contador onAdd={onAdd} initial={0} stock={items.dataStock} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
