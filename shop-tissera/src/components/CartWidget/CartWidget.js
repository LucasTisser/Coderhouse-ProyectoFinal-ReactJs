import React, { Component } from 'react';
import carritoImg from '../NavBar/carritoCompras.png';
import './CartWidget.css';

export class CartWidget extends Component {
    render() {
        return (
            <div>
                <img src={carritoImg} className="carritoImg" ></img>
            </div>
        )
    }
}
export default CartWidget