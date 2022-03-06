import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import validateLogin from "../js/validateLogin";
import UserContext from "../context/userContext";

function Login(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    let navegar = useNavigate();

    const {loginStatus, setLoginStatus, login, setLogin} = useContext(UserContext);
    const [prueba, setPrueba] = useState("");


    useEffect(()=>{
        fetch("http://localhost:4000/Login",{
            credentials: "include"
        })
        .then(response => response.json())
        .then((userdata) => {
            if (userdata != "noToken"){
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }

            if (login == true && loginStatus == true){
                navegar("/");
            } else if (login == false && loginStatus == true){
                navegar("/");
            } else if (login == true && loginStatus != true){
                navegar("/Login/");
            } else if (login == false && loginStatus != true){
                navegar("/Login/");
            }

        })
        .catch(errores => console.log(errores));
    }, [loginStatus]);


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
                setLogin(true);
                navegar("/");
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
            <div className="loginRes">

            </div>
        </section>
    );
}


export default Login;