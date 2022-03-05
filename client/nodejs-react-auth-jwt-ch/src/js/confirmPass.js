
function validarPassword(){
    let passwords = document.querySelectorAll(".pass");

    if (passwords[0].value != passwords[1].value){
        return "error";
    }
}


export default validarPassword;