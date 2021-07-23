import "./Components.css"

function Form(){
    return(
        <div className="Form">
            <div>Entre em contato!</div>
            <form>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Telefone"/>
                <input type="text" placeholder="Email"/>
                <input id="btnSubmitForm" type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form;