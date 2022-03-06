import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import validateLogin from "../js/validateLogin";

function Login(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    let navegar = useNavigate();

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