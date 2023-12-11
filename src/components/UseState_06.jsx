import React from "react";
import { useState } from "react";
import UseState6a from "./UseState6a";

export default () => {

const [valor1, setValor1] = useState(0);
const [valor2, setValor2] = useState(0);

function decValor1(){ setValor1(vlr1 => vlr1 -5) }
function incValor1(){ setValor1(vlr1 => vlr1 +5) }

function decValor2(){ setValor2(vlr2 => vlr2 -5) }
function incValor2(){ setValor2(vlr2 => vlr2 +5) }


    return(
        <>
         <h1>Excercício 04</h1>
         <h3>Adição de {valor1} + {valor2}= <strong> {valor1 + valor2} </strong></h3>
         <hr />
         <UseState6a funcaoDec={decValor1} funcaoInc={incValor1} />
         <hr />
         <UseState6a funcaoDec={decValor2} funcaoInc={incValor2} />

        </>
    )
}