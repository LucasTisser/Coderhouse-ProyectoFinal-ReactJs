import { useState, useContext } from "react";
import { CartContext } from "../../store/CartContext";
import db from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Checkout.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import AOS from 'aos';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const Checkout = () => {
  const { products, getTotalPrice, clear } = useContext(CartContext);
  const [load, setLoad] = useState(false);
  const [OrderID, setOrder] = useState(false);

  const [buyer, setBuyer] = useState({
  });

  const { Nombre, Email, Telefono } = buyer;
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  };
  
  const generateOrder = async (data) => {
    setLoad(true);
    try {
      const col = collection(db, "Orders");
      const order = await addDoc(col, data);
      setOrder(order.id);
      clear();
      setLoad(false);
    } catch (error) {
      console.log("otro error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dia = new Date();
    const items = products.map((e) => {
      return {
        id: e.id,
        producto: e.producto,
        precio: e.precio,
        quantity: e.quantity,
      };
    });
    const total = getTotalPrice();
    const data = { buyer, items, dia, total };
    generateOrder(data);
  };
  AOS.init();
  return (
    <div className="checkout" data-aos="zoom-out">
      {load ? (
        <Spinner />
      ) : (
        !OrderID && (
          <Card
            className="CardForm"
            style={{ height: "20rem", width: "30rem" }}
          >
            <Card.Title>Completa los Datos para finalizar su compra:</Card.Title>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
                <Form.Control value={Nombre} name="Nombre" onChange={handleChange} type="text" placeholder="Nombre" required />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control value={Email} name="Email" onChange={handleChange} type="email" placeholder="name@example.com" required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingTel" label="Telefono" className="mb-3">
                <Form.Control value={Telefono} name="Telefono" onChange={handleChange} type="number" placeholder="Telefono" required/>
              </FloatingLabel>
              <Form.Control className="btn btn-success mb-2 btnCard" value={"Finalizar Compra"} type="submit" required />

            </Form>
            
          </Card>
        )
      )}
      <div>
        { OrderID && (
          <Card
            data-aos="zoom-out"
            className="CardFinish"
            style={{ height: "15rem", width: "35rem" }}
          >
            <CardGroup className="CardFinishContainer">
              <Card.Title className="mb-4">Compra Finalizada con Exito!</Card.Title>
              <Card.Subtitle className="mb-4">{`Su codigo de compra es: ${OrderID}`}</Card.Subtitle>
              <Link to="/">
                <Button bsPrefix={"btnCard"}>Ir al Inicio</Button>{" "}
              </Link>
            </CardGroup>
          </Card>
        )}
      </div>
      
    </div>
  );
};

export default Checkout;
