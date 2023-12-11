import React from "react"
import { useState } from "react"


export default ({props}) => {

    const [valor, setValor]  = useState(0)
    
    function decrementar(){
        setValor(v => v - props)
    }
    
    function incrementar(){
        setValor(v => v + props)
    }
    return (
        <>

        <button onClick={decrementar}>-</button>
        <h3>Valor: <strong>{valor}</strong></h3>
        <button onClick={incrementar}>+</button>
        

      
        </>
    )
}