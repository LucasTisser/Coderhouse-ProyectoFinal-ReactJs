import React from "react";
import Contador from "../ItemCount/ItemCount";
import { useContext } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from 'react-bootstrap/CardGroup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import AOS from 'aos';

function ItemDetail({ items }) {
  const cartCtx = useContext(CartContext);
  console.log(items)
  function onAdd(quantityToAdd) {
    cartCtx.addProduct({ quantity: quantityToAdd, ...items });
  }
  AOS.init();
  return (
    <div id={items?.id} className="ItemDetailCard" data-aos="zoom-out">
      <Card style={{ height: "35rem", width: "55rem" }} bsPrefix={"CardDetail"}>
        <Card.Img src={items?.img} bsPrefix={"ImgItemDetail"} />
        <Card.Body className={"CardDetailBody"}>
          <CardGroup className="right">
            <Card.Title className="titleCardDetail">
              {items?.producto}
            </Card.Title>
            <Card.Text className="descriptionCardDetail">
              {items?.descripcion}
            </Card.Text>
            <CardGroup className="PriceAndRating">
              <Card.Text className="ratingDetail"><FontAwesomeIcon icon={faStar}/>{items?.rating}</Card.Text>
            <Card.Text className="priceCardDetail">${items?.precio}</Card.Text>
            </CardGroup>
            
          </CardGroup>
          <CardGroup className="countAndBtnbBuy">
            <Contador onAdd={onAdd} initial={0} stock={items?.dataStock} />
            <Link to="/cart">
            <Button bsPrefix={"btnBuy"}>Ir al carrito</Button>
          </Link>
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
