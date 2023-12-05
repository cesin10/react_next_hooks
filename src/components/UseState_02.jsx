import { useState } from "react"
export default () => {

const [valor, setValor] = useState(0)

function diminuir(){
    setValor(v => v - 1)
}
function aumentar(){
    setValor(v => v + 1)
}

function diminuir_valor(a){
    setValor(v => v - a)
}

function chamada(){
    diminuir_valor(10)
}
    return(

        <>
         <h4>useState</h4>
         <p>Valor: {valor}</p> 
         <button onClick={aumentar}>Aumentar</button>
         <button onClick={diminuir}>Diminuir</button>
         
         {/*Ao passar um valor no evento onClick usando o useState temos obrigatóriamente
         que invocar uma função, seja anônima ou nomeada, senão o useState entra em looping
         travando a aplicação*/}


         {/*O comando abaixo invoca uma função nomeada de nome "chamada"
         que é uma função somente para evitar o looping do useState */}
         <button onClick={chamada}>Diminuir+ com função nomeada</button>

         {/*O comando abaixo usa uma função anônima para não dar looping no useState */}
         <button onClick={() => diminuir_valor(10)}>Diminuir+ com função anônima </button>
        </>
    )
}