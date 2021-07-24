import './Components.css'

function Card(props){
    return(
        <div className="Card">
            <div className="titleCard">{props.title}</div>
            <div className="textCard">{props.text}</div>
        </div>
        
    )
}

export default Card;