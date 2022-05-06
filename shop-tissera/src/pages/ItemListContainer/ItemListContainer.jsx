import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

function traerProductos(category) {
  const promesaProductos = new Promise((resolve) => {
    const dataProductos = [
      {
        id: 1,
        producto: "Caramelos Buttertoffees",
        precio: "$" + 500,
        img: "https://gruponaomis.com/wp-content/uploads/2021/01/BUTTER-TOFEE-SURTIDO_800px-min.png",
        category: "golosina",
        dataStock: 10,
      },
      {
        id: 2,
        producto: "Flynn Paff",
        precio: "$" + 450,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/851/216/products/chupetines_flynn_paff1-b26b52d7d0edcdfd5916348380371442-480-0.png",
        category: "golosina",
        dataStock: 15,
      },
      {
        id: 3,
        producto: "Sugus confitados",
        precio: "$" + 700,
        img: "https://storage.googleapis.com/comprarporwhatsapp-19eb8.appspot.com/FgXNnZge5egzJONZIHjF/products/renditions/1601924769077_thumb.png",
        category: "chocolate",
        dataStock: 17,
      },
      {
        id: 4,
        producto: "Mogul",
        precio: "$" + 650,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/851/216/products/gomitas_mogul_en_rollo1-4d5724c8a880b8fd6216348432541646-480-0.png",
        category: "chocolate",
        dataStock: 20,
      },
    ];
    const categoryFilter = category
      ? dataProductos.filter((p) => p.category === category)
      : dataProductos;
    setTimeout(() => {
      resolve(categoryFilter);
    }, 2000);
  });
  return promesaProductos;
}
const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    traerProductos(categoryId)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => console.log("Ha lanzado un error", error));
  }, [categoryId]);
  return (
    <div className="listContainer">
      <div className="itemscontainer">
        <ItemList items={items} />
      </div>
    </div>
  );
};
export default ItemListContainer;
