function Boton({texto = 'Aceptar', color='blue', deshabilitado=false}){
    return (
        <button disabled={deshabilitado} style={{ background: color , color: 'white', padding: '8px 16px'}} >
            {texto}
        </button>
    )
}

export default Boton;