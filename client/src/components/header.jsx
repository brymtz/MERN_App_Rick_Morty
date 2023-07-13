import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/auth.context'
import './header.css'

const Header = () =>{
    
    const {user, logoutUser} = useContext(AuthContext)

    return(
        <header className='header'>
            <h1>Stateless Auth</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/personajes">Personajes</Link>
                <Link to="/acceso">Acceso</Link>
                {user && <span onClick={logoutUser}>Cerrar Sesion</span>} 
                {user && <span>Hola {user.username}</span>}    
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header