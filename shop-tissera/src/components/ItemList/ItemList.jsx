import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {
  return (
    <div>
        {/* {console.log("aqui esta mi item list", items)} */}
        {items.map( item => {
          console.log(items)
          return (
            <Item key={item.id} producto={item.producto} precio={item.precio} />
          )
        })}
    </div>
  )
}