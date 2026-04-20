import { useState } from "react";

function FormularioUsuario(){
    const [ form, setForm ] = useState({
        nombre: '',
        email: '',
        edad: ''
    })
    const handleChange = (evento) => {
        setForm({ ...form, [evento.target.name]: evento.target.value })
    }

    return (
        <div>
            <input name="nombre" type="text" />
        </div>
    )
}