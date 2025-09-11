import React from 'react'

const EstaComSono = (props) => {
  return (
    <div>
        {props.estoudormindo ? <h1>Estou indo bem...</h1> : <h1>Preciso estudar mais</h1>}
    </div>
  )
}

export default EstaComSono