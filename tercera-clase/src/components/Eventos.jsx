//camelCase la primera palabra, esta en minusculas
// y la segunda palabra empieza con mayuscula
// enveto onClick, en html es onclick

function Eventos(){
    return(
        <div>
            <button onClick={() => console.log('click')}>Presionar</button>

            <input onChange={(evento) => console.log(evento.target.value)} />

            <form onSubmit={(evento) => {evento.preventDefault();}}></form>

            <input onKeyDown={(evento)=> {if(evento.key === 'Enter') console.log('tecla presionada enter')}} />

            <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>mouse</div>
        </div>
    )
}

export default Eventos;