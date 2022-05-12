import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export default function Contador({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  function handlePlusButton() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleMinusButton() {
    if (count > 0) setCount(count - 1);
  }
  useEffect(() => {
    console.log("Actualice count", count);
    return () => {
      console.log("Clean Up", count);
    };
  }, [count]);

  return (
    <div className="itemCount">
      <button className="btnLess" onClick={() => handleMinusButton()}>
        -
      </button>
      <p className="counter">{count}</p>
      <button className="btnMore" onClick={() => handlePlusButton()}>
        +
      </button>
      <button
        className="btnAdd"
        onClick={() => {
          count === 0
            ? alert("Por favor, agrega al menos un producto.")
            : count <= stock && onAdd(count);
        }}
      >
        Agregar al Carrito{" "}
      </button>
    </div>
  );
}
