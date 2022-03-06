
function validateLogin(datos){

    //cojo el div donde se van a poner los mensajes
    let loginRes = document.querySelector(".loginRes");
    //creo el h3 donde se asignaran los mensajes
    let h3 = document.createElement("h3");

    loginRes.innerHTML = "";

    if (datos == "No match email"){
        loginRes.style.backgroundColor = "yellow";
        loginRes.style.padding = "10px";
        h3.innerText = "El correo introducido no corresponde con el de ningún usuario registrado";
        h3.style.color = "black";
        loginRes.append(h3);
    } else if (datos == "Invalid Password"){
        loginRes.style.backgroundColor = "red";
        loginRes.style.padding = "10px";
        h3.innerText = "Nombre de usuario o contraseña incorrectos";
        loginRes.append(h3);
    } else {
        return "valid";
    }
}



export default validateLogin;