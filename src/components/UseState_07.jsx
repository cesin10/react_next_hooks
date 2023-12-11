import React from "react";
import { useState } from "react";
import UseState7a from "./UseState7a";

export default () => {

const [valor, setValor] = useState([0,0,0]);


function decValor1(){
        setValor([valor[0] - 1, valor[1], valor[2]]); 
      };

function decValor2(){
        setValor([valor[0], valor[1] -1, valor[2]]); 
      };

function decValor3(){
        setValor([valor[0], valor[1], valor[2] -1]); 
      };

      
function incValor1(){
        setValor([valor[0] +1, valor[1], valor[2]]); 
      };

function incValor2(){
        setValor([valor[0], valor[1] +1, valor[2]]); 
      };

function incValor3(){
        setValor([valor[0], valor[1], valor[2] +1]); 
      };








    return(
        <>
         <h1>Excercício 05</h1>
         <ul>
            <li>{valor[0]}</li>
            <li>{valor[1]}</li>
            <li>{valor[2]}</li>
         </ul>
         <hr />
         <UseState7a funcaoDec={decValor1} funcaoInc={incValor1} />
         <hr />
         <UseState7a funcaoDec={decValor2} funcaoInc={incValor2} />
         <hr />
         <UseState7a funcaoDec={decValor3} funcaoInc={incValor3} />

        </>
    )
}