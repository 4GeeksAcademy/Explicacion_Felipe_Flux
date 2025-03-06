import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Email: {props.email}</p>


      <button onClick={() => navigate(`/edit/${props.id}`)}>Editar Contacto</button>
    </div>
  )
}

export default Card