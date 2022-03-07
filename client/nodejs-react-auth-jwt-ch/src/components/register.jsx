import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import validarPassword from "../js/confirmPass";
import validRegister from "../js/validRegister";
import UserContext from "../context/userContext";


function Register(){

    const [nombre, setNombre] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {loginStatus, setLoginStatus, login, setLogin} = useContext(UserContext);

    const navegar = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:4000/Registrar", {
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

            if (loginStatus == true){
                navegar("/");
            } else {
                navegar("/Register/");
            }
        })
        .catch(error => console.log(error))

        
    }, [loginStatus]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validarPassword() == "error"){
            alert("Las contraseñas no coinciden");
        } else {

            let data = {
                nombre : nombre,
                email: email,
                password : password
            }

            fetch("http://localhost:4000/Registrar", {
                method: "POST",
                body: JSON.stringify(data),
                headers : {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then((data) =>{
                validRegister(data);
            })
            .catch(error => console.log(error));
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
            <div className="DivRespuesta"></div>
        </section>
    );
}

export default Register;