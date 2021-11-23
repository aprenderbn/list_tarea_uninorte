import React from 'react'

export default function TodoList({listas}){
    return(
        <ul>
            {listas.map((lista)=>(//hay que poner parentesis no llaves, creo que es por que esta la funcion dentro de llaves
                <li>Trea</li>
            )
            )}
        </ul>
    )
}