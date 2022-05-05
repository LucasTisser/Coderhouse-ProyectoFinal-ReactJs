import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function DetalleItem() {
    const {id} = useParams()
    useEffect(()=>{
      console.log(id)
    }, [id])

  return (
    <div>Detalle-item</div>
  )
}

export default DetalleItem