import {React} from "react";
import "../styles/section.css";

function Section(){
    return(
        <section className="Seccion">
            <h2>Autenticación con JWT en React y Nodejs</h2>
            <h4>La función de esta app es mostrar un ejemplo de autenticación
                con tokens JWT en React y Nodejs. Esta aplicación solo ofrece
                una orientación de como autenticar usuarios mediante JWT por lo
                que nos encontramos delante de una aplicación de "Prueba".
            </h4>
        </section>
    );
}

export default Section;