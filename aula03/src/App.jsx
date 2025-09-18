import React from 'react'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Desafio from './components/Desafio'


const App = () => {
  return (
    <>
      {
        [
          {nome:"neto",
            email:"neto123@gmail.com",
            curso:"Sistemas", media:7
          },
          {nome:"josé",
            email:"jose123@gmail.com",
            curso:"Sistemas",media:6},
          {nome:"joao",
            email:"joao123@gmail.com",
            curso:"Sistemas",media:9}
        ].map((aluno)=> 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        ) //renderizar listas
      }
      <br></br>
      {
        [
          {
            nome:"Java",dificuldade: "Alta"
          },
          {
            nome:"Banco de dados",dificuldade: "Media"
          }
        ].map((liguagens)=>
        <Linguagens nome={liguagens.nome} dificuldade={liguagens.dificuldade}/>
        )
      }
      <br></br>

      {
        [
          {nome:"TV",preco:"1000.00", categoria:"linha marrom",quantidade:2},
          {nome:"Lavadora",preco:"1500.00", categoria:"linha branca",quantidade:0},
          {nome:"Liquidificador",preco:"250.00", categoria:"linha verde",quantidade:5}
        ].map((desafio)=>
        <Desafio nome={desafio.nome} preco={desafio.preco} categoria={desafio.categoria} quantidade={desafio.quantidade}/>
      )
      }
    </>
  )
}

export default App