import React from 'react';
import Contador from '../ItemCount/ItemCount';
import './Item.css'

export const Item = ({id, producto, precio, img}) => {
            return (  

                    <div className='itemcountain'>
                        <div id={id} className='itemCard'>
                            <img src="{}" alt="" />
                            <h2>{producto}</h2>
                            <p>{precio}</p>
                            <Contador stock={15} initial={0}/>
                    </div>
                    </div>
                    )
            }
