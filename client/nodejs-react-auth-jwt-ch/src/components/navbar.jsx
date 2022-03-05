import { React } from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){
    return(
        <nav className="menu">
            <Link className="links" to="/">Home</Link>
            <Link className="links link-g" to="/Register">Registro</Link>
            <Link className="links" to="/Login">Login</Link>
        </nav>
    );
}


export default Navbar;