import Saludo from "./components/Saludo";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Tarjeta from "./components/Tarjeta";
import "./App.css";
function App(){
  return (
    <div>
      <Header />
      <Saludo/>
      <Perfil/>
      <Tarjeta nombre="Laptop" precio="100" />
      <Tarjeta nombre="Celular" precio="70" />
      <Tarjeta nombre="Reloj" precio="50" />
    </div>
  )
}

export default App;