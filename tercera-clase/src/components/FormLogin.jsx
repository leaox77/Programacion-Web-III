import { useState } from "react";

function FormLogin(){
    const [form, setForm] = useState({ email: '', password: '' })

    const handleChange = (evento)=>{
        setForm({...form, [evento.target.name]: evento.target.value})
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log('login con ', form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            <input type="text" name="password" value={form.password} onChange={handleChange} />
            <button type="submit">Iniciar Sesion</button>
        </form>
    )
}

export default FormLogin;