import { Route, useParams } from "react-router-dom";
//ruta declarada con parametro dinamico

function Detalle(){
    const { id } = useParams()
    // id siempre va a ser un STRING, si queremos compararlo, tenemos que transformarlo

    const datos =[ 
        { id: 1, nombre: 'pepe'},
        { id:2, nombre: 'adrian'}
    ];
    const item = datos.find(d => d.id === Number(id))
    if(!item) return <p>No encontrado</p>
    return <h1>{item.nombre}</h1>
}
export default Detalle;