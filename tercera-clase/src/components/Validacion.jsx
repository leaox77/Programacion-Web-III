import { useState } from "react";

function FormLoginValidacion(){
    const [form, setForm] = useState({ nombre: '', email: '' })
    const [errores, setErrores] = useState({})
    const [ok, setOk] = useState(false)

    const handleChange = (evento)=>{
        setForm({...form, [evento.target.name]: evento.target.value})
    }

    const validar = () => {
        const e = {}
        if (!form.nombre.trim())
        if (!form.email.includes('@'))
        return e;
    }


    const handleSubmit = (evento) => {
        evento.preventDefault()
        const e2 = validar()
        if (Object.keys(e2).length > 0) {setErrores(e2); return}
        setErrores({})
        setOk(true)
        console.log('login con ', form)
        console.log('errores ', errores)
        console.log("es valido? ", ok)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
            {errores.nombre && <p style={{color:'red'}}>{errores.nombre}</p>}
            <input type="text" name="email" value={form.email} onChange={handleChange} />
            {errores.email && <p style={{color:'red'}}>{errores.email}</p>}
            <button type="submit">Iniciar Sesion</button>
            {ok && <p style={{color:'green'}}>Enviado con exito</p>}
        </form>
    )
}

export default FormLoginValidacion;