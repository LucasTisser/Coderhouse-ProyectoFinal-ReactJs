import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

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
          count !== 0
            ?
            Toastify({
              text: `Se han agregado ${count} Productos a tu carrito.`,
              duration: 3000,
              style: {
              background: "linear-gradient(to right, #8f1919, #d64444)",
              }
              }).showToast() &&
            count <=stock && onAdd(count)
               
            : Toastify({
              text: "Cantidad minima : 1 unidad.",
              duration: 2000,
              style: {
                background: "linear-gradient(to right, #8f1919, #d64444)",
              }
              }).showToast()
              
        }}
      >
        Agregar al Carrito{" "}
      </Button>{" "}
    </div>
  );
}



