import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div>
            <h1>404 - Pagina no encotnrada</h1>
            <p>La URL que busas no existe</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    )
}

export default NotFound;