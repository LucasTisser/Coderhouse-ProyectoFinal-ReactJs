import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import AOS from 'aos';



function ItemList({ items }) {
  
  AOS.init();
    return (
    <div className="itemList" data-aos="zoom-in">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            producto={item.producto}
            precio={item.precio}
            id={item.id}
            img={item.img}
            stock={item.dataStock}
            rating={item.rating}
          />
      );
        
      })}
    </div>
  );
}

export default ItemList;
