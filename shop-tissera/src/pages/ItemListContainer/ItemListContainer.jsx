import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where, limit} from "firebase/firestore";


function traerProductos(category) {
  const db = getFirestore();

    const itemCollection = collection(db, 'Items')

    const q = query(
      itemCollection,
    )

  return getDocs(q)
}
const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
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
    traerProductos(categoryId)
      .then(snapshot => {
        setItem(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id}} ));
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
