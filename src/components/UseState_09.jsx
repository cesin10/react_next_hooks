import React, {useState} from "react";


export default () => {

    const [login, setLogin] = useState(false)
    const [btnText, setbtnText] = useState('Login')

    return(
        <>
        <h3>Condicional rendering - Fake Login</h3>
        <button onClick={() => {
            setLogin(!login);
            setbtnText(login ? 'Logar!':'Logout!')

        }}>{btnText}</button>
        
        {login && <p>Usuário logado!</p> }
        </>
    )
}