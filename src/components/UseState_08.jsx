import React, { useState } from "react";

export default () => {
    const tmp = [{
        Nome:'',
        apelido:'', 
        cidade:'', 
        email:''
    }

    ]

    const [cliente, setCliente] = useState(tmp)

    return(

        <>
        <h3>Exercício 07</h3>
        <hr />

       <ul>
        <li>Nome:{cliente.Nome}</li>
        <li>Apelido: {cliente.apelido} </li>
        <li>Cidade: {cliente.cidade }</li>
        <li>Email: {cliente.email} </li>
       </ul>
        <button onClick={()=>{
            const c = {...cliente}
            c.Nome='César'
            setCliente(c)
        }}>Nome</button>

        <button onClick={()=>{
            const c = {...cliente}
            c.apelido='José'
            setCliente(c)
        }}>Nome</button>

        <button onClick={()=>{
            const c = {...cliente}
            c.cidade='São José do Rio Preto'
            setCliente(c)
        }}>Nome</button>

        <button onClick={()=>{
            const c = {...cliente}
            c.email='cjfreitas@cesar.empro.com.br'
            setCliente(c)
        }}>Nome</button>

        


     
        </>
    )
}