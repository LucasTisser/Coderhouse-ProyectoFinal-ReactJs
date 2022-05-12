import React from "react";
import Contador from "../ItemCount/ItemCount";
import { useContext } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";

function ItemDetail({ items }) {
  const cartCtx = useContext(CartContext);

  function onAdd(quantityToAdd) {
    cartCtx.addProduct({ quantity: quantityToAdd, ...items });
  }

  return (
    <div id={items?.id} className="ItemDetailCard">
      <div className="imgDetailCard"></div>
      <div className="txtDetailCard">
        <h2>{items?.producto}</h2>
        <img src={items?.img} alt="" />
        <p>{items?.descripcion}</p>
        <p>{items?.precio}</p>
        <button onClick={() => console.log(cartCtx.products)}>
          Imprimir carrito
        </button>
        <button onClick={() => cartCtx.removeProduct(items.id)}>
          Remove Product
        </button>
        <button onClick={() => cartCtx.clear()}>Clear</button>
        <button onClick={() => console.log(cartCtx.isInCart(items.id))}>
          Is In cart
        </button>
        <button onClick={() => console.log(cartCtx.getCartQuantity())}>
          quantity
        </button>
        <Link to="/cart">
          <button onClick={() => console.log(cartCtx)} className="btnBuy">
            Terminar compra ( Items)
          </button>
        </Link>
        <Contador onAdd={onAdd} initial={0} stock={items.dataStock} />
      </div>
    </div>
  );
}

export default ItemDetail;
