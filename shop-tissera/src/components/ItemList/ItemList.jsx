import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => {
        return (
          <Item key={item.id} producto={item.producto} precio={item.precio} />
        );
      })}
    </div>
  );
};
