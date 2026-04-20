function Tarjeta({nombre, precio, disponible }){
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio: Bs{precio}</p>
            <p>{disponible ? 'En stock' : 'Agotado'}</p>
        </div>
    )
}

export default Tarjeta;