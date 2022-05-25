import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../services/firebase";

const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const { categoryId } = useParams();
  const traerProductos = async (category) => {
    try {
      const q = category
        ? query(collection(db, "Items"), where("category", "==", category))
        : collection(db, "Items");
      const col = await getDocs(q);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setItem(result);
    } catch (error) {
      console.log("se ha producido un error." + error);
    }
  };
  useEffect(() => {
    traerProductos(categoryId);
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

// ---- use efect ---
// const db = getFirestore();
// const itemCollection = collection(db, 'Items')
// const q = query(
//       itemCollection,
//       where('precio','>', 500),
//       limit(1)
//     )
// return getDocs(q)
// .then(snapshot => {
//   console.log(snapshot.docs[0].id)
//   console.log(snapshot.docs[0].data())
//   console.log(snapshot.docs.map(doc => {return {...doc.data(), id: doc.id}
//   }))
// })
// .catch(err => console.log(err))
