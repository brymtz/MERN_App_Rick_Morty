import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import './PersonajesPage.css'
import { AuthContext } from '../../contexts/auth.context'

const PersonajesPage = () => {

    const [personajes, setPersonajes] = useState([])
    const{ user } = useContext(AuthContext)
    
    const loadPersonajes = () =>{
        fetch('http://localhost:5005/api/personajes')
            .then(res => res.json())
            .then(allPersonajes => setPersonajes(allPersonajes))
    }

    loadPersonajes()

    return (
        <main>
            <h1>Listado de personajes</h1>
            <hr></hr>
            {personajes.map(eachPersonaje => {
                return (
                    <article className='personajes-card' key={eachPersonaje._id}>
                            <img src={eachPersonaje.image} alt={eachPersonaje.name}></img>
                            <h3><Link to={`/detalles/${eachPersonaje._id}`}>{eachPersonaje.name}</Link></h3>
                            {
                                user && <Link to={`/detalles/`}>EDITAR</Link>
                            }
                    </article>
                    
                )
            })}
        </main>
    )
}

export default PersonajesPage