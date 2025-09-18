import React from 'react'

const Desafio = ({nome,preco,categoria,quantidade}) => {
  return (
    <>
    <p>Nome:{nome}</p>
    <p>Preço:{preco}</p>
    <p>Categoria:{categoria}</p>
    <p>Quantidade:{quantidade}</p>
    <p>Produto: {quantidade >0 ? " DISPONIVEL":"ESGOTADO"}</p>
    
    
    </>
  )
}

export default Desafio