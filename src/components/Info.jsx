import '../styles/Info.css';
import { ThemeContext } from '../utils/ThemeContext';
import { useContext } from 'react';


const Info = () => {
    const { darkMode} = useContext(ThemeContext);

    return(
        <div className="infoContainer">
            <div className="infoDetalle">
                <h1 className={`saludo ${darkMode ? "dark" : "light"}`}>Hola soy mati 👋 </h1>
                <p>Desarrollador web de 24 años de Argentina</p>
                <p>Me gusta resolver problemas y darle vida a ideas. <br />
                    Disfruto mucho el desarrollo full-stack.
                </p>
                <div className="infoLinks">
                    <a href="" className={`cv ${darkMode ? "dark" : "light"}`}>
                        curriculum
                        <svg className={`svg ${darkMode ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down ml-2 size-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
                    </a>

                    <a href="" className={`socials ${darkMode ? "dark" : "light"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4D5D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin size-5" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>  
                    </a>
                    <a href="" className={`socials ${darkMode ? "dark" : "light"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4D5D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github size-5" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>  
                    </a>
                    <a href="" className={`socials ${darkMode ? "dark" : "light"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4D5D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-5" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>  
                    </a>
                </div>
            </div>
            <div className="infoImagen"></div>
        </div>
    )
}

export default Info;