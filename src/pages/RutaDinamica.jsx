import React from 'react'
import { useParams } from 'react-router-dom'

function RutaDinamica() {
  const {id} = useParams()

  useEffect(() => {
    dispatch({
      type: "find_contact",
      payload: id
    })
  }, [id])

  // store.selectedContact para rellenar el formulario con los datos de ese contacto
  store.selectedContact.id


  return (
    <div>
      <h1>El parámetro de esta ruta es: {cacahuete}</h1>
    </div>
  )
}

export default RutaDinamica