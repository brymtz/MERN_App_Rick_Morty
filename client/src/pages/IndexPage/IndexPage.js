import {Link} from 'react-router-dom'

const IndexPage = () => {
    return (
        <main>
            <h1>Bienvenido a la página!</h1>
            <hr></hr>
            <nav>
            <Link to="/personajes">Personajes</Link>
            </nav>
        </main>
    )
}

export default IndexPage