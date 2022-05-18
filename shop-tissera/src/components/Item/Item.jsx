import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Item({ id, producto, precio, img }) {
  return (
    <div id={id} className="itemCountain">
      <Card style={{ width: "18rem" }} bsPrefix={"Card"}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="tituloCard">{producto}</Card.Title>
          <Card.Text bsPrefix={"priceCard"}>${precio}</Card.Text>
          <Link to={"/item/" + id}>
            <Button bsPrefix={"btnCard"}>Ver Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
