import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Button variant="success">Terminar compra</Button>{" "}
          </Card.Body>
        </Card>
      ) : (
        <>
          <Card className="notProductCard">
            <Card.Title>No hay productos en el carrito</Card.Title>
            <Link to="/">
              <Button variant="dark" className="btnFinish">
                Ir al inicio
              </Button>{" "}
            </Link>
          </Card>
        </>
      )}
    </div>
  );
}
export default Cart;
