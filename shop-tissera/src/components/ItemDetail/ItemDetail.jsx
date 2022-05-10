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
        <div>
          <Contador
            onAdd={onAdd}
            count={count}
            stock={items?.dataStock}
            initial={0}
          />
        </div>
        <Link to={"/cart"}>
          <button className="btnBuy">Terminar Compra</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
