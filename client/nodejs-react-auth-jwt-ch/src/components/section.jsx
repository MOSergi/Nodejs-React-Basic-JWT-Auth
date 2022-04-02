import {React, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/section.css";
import jwt_logo from "../resources/jwt-logo.png";
import UserContext from "../context/userContext";

function Section(){

    console.log("soy home");

    const { loginStatus, setLoginStatus } = useContext(UserContext);

    useEffect(()=>{
        fetch("http://localhost:4000/validateLoged",{
            credentials: "include"
        })
        .then(response => response.json())
        .then((userdata) => {

            if (userdata == "LogedIn"){
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }

        })
        .catch(errores => console.log(errores));
    }, []);

    return(
        <section className="Seccion">
            <div>
                <h2>Autenticación con JWT en React y Nodejs</h2>
                <h4 style={{width: "55%"}}>La función de esta app es mostrar un ejemplo de autenticación
                    con tokens JWT en React y Nodejs. Esta aplicación solo ofrece
                    una orientación de como autenticar usuarios mediante JWT por lo
                    que nos encontramos delante de una aplicación de "Prueba/Ejemplo".
                </h4>
                <img src={jwt_logo} alt="jwt-logotipe"/>
                <Link className="toRegister" to={ loginStatus ? "/Profile" : "/Register"}>Comenzar</Link>
            </div>
        </section>
    );
}

export default Section;