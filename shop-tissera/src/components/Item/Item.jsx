import React,{useState, useContext} from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "../../store/CartContext";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import CardGroup from 'react-bootstrap/CardGroup'

function Item({ id, producto, precio, img}) {
  const [count] = useState(1)

  const cartCtx = useContext(CartContext);
  function onAdd(quantityToAdd) {
    cartCtx.addProduct({ quantity: quantityToAdd, id, producto, precio, img});
  }
  
  return (
    <div id={id} className="itemCountain" 
    >
      <Card style={{ width: "18rem" }} bsPrefix={"Card"}>
        <Card.Header>
          <Card.Img className="imgCard" variant="top" src={img}/>
        </Card.Header>
        
        <Card.Body className="CardBody" >
          <Card.Title className="tituloCard">{producto}</Card.Title>
          <CardGroup bsPrefix="CardMid">
            <Card.Text bsPrefix={"priceCard"}>${precio}.00</Card.Text>
            <Card.Text className="rating"><FontAwesomeIcon icon={faStar}/>5.0</Card.Text>
          </CardGroup>
          
          <CardGroup bsPrefix="CardBottom">
          <Link to={"/item/" + id}>
            <Button bsPrefix={"btnCard"}>Ver Detalles</Button>
          </Link>
          <Button
        bsPrefix="btnAddList"
        onClick={() => {
          Toastify({
            text: "Se ha agregado un producto a tu carrito.",
            duration: 2000,
            style: {
              background: "linear-gradient(to right, #8f1919, #d64444)",
            }
            }).showToast() &&
          onAdd(count)
        }}
      >
        Agregar al Carrito{" "}
      </Button>{" "}
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
