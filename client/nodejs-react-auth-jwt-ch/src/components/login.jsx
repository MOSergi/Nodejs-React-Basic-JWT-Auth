import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import validateLogin from "../js/validateLogin";
import UserContext from "../context/userContext";

function Login(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    let navegar = useNavigate();

    const {loginStatus, setLoginStatus} = useContext(UserContext);


    useEffect(()=>{
        fetch("http://localhost:4000/validateLoged",{
            credentials: "include"
        })
        .then(response => response.json())
        .then((userdata) => {

            let LoginSec = document.querySelector(".loginRes");
            let h3 = document.createElement("h3");

            if (LoginSec != null){
                LoginSec.innerHTML = "";
            }

            console.log(userdata);

            if (userdata == "LogedIn"){
                setLoginStatus(true);
                navegar("/Profile/");
            } else if (userdata == "NoToken") {
                setLoginStatus(false);
            } else if (userdata == "Invalid Token"){
                setLoginStatus(false);
                LoginSec.style.padding = "10px;"
                LoginSec.style.backgroundColor = "Orange";
                h3.innerText = "El token no es válido o ha caducado";
                LoginSec.append(h3);
            }

        })
        .catch(errores => console.log(errores));
    }, []);


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        let datos = {
            email : email,
            password : password
        }

        fetch("http://localhost:4000/Login", {
            method: "POST",
            body: JSON.stringify(datos),
            credentials: "include",
            headers : {
                "Content-Type": "application/json"
            }
        })
        .then(respuesta => respuesta.json())
        .then((data) => {
            if (validateLogin(data) == "valid"){
                setLoginStatus(true);
                navegar("/Profile/");
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <section className="LoginSec">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input required onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Introducde tu email" name="email"/>
                <br />
                <input required onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Introduce tu contraseña" name="password"/>
                <br />
                <button>Login</button>
            </form>
            <div className="loginRes"></div>
        </section>
    );
}


export default Login;