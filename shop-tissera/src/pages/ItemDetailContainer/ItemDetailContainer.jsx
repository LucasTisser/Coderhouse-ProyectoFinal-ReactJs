import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function traerDetalleProductos(id) {
  const promesaProductos = new Promise((resolve) => {
    const dataProductos = [
      {
        id: 1,
        producto: "Caramelos Buttertoffees",
        descripcion: "Caramelos Dulces Masticables de 5 sabores",
        precio: 500,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/butter-tofees-chocolate1-29b1f3649a5fd14f0016249928052805-480-0.png",
        dataStock: 10,
      },
      {
        id: 2,
        producto: "Flynn Paff",
        descripcion: "Caramelo sabor Tutti-Frutti",
        precio: 450,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/851/216/products/chupetines_flynn_paff1-b26b52d7d0edcdfd5916348380371442-480-0.png",
        dataStock: 15,
      },
      {
        id: 3,
        producto: "Sugus confitados",
        descripcion: "Confites surtidos de varios sabores",
        precio: 700,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/sugus1-e9d2247ae4082aad5f16062608055544-480-0.png",
        dataStock: 17,
      },
      {
        id: 4,
        producto: "Mogul",
        descripcion: "Gomitas de frutilla, menta, naranja y manzana",
        precio: 650,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/851/216/products/gomitas_mogul_en_rollo1-4d5724c8a880b8fd6216348432541646-480-0.png",
        dataStock: 20,
      },
    ];
    const data = dataProductos.filter((item) => item.id === parseInt(id));
    resolve(data[0]);
  });
  return promesaProductos;
}
function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    traerDetalleProductos(id)
      .then((res) => {
        setItemDetail(res);
      })
      .catch((error) => {
        console.log("Se ha producido un error", error);
      });
  }, [id]);
  return (
    <div className="detailContainerCards">
      <ItemDetail items={Detail} />
    </div>
  );
}
export default ItemDetailContainer;
