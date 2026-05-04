import Eventos from "./components/Eventos"
import Parametros from "./components/Parametros";
import FormLoginValidacion from "./components/Validacion";
import { useState } from "react";
function App(){
  const [mensaje, setMensaje] = useState('')

  const handleClick = () => {
    setMensaje('Boton presionado')
  }

  return(
    <div>
      <Parametros/>
      <button onClick={handleClick}>Click</button>
      <p>{mensaje}</p>
      <FormLoginValidacion/>
    </div>
  )
}

export default App;