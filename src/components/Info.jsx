import React from 'react';
import '../styles/Info.css';
import { ThemeContext } from '../utils/ThemeContext';
import { useContext } from 'react';
import { ReactComponent as Linkedin } from '/svgs/linkedin.svg';
import { ReactComponent as Github} from '/svgs/github.svg';
import { ReactComponent as Correo}  from '/svgs/correo.svg';

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

                    <a href="" className="socials">
                    <Linkedin />   
                    </a>
                    <a href="" className="socials">
                    <Github />   
                    </a>
                    <a href="" className="socials">
                    <Correo />   
                    </a>
                </div>
            </div>
            <div className="infoImagen"></div>
        </div>
    )
}

export default Info;