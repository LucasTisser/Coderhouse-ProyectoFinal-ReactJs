import React from "react";
import Contador from "../ItemCount/ItemCount";
import { useContext } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetail({ items }) {
  const cartCtx = useContext(CartContext);

  function onAdd(quantityToAdd) {
    cartCtx.addProduct({ quantity: quantityToAdd, ...items });
  }

  return (
    <div id={items?.id} className="ItemDetailCard">
      <Card style={{ height: "30rem", width: "80rem" }} bsPrefix={"CardDetail"}>
        <Card.Img variant="top" src={items?.img} bsPrefix={"ImgItemDetail"} />
        <Card.Body>
          <div>
            <Card.Title className="titleCardDetail">
              {items?.producto}
            </Card.Title>
            <Card.Text className="descriptionCardDetail">
              {items?.descripcion}
            </Card.Text>
            <Card.Text className="priceCardDetail">${items?.precio}</Card.Text>
          </div>
          <div>
            <Button
              bsPrefix={"btnDetail"}
              onClick={() => console.log(cartCtx.products)}
            >
              Imprimir carrito
            </Button>
            <Button
              bsPrefix={"btnDetail"}
              onClick={() => cartCtx.removeProduct(items.id)}
            >
              Remove Product
            </Button>
            <Button bsPrefix={"btnDetail"} onClick={() => cartCtx.clear()}>
              Clear
            </Button>
            <Button
              bsPrefix={"btnDetail"}
              onClick={() => console.log(cartCtx.isInCart(items.id))}
            >
              Is In cart
            </Button>
            <Button
              bsPrefix={"btnDetail"}
              onClick={() => console.log(cartCtx.getCartQuantity())}
            >
              quantity
            </Button>
            <Contador onAdd={onAdd} initial={0} stock={items.dataStock} />
          </div>
          <Link to="/cart">
            <Button bsPrefix={"btnBuy"}>Ir al carrito</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
