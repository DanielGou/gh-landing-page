import "./Cases.css"

import seta from "../assets/seta.png"

function Case(props){
    return(
        <div className="Case" id={props.theme}>
            <div className="caseSeta">
                <img src={seta} alt="seta"/>
                <div>More</div>
            </div>

            <div className="caseTitle">{props.title}</div>
            <div className="caseText">{props.text}</div>
            <div className="topics">{props.topics}</div>
            <hr/>
        </div>
    )
}

export default Case;
