import React from 'react'

export const Button = ({texto,color,children}) => {

    // const { } = props /* codigo desestructurado */
    // console.log(texto,color)

    // const texto = props.texto; /* codigo estructurado */
    // const color = props.color;
    
    return (
        <>
        <input type="text" />
        <button style={{color:color}}> {texto ? texto : 'texto default'} </button>
        {children}
        </>
    )
}  

export default Button