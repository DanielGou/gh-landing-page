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

        if( name === "" && name.length <= 2 && typeof username !== 'string'){
            alert("Nome inválido!")
            return
        }
        
        if( phone === "" && phone.length < 8 && typeof username !== 'string'){
            alert("Número inválido!")
            return
        }

        var regex = /\S+@\S+\.\S+/;
        if( regex.test(email) === false){
            alert("email inválido!")
            return
        }


        fetch("http://localhost:9000/api/add", options)
            .then(res=>{
                return res.json()
            }).then(data=>{
                if(data.status === "error"){
                    alert("[ERROR] Envie os contatos novamente.")
                }
            })

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