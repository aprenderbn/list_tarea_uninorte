import React from 'react'

//estamos usando props sin variables 
export default function Saludar(tem){

    return(
        <div>
            <h2>La edad de {tem.nombre}, son {tem.edad} años </h2>
        </div>
    )
}