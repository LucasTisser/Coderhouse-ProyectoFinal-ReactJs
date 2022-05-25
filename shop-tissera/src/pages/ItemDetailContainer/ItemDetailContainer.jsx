import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import db from "../../services/firebase";

function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);
  const { id } = useParams();

  const traerDetalleProductos = async (idItem) => {
    try {
      const itemRef = doc(db, "Items", idItem);
      const response = await getDoc(itemRef);
      const result = { id: response.id, ...response.data() };
      setItemDetail(result);
    } catch (error) {
      console.log("se ha producito otro error en itemdetailContainer" + error);
    }
  };

  useEffect(() => {
    traerDetalleProductos(id);
  }, [id]);

  return (
    <div className="detailContainerCards">
      <ItemDetail items={Detail} />
    </div>
  );
}
export default ItemDetailContainer;
