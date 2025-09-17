import React, { useState } from "react";

function HookMegaSena() {
  const [numero, setNumero] = useState(null);

  function sortearNumero() {
    const novoNumero = Math.floor(Math.random() * 60) + 1;
    setNumero(novoNumero);
  }

  return (
    <div>
      <h2>Sorteador Mega Simples :)</h2>
      <button onClick={sortearNumero}>Sortear Número</button>
      <p>Último número sorteado: {numero}</p>
    </div>
  );
}

export default HookMegaSena;
