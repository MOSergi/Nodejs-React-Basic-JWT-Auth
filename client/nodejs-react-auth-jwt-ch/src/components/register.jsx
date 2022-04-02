import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import UserContext from "../context/userContext";


function Register(){

    const [nombre, setNombre] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [password, setPassword] = useState(null);

    const {setLoginStatus} = useContext(UserContext);

    const navegar = useNavigate();

    console.log("soy register");

    useEffect(()=>{
        fetch("http://localhost:4000/validateLoged",{
            credentials: "include"
        })
        .then(response => response.json())
        .then((userdata) => {

            if (userdata == "LogedIn"){
                setLoginStatus(true);
                navegar("/Profile");
            }
        })
        .catch(errores => console.log(errores));
    }, []);

    const handleSubmit = (e)=>{
        e.preventDefault();


        if (pass != password){
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
                if (data == "Invalid Email"){
                    alert("Este email no es válido, intentelo con otro");
                } else if (data == "Register Error"){
                    alert("Error durante el registro");
                } else if (data == "Successfully Register"){
                    alert("Registro correcto");
                    navegar("/Login");
                }
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
                <input className="pass" onChange={(e)=>setPass(e.target.value)} required type="password" placeholder="Introduce tu contraseña"/>
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