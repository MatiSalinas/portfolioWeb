import React, { useState,useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import '../styles/NavBar.css';
import claro from '../assets/svgs/modoClaro.svg';
import oscuro from '../assets/svgs/modoOscuro.svg';

const NavBar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
            <ul className="nav-links">
                <li>Inicio</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
            <img 
                src={darkMode ? claro : oscuro} 
                alt="Toggle Dark Mode" 
                className="dark-mode-toggle" 
                onClick={toggleTheme} 
            />
        </nav>
    );
};

export default NavBar;