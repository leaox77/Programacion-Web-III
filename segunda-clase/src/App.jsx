import Saludo from "./components/Saludo";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Tarjeta from "./components/Tarjeta";
import Boton from "./components/Boton";
import ContadorRoto from "./components/Contadores";
import Contador from "./components/Contadores"
import "./App.css";
function App(){
  const productos = [
    { id: 1, nombre: 'Laptop', precio:60, disponible: true},
    { id: 2, nombre: 'Teclado', precio:30, disponible: true},
    { id: 3, nombre: 'Monitor', precio:90, disponible: false}
  ]
  return (
    <div>
      <ContadorRoto />
      <Header />

      <Saludo/>
      <Perfil/>
      {/*
      <Tarjeta nombre="Laptop" precio="100" disponible={true} />
      <Tarjeta nombre="Celular" precio="70" />
      <Tarjeta nombre="Reloj" precio="50" />
      */}
      <div>
        {productos.map(producto => (
          <Tarjeta
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            disponible={producto.disponible}
          />
        ))}
      </div>
      <Boton />
      <Boton texto="Eliminar" color="red" />
      <Boton deshabilitado={true} />
    </div>
  )
}

export default App;