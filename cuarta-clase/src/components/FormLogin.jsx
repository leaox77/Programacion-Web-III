import { useState } from "react";
import { useNavigate } from "react-router-dom";
function FormLogin(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log('redirigiendo a lista')
        navigate(-1)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={evento => setEmail(evento.target.value)} placeholder="Email" />
            <button type="submit">Entrar</button>
        </form>
    )
}
export default FormLogin;