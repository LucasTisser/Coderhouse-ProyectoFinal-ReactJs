import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import db from "../../services/firebase";
import Spinner from "../../components/Spinner/Spinner";


function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  const traerDetalleProductos = async (idItem) => {
    setLoad(true);
    try {
      const itemRef = doc(db, "Items", idItem);
      const response = await getDoc(itemRef);
      const result = { id: response.id, ...response.data() };
      setItemDetail(result);
      setLoad(false);
    } catch (error) {
      console.log("se ha producito otro error en itemdetailContainer" + error);
    }
  };

  useEffect(() => {
    traerDetalleProductos(id);
  }, [id]);

  return (
    <div className="detailContainerCards">
      {
        load ? <Spinner/> : <ItemDetail items={Detail} />
      }
      
    </div>
  );
}
export default ItemDetailContainer;
