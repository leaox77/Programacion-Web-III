import { useState } from "react";

function ListaCompleta(){
    const [tareas, setTareas] = useState([])
    const [input, setInput] = useState('')
    const [filtro, setFiltro] = useState('todas')

    // agregar

    const agregar = () => {
        if(!input.trim()) return;
        setTareas([...tareas, {id: Date.now(), texto:input, completado: false}]);
        setInput('')
    }

    // eliminar
    const eliminar = (id) =>
        setTareas(tareas.filter(tarea => tarea.id !== id ))

    // toggle -> cambia el estado de completado
    const toggle = (id) =>
        setTareas(tareas.map(tarea =>
            tarea.id === id ? {...tarea, completado: !tarea.completado} : tarea
        ))

    const visibles = tareas.filter(tarea =>
        filtro === 'todas' ? true :
        filtro === 'pendientes' ? !tarea.completado :
        tarea.completado
    )

    const pendientes = tareas.filter(tarea=> !tarea.completado).length

    return (
        <div>
            <h2>{pendientes} pendiente(s)</h2>
            <input value={input} onChange={evento => setInput(evento.target.value)} onKeyDown={evento => evento.key==='Enter' && agregar()} />
            <button onClick={agregar}>Agregar</button>

            <div>
                {['todas', 'pendientes', 'completadas'].map(filto =>
                    <button key={filto} onClick={() => setFiltro(filto)} style={{fontWeight: filtro === filto? 'bold': 'normal'}}>{filto}</button>
                )}
            </div>

            <ul>
                {visibles.map(tarea => (
                    <li key={tarea.id}>
                        <span onClick={()=> toggle(tarea.id)} style={{textDecoration:tarea.completado?'line-through':'none', cursor:'pointer'}}>{tarea.texto}</span>
                        <button onClick={()=> eliminar(tarea.id)}>eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaCompleta;