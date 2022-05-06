import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ items }) {
  return (
    <div className="itemList">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            producto={item.producto}
            precio={item.precio}
            id={item.id}
            img={item.img}
            stock={item.dataStock}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
