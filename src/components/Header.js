import './Components.css'

import logo from "../assets/logo.png"
import menu from '../assets/icon-menu.png'

function Header(){
    return(
        <div className="Header">
            <img src={logo} alt="logo"/>
            <div>
                <div>Work</div>
                <div>Service</div>
                <div>About</div>
                <div>Contact</div>
                <div>Bra/Eua</div>
                <img src={menu} alt=""/>
            </div>
        </div>
    )
}

export default Header