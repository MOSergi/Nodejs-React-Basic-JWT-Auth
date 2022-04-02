import { React, useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import UserContext from "../context/userContext";
import "../styles/Navbar.css";

function Profile(){

    const {setLoginStatus} = useContext(UserContext);
    const [username, setUsername] = useState("");

    console.log("soy profile");

    const navegar = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:4000/Profile",{
            credentials : "include"
        })
        .then(respuesta => respuesta.json())
        .then((info) =>{
            if (info == "Invalid Token"){
                setLoginStatus(false);
                navegar("/Login/");
            } else if (info == "NoToken") {
                setLoginStatus(false);
                navegar("/Login");
            } else {
                setUsername(info);
                setLoginStatus(true);
            } 
        })
        .catch(error => console.log(error))
    }, [])

    const logout = ()=>{
        fetch("http://localhost:4000/Logout",{
            credentials : "include",
        })
        .then(respuestaa => respuestaa.json())
        .then((values) =>{
            if (values == "Success Logout"){
                setLoginStatus(false);
                navegar("/Login/");
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <section style={{"textAlign": "center"}}>
            <h2>Bienvenido {username} </h2>
            <button onClick={()=>{logout()}} style={{"padding" : "10px", "marginTop" : "10px", "cursor": "pointer"}}>Logout</button>
        </section>
    );
}


export default Profile;