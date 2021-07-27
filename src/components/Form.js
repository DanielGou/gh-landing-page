import { useState } from "react";
import "./Components.css"

function Form(){

    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')

    function sendForm(){

        const options = {
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body:JSON.stringify({
                name, 
                phone,
                email
            })
        }

        fetch("http://localhost:9000/api/add", options)

    }

    return(
        <div className="Form">
            <div>Entre em contato!</div>
            <form>
                <input type="text" name="name" onChange={e=> setName(e.target.value)} placeholder="Nome"/>
                <input type="text" name="phone" onChange={e=> setPhone(e.target.value)} placeholder="Telefone"/>
                <input type="text" name="email" onChange={e=> setEmail(e.target.value)} placeholder="Email"/>
                <input id="btnSubmitForm" onClick={sendForm} type="button" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form;