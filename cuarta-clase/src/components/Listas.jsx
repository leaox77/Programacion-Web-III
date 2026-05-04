import { useState } from "react";

function Listas(){
    const id = 2
    const [items, setItems] = useState([
        {id: 1, texto: 'React', completado: false},
        {id: 3, texto: 'React', completado: false},
    ])

    // agregar

    const agregar = (texto) =>
        setItems([...items, {id: Date.now(), texto, completado: false}])

    // eliminar
    const eliminar = (id) =>
        setItems(items.filter(objeto => objeto.id !== id ))

    // toggle -> cambia el estado de completado
    const toggle = (id) =>
        setItems(items.map(objeto =>
            objeto.id === id ? {...objeto, completado: !objeto.completado} : objeto
        ))

    // editar -> cambiar el texto
    const editar = (id, nuevoTexto) =>
        setItems(items.map(objeto =>
            objeto.id === id ? {...objeto, texto: nuevoTexto} : objeto
        ))
}