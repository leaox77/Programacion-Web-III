/*
function ContadorRoto(){
    let contador = 0
    return (
        <button onClick={() => {contador++}} >
            {contador}
        </button>
    )
}*/
//export default ContadorRoto;

import { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(0);
    return (
        <button onClick={() => setContador(contador + 1)} >
           Clicks: {contador}
        </button>
    )
}

export default Contador;