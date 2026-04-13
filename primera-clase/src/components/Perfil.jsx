function Perfil(){
    const usuario = {
        nombre: 'Leandro',
        carrera: 'Informatica',
        hobby: 'Carreras',
        semestre: 7
    }
    return (
        <div>
            <h2>{usuario.nombre}</h2>
            <p>Carrera: {usuario.carrera}</p>
            <p>Hobby: {usuario.hobby}</p>
            <p>Semestre: {usuario.semestre}</p>
        </div>
    )
}

export default Perfil;