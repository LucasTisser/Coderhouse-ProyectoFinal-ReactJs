import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function traerDetalleProductos() {
  const promesaProductos = new Promise((resolve) => {
    const dataProductos = [
      {
        id: 1,
        producto: "Caramelos Buttertoffees",
        descripcion: "Caramelos Dulces mMsticables de 5 sabores",
        precio: "$" + 500,
        img: "sd",
      },
      {
        id: 2,
        producto: "Flynn Paff",
        descripcion: "Caramelo Dulce sabor frutilla",
        precio: "$" + 450,
        img: "hl",
      },
      {
        id: 3,
        producto: "Sugus confitados",
        descripcion: "Confites surtidos de varios sabores",
        precio: "$" + 700,
        img: "as",
      },
      {
        id: 4,
        producto: "Mogul",
        descripcion: "Gomitas de frutilla, menta, naranja y manzana",
        precio: "$" + 650,
        img: "fgtkm",
      },
    ];
    setTimeout(() => {
      resolve(dataProductos);
    }, 2000);
  });
  return promesaProductos;
}
function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);

  useEffect(() => {
    traerDetalleProductos()
      .then((res) => {
        setItemDetail(res);
      })
      .catch((error) => {
        console.log("Se ha producido un error", error);
      });
  });

  return (
    <div className="detailContainer">
      <div className="detailContainerCards">
        {Detail.map((item) => {
          return (
            <ItemDetail
              key={item.id}
              producto={item.producto}
              descripcion={item.descripcion}
              precio={item.precio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
