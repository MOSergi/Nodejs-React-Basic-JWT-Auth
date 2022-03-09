import { React, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import UserContext from "../context/userContext";
import "../styles/Navbar.css";

function Navbar(){


    const {loginStatus, setLoginStatus} = useContext(UserContext);

    useEffect(()=>{
        fetch("http://localhost:4000/validateLoged", {
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((datos) =>{
            if (datos == "NoToken"){
                setLoginStatus(false);
            } else if (datos == "Invalid Token"){
                setLoginStatus(false);
            } else if (datos == "LogedIn"){
                setLoginStatus(true);
            }
        })
        .catch(error => console.log(error))

    }, [])

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