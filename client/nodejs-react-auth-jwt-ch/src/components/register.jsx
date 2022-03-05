import { React, useState } from "react";
import "../styles/register.css";
import validarPassword from "../js/confirmPass";


function Register(){

    const [nombre, setNombre] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validarPassword() == "error"){
            alert("Las contraseñas no coinciden");
        } else {
            console.log(nombre);
        }
    }

    return(
        <section className="registerSec">
            <h3>Registro</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>{setNombre(e.target.value)}} required type="text" placeholder="Introduce tu nombre" name="nombre" />
                <br />
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" required placeholder="Introduce tu email" name="email"/>
                <br />
                <input className="pass" required type="password" placeholder="Introduce tu contraseña"/>
                <br />
                <input onChange={(e)=>{setPassword(e.target.value)}} className="pass" required type="password" placeholder="Confirma tu contraseña" name="pass"/>
                <br />
                <button>Registrarse</button>
            </form>
        </section>
    );
}

export default Register;