import { useState, useContext } from "react";
import { CartContext } from "../../store/CartContext";
import db from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Checkout.css";
import Card from "react-bootstrap/Card";

const Checkout = () => {
  const { products, getTotalPrice, clear } = useContext(CartContext);
  const [load, setLoad] = useState(false);
  const [OrderID, setOrder] = useState(false);

  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });

  const { Nombre, Email, Telefono } = buyer;
  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
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
    console.log("data", data);
    generateOrder(data);
  };
  return (
    <div className="checkout">
      {/* <h1>Finalizando Compra</h1> */}
      {load ? (
        <Spinner />
      ) : (
        !OrderID && (
          <Card
            className="CardForm"
            style={{ height: "17rem", width: "20rem" }}
          >
            <h4>Completa los Datos para finalizar su compra:</h4>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Nombre"
                placeholder="Nombre"
                value={Nombre}
                onChange={handleInputChange}
                required
              />
              <br />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={Email}
                onChange={handleInputChange}
                required
              />
              <br />
              <input
                type="number"
                name="Telefono"
                placeholder="Telefono"
                value={Telefono}
                onChange={handleInputChange}
                required
              />
              <br /> <br />
              <input
                type="submit"
                value="Finalizar Compra"
                className="btn btn-success mb-2"
                required
              />
            </form>
          </Card>
        )
      )}
      <div>
        {OrderID && (
          <Card
            className="CardFinish"
            style={{ height: "10rem", width: "35rem" }}
          >
            <div>
              <h4>Compra Finalizada con Exito</h4>
              <h4>{`Su codigo de compra es: ${OrderID}`}</h4>
              <Link to="/">
                <Button variant="primary">Ir al inicio</Button>{" "}
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Checkout;
