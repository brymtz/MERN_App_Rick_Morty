import { useContext, useState } from "react"
import axios from 'axios'
import './LoginPage.css'
import { AuthContext } from "../../contexts/auth.context"

const LoginPage = () =>{

    const [userData, setUserData] = useState({username: '', password: ''})
    const {authenticateUser} = useContext(AuthContext)

    const submitLoginForm = e => {
        e.preventDefault()
        axios.post('http://localhost:5005/api/auth/login', userData)
        .then(({data: {authToken}}) => {
            localStorage.setItem('authToken', authToken)
            authenticateUser()
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="form-container">
            <form onSubmit={submitLoginForm}>
                <label>
                    Usuario
                    <input type="text" value={userData.username} onChange={e => setUserData({...userData, username: e.target.value})}></input>
                </label>
                <label>
                    Contraseña
                    <input type="password" value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}></input>
                </label>
                <input type="submit" value="Ingresar"></input>
            </form>
        </div>
    )
}

export default LoginPage