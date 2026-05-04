import { useState } from "react"

function Parametros(){
    const [color, setColorElegido] = useState('');

    const seleccionar = (color)=>{
        setColorElegido(color)
    }
    
    const items = [
        {id:1,nombre: 'rojo' },
        {id:2,nombre: 'azul' }
    ]
        

    return (
        <div>
            <button onClick={()=> seleccionar('rojo')}>Rojo</button>
            <button onClick={()=> seleccionar('azul')}>Azul</button>
        <ul>
            {items.map(item =>{
                <li key={item.id}>
                    {item.nombre}
                    <button onClick={() => eliminar(item.id)}>eliminar</button>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Parametros;