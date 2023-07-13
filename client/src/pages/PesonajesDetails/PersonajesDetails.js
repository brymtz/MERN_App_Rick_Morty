import { useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import './PersonajesDetails.css'


const PersonajesDetails = () => {

   const {id} = useParams() 
   const [personaje, setPersonaje] = useState([])

   const loadPersonajesDetails = () => {
    
    fetch(`http://localhost:5005/api/details/${id}`)
    .then(res => res.json())
    .then(personaje => setPersonaje(personaje))
   }

   loadPersonajesDetails()
    return (
        <main>
            <h1>Estos son los detalles de {personaje.name}</h1>
            <hr></hr>
            <img src={personaje.image} alt={personaje.name} className='personaje-details'></img>
            <article className='personaje-details'>
                <p>
                    <h3>Caracteristicas:</h3>
                    <ul>
                        <li>Nombre: {personaje.name}</li>
                        <li>Estatus: {personaje.status}</li>
                        <li>Especie: {personaje.species}</li>
                        <li>Tipo: {personaje.type}</li>
                        <li>Genero: {personaje.gender}</li>
                    </ul>
                </p>
            </article>
            <hr></hr>
            <Link to="/personajes">Volver a los personajes</Link>
        </main>
    )
}

export default PersonajesDetails