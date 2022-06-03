import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Bubble from "../Bubble/Bubble";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartItem.css";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <Card style={{ height: "20rem", width: "80rem" }} className="cartItem">
        <Card.Body className="cartContainer">
          <Bubble>
            <Badge className="bubbleQuantity" bg="danger" pill>
              {item.quantity}
            </Badge>
          </Bubble>
          <Card.Img
            className="cartImgContainer"
            variant="top"
            src={item?.img}
          />
          <Card.Header className="propContainer">
            <Card.Title className="cartTitleProp">{item?.producto}</Card.Title>
            <CardGroup className="cartPriceProp">
              El precio por unidad es de{" "}
              <Card.Text className="priceCart">${item?.precio}</Card.Text>
            </CardGroup>
            <CardGroup className="cartPriceProp">
              Usted esta por comprar{" "}
              <Card.Text className="priceCart">{item?.quantity}</Card.Text>{" "}
              unidad/es de este producto
            </CardGroup>
          </Card.Header>
          <Bubble isButton onBubbleClick={() => Toastify({
            text: "Se ha eliminado un producto en tu carrito.",
            duration: 2000,
            style: {
              background: "linear-gradient(to right, #8f1919, #d64444)",
            }
            }).showToast() && cartCtx.removeProduct(item.id)}>
            <Badge className="bubbleClose" pill bg="danger">
              X
            </Badge>
          </Bubble>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CartItem;
