import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <Item key={item.id} producto={item.producto} precio={item.precio} />
        );
      })}
    </div>
  );
};
