import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [Contador, setContador] = useState(1)
    function incrementar(){
        setContador(Contador+ 1)
    }
    function decrementar(){
        setContador(Contador -1)
    }

  return (
    <div>
        <h1>Computador com useState</h1>
        <button onClick={incrementar}>Incrementar Contador</button>
        <h1>O contador está em: {Contador}</h1>
        <button onClick={decrementar}>Decrementar Contador</button>
    </div>
  )
}

export default HookContador