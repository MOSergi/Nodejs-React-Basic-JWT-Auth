import { React, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import UserContext from "../context/userContext";
import "../styles/Navbar.css";

function Navbar(){


    const {loginStatus, setLoginStatus} = useContext(UserContext);

    if (loginStatus == true){
        return(
            <nav className="menu">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/Profile">Perfil</Link>
            </nav>
        );
    } else {
        return(
            <nav className="menu">
                <Link className="links" to="/">Home</Link>
                <Link className="links link-g" to="/Register">Registro</Link>
                <Link className="links" to="/Login">Login</Link>
            </nav>
        );
    }
}


export default Navbar;