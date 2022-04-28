import React from 'react'
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';


const ItemListContainer = props => {

  return (
    <div className='listContainer'>
        {props.greeting}

        <ItemList/>
    </div>
  )
}
export default ItemListContainer
