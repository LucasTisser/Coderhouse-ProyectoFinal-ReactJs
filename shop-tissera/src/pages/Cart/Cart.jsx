import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

function Cart() {
  const cartCtx = useContext(CartContext);
  return (
    <div className="CartItemsContainer">
      {cartCtx.products.map((p) => (
        <CartItem item={p} key={p.id} />
      ))}
      {cartCtx.products.length !== 0 ? (
        <Card className="totalContainer">
          <Card.Body className="cartFinishcontainer">
            <Card.Text className="finishPriceCart">
              Precio total:${cartCtx.getTotalPrice()}
            </Card.Text>
            <Link to="/checkout">
              <Button variant="success">Finalizar Compra</Button>{" "}
            </Link>
            <Button variant="primary" onClick={() => Toastify({
            text: "Se ha Limpiado el Carrito.",
            duration: 2000,
            style: {
              background: "linear-gradient(to right, #8f1919, #d64444)",
            }
            }).showToast() && cartCtx.clear()}>Limpiar Carrito</Button>{" "}
          </Card.Body>
        </Card>
      ) : (
        <>
          <div className="notProductCardContainer">
            <Card className="notProductCard">
              <Card.Title>No hay productos en el carrito</Card.Title>
              <Link to="/">
                <Button variant="dark" className="btnFinish">
                  Ir al inicio
                </Button>{" "}
              </Link>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
