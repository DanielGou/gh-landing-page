import { useState } from "react";
import "./Components.css"

import check from "../assets/check.png"

function Form(){

    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ response, setResponse ] = useState()

    function sendForm(){

        // Configuração do fetch
        const options = {
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body:JSON.stringify({
                name, 
                phone,
                email
            })
        }

        // Validação dos valores pelo front-end
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

        
        //Requisição na API
        fetch("http://localhost:9000/api/add", options)
            .then(res=>{
                return res.json()
            }).then(data=>{
                if(data.status === "error"){
                    alert(data.error + " Envie os contatos novamente.")
                }
                else{
                    setResponse('ok')
                }
            })

    }

    if(!response){
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
    }else{
        return(
            <div className="Form">
                <div className='check'>
                    <img src={check} alt="check"/>
                    <div>Recebido!</div>
                </div>
            </div>
        )
    }
}

export default Form;