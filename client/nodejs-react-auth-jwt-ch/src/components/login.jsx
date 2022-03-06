import { React, useState } from "react";
import "../styles/login.css";

function Login(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


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
            console.log(data);
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
        </section>
    );
}


export default Login;