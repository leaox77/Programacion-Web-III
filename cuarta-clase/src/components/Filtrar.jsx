import { useState } from "react";

function Filtrar(){
    const [personas, setPersonas] = useState([
        {id: 1, nombre: 'ana', carrera: 'informatica'},
        {id: 2, nombre: 'beto', carrera: 'derecho'},
        {id: 3, nombre: 'berto', carrera: 'sociales'},
        {id: 4, nombre: 'fer', carrera: 'arquitectura'}
    ])
    const [busqueda, setBusqueda] = useState('')

    //calculo en el renderizado
    const filtradas = personas.filter(persona =>
        persona.nombre.includes(busqueda)
    )

    return (
        <div>
            <input value={busqueda} onChange={evento => setBusqueda(evento.target.value)} placeholder="Buscar..." />
            <p>{filtradas.length} resultado(s)</p>
            {filtradas.map(persona => <p key={persona.id} > {persona.nombre} - {persona.carrera} </p>)}
            {filtradas.length === 0 && <p>Sin resultados</p>}
        </div>
    )
}

export default Filtrar;