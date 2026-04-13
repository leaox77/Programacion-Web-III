function Tarjeta(props){
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>Precio: Bs{props.precio}</p>
        </div>
    )
}

export default Tarjeta;