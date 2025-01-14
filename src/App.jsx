import { useContext, useState } from 'react'
import { ThemeContext } from './utils/ThemeContext';
import NavBar from './components/NavBar'
import Inicio from './pages/inicio';
import './styles/App.css'
import React from 'react';
function App() {
  const { darkMode} = useContext(ThemeContext);

  return (
      <div className={`containerApp ${darkMode ? "dark" : "light"}`}>
      <div className="containerAppCentro">
        <NavBar />
        <Inicio />
      </div>

      </div>
    
  )
}

export default App
