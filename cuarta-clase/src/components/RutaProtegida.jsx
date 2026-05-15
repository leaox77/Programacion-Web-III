import { useNavigate } from "react-router-dom";

function RutaProtegida({children}){
    const navigate = useNavigate()
    const estadoLogueado = false;

    if(!estadoLogueado) {
        navigate('/e', {replace: true})
        return null
    }
    return children
}
export default RutaProtegida;