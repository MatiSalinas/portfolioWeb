import { ThemeContext } from '../utils/ThemeContext';
import { useContext } from 'react';

const Project = ({url_imagen ,titulo ,descripcion ,tecnologias ,links={"url":"","svg":"","texto":""}}) =>{
    const { darkMode} = useContext(ThemeContext);
    return (
        <div className={`project-card ${darkMode ? "dark" : "light"}`}>
            <img src={url_imagen} alt={titulo} className="project-image" />
            <h2 className="project-title">{titulo}</h2>
            <p className="project-description">{descripcion}</p>
            <ul className={`project-technologies ${darkMode ? "dark" : "light"}`}>
                {tecnologias.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            {links.url && (
                <a target="_blank" href={links.url} className={`project-link ${darkMode ? "dark" : "light"}`}>
                    <img src={links.svg} alt={links.texto} className="project-link-icon" />
                    {links.texto}
                </a>
            )}
        </div>
    );
}

export default Project;