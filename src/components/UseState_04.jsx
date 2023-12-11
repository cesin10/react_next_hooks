import React from "react"
import './UseState_04.css'
import UseState_04a from "./UseState_04a"

export default () => {
    return (
        <>
        <h4>Exercício 02</h4>
        <div className="layout">
            <UseState_04a props={1} />
            <UseState_04a props={5}/>
            <UseState_04a props={10} />

        </div>
        </>
    )
}