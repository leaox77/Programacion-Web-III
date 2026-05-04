import { useState } from "react";
function FormRegistro(){
const inicial = { nombre: '', email:'', carrera:''}
const [form, setForm] = useState(inicial)
const [enviado, setEnviado] = useState(false)
const handleChange = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value})
}
const handleSubmit = (evento) => {
    evento.preventDefault()
    setEnviado(true)
    setForm(inicial)
    setTimeout(()=> setEnviado(false), 3000)
}

return (
    <div style={{display: 'flex', gap:'2rem'}}>
        <form onSubmit={handleSubmit}>
            <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="ingrese nombre" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="ingrese email" />
            <input name="carrera" value={form.carrera} onChange={handleChange} placeholder="ingrese carrera" />
            <button type="submit">Registrar</button>
            {enviado && <p>Registro exitoso</p>}
        </form>

        <div>
            <h3>Vista previa</h3>
            <p>Nombre: {form.nombre || '---'}</p>
            <p>Email: {form.email || '---'}</p>
            <p>Carrera: {form.carrera || '---'}</p>
        </div>
    </div>
)

}
export default FormRegistro;