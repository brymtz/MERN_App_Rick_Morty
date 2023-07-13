import './App.css';
import IndexPage from './pages/IndexPage/IndexPage'
import PersonajesPage from './pages/PersonajesPage/PesonajesPage'
import PersonajesDetails from './pages/PesonajesDetails/PersonajesDetails' 
import LoginPage from './pages/LoginPage/LoginPage';

import {Routes, Route} from 'react-router-dom'
import Header from './components/header'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/detalles/:id" element={<PersonajesDetails />} />
        <Route path="/acceso" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
