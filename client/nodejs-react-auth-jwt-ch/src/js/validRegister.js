
function validRegister(data){
    //cogemos el section para meter luego los elementos
    const DivRespuesta = document.querySelector(".DivRespuesta");
    //creamos los elementos a mostrar
    let div = document.createElement("div");
    let h3 = document.createElement("h3");

    DivRespuesta.innerHTML = "";

    if (data == "Invalid Email"){
        //aplicando estilos al div
        div.style.backgroundColor = "red";
        div.style.color = "white";
        div.style.padding = "15px";
        div.style.borderRadius = "5px";
        //añadimos el texto al H3
        h3.innerText = "Este correo no es valido, intentelo con otro";
        //añadimos el h3 al div
        div.append(h3);
        //añadimos el div al section
        DivRespuesta.append(div);
    } else if (data == "Register Error") {
        div.style.backgroundColor = "yellow";
        div.style.padding = "15px";
        div.style.borderRadius = "5px";
        //añadimos el texto al H3
        h3.innerText = "Error durante el registro";
        //añadimos el h3 al div
        div.append(h3);
        //añadimos el div al section
        DivRespuesta.append(div);
    } else {
        div.style.backgroundColor = "rgb(58, 140, 233)";
        div.style.color = "white";
        div.style.padding = "15px";
        div.style.borderRadius = "5px";
        //añadimos el texto al H3
        h3.innerText = "Registro satisfactorio";
        //añadimos el h3 al div
        div.append(h3);
        //añadimos el div al section
        DivRespuesta.append(div);
    }
}


export default validRegister;