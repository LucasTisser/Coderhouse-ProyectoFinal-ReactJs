import React from 'react'
import './ItemListContainer.css';
import Contador from '../ItemCount/ItemCount';

const ItemListContainer = props => {

  return (
    <div className='listContainer'>
        {props.greeting}
        

        <div className='itemCard'>
          <h1>Caramelos</h1>
          <Contador stock={5} initial={1}/>
        </div>
        
    </div>
  )
}
export default ItemListContainer
