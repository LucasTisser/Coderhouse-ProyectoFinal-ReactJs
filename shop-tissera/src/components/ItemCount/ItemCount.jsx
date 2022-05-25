import React, { useState } from "react";
import Button from "react-bootstrap/Button";
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
  return (
    <div className="itemCount">
      <div className="countHandlers">
        <Button bsPrefix="btnLess" onClick={() => handleMinusButton()}>
          -
        </Button>{" "}
        <p className="counter">{count}</p>
        <Button bsPrefix="btnMore" onClick={() => handlePlusButton()}>
          +
        </Button>{" "}
      </div>
      <Button
        bsPrefix="btnAdd"
        onClick={() => {
          count === 0
            ? alert("Por favor, agrega al menos un producto.")
            : count <=stock && onAdd(count);
        }}
      >
        Agregar al Carrito{" "}
      </Button>{" "}
    </div>
  );
}
