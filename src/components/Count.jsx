//import React from 'react'
import React, { useState } from 'react' 


export default function Contar(){
    const [count, setCount] = useState(0); // hacemos el hook el cual usamos para actualizar
    return(
        <div>
            <p>Has hecho click {count} veces</p> 
            <button onClick={()=> setCount(count + 1)}>
                has Click
            </button>
        </div>
    )
}