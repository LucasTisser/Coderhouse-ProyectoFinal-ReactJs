import React from 'react'
import carritoImg from '../NavBar/carritoCompras.png';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
        <img src={carritoImg} className="carritoImg" alt='Carrito' ></img>
    </div>
  )
}

export default CartWidget