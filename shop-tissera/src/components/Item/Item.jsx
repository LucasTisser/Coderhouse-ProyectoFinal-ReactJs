import React from 'react';
// import Contador from '../ItemCount/ItemCount';
import './Item.css'

export const Item = ({item}) => {

        traerProductos()
        .then( (res) => {
                    const datos = res;

                    datos.map( (res) => (
                        console.log(res.producto)
                                        )
                            )
                        }
                )
            return (            
                    <div className='itemCard'>
                        <img src="" alt="" />
                        <h2>hola</h2>
                        <p>hola</p>
                    </div>
                    )


            
            // <div className='itemCard'>
                
            //         <Contador stock={15} initial={0}/>
            // </div>

                
        
            }

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
