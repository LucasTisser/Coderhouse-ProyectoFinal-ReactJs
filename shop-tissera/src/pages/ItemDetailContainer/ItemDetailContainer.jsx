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
        descripcion: "Caramelos Dulces mMsticables de 5 sabores",
        precio: "$" + 500,
        img: "https://gruponaomis.com/wp-content/uploads/2021/01/BUTTER-TOFEE-SURTIDO_800px-min.png",
      },
      {
        id: 2,
        producto: "Flynn Paff",
        descripcion: "Caramelo sabor Tutti-Frutti",
        precio: "$" + 450,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/851/216/products/chupetines_flynn_paff1-b26b52d7d0edcdfd5916348380371442-480-0.png",
      },
      {
        id: 3,
        producto: "Sugus confitados",
        descripcion: "Confites surtidos de varios sabores",
        precio: "$" + 700,
        img: "https://storage.googleapis.com/comprarporwhatsapp-19eb8.appspot.com/FgXNnZge5egzJONZIHjF/products/renditions/1601924769077_thumb.png",
      },
      {
        id: 4,
        producto: "Mogul",
        descripcion: "Gomitas de frutilla, menta, naranja y manzana",
        precio: "$" + 650,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/851/216/products/gomitas_mogul_en_rollo1-4d5724c8a880b8fd6216348432541646-480-0.png",
      },
    ];
    const data = dataProductos.filter((item) => item.id === parseInt(id));
    setTimeout(() => {
      resolve(data[0]);
    }, 2000);
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
