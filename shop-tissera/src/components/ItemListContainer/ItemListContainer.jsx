import React,{useEffect, useState} from 'react'
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';


function traerProductos() {
  const promesaProductos = new Promise( (resolve, reject) =>{
      const dataProductos = [
  {
  id: 1,
  producto: "Caramelos Buttertoffees",
  precio: "$" + 500 ,
  img: "sd" 
  },
  {
  id: 2,
  producto: "Flynn Paff",
  precio: "$"+450,
  img: "hl" 
  },
  {
  id: 3,
  producto: "Sugus confitados",
  precio: "$"+700,
  img: "as" 
  },
  {
  id: 4 ,
  producto: "Mogul",
  precio: "$"+650,
  img:  "fgtkm"
  },
      ];
      setTimeout( () => {
          resolve(dataProductos);
      }, 2000 )
  })
  return promesaProductos;
  }
const ItemListContainer = (props) => {

  const [items, setItem] = useState([])
  useEffect( () => {
    traerProductos()
    .then( (res) => { setItem(res) } )
    .catch((error) => console.log("Ha lanzado un error", error))
  }, [] )
  return (
    <div className='listContainer'>
        {props.greeting}

        <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer
