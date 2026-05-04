import { useState } from "react"

function FormularioControlado(){
    const [ nombre, setNombre] = useState('')
    return (
        <div>
            {/*no controlado */}
            {/*<input type="text" />*/}

            {/*flujo ->  usuario que escribe -> onChange -> setState -> React va a re-renderizar */}

            <input value={nombre} onChange={(evento) => setNombre(evento.target.value)} />
        </div>
    )
}