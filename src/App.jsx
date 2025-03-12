import { useContext, useState } from 'react'
import { ThemeContext } from './utils/ThemeContext';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio';
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Proyectos from './pages/AllProject';
function App() {
  const { darkMode} = useContext(ThemeContext);

  return (
<Router>
  <div className={`containerApp ${darkMode ? "dark" : "light"}`}>
  <div className="containerAppCentro">
  <NavBar />
    <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/proyectos' element={<Proyectos />}/>
    </Routes>
<Footer />
      </div>
      </div>
</Router>
    
  )
}

export default App
