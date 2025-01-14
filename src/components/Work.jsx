import { ThemeContext } from '../utils/ThemeContext';
import { useContext,useState } from 'react';
import '../styles/Work.css';
import Experience from './experience';
const Work = () =>{
    const { darkMode} = useContext(ThemeContext);
    const [seleccionado, setSeleccionado] = useState('trabajo');

    const toggleView = (view) => {
        setSeleccionado(view);
    }
    return (
        <div className={`workContainer ${darkMode ? "dark" : "light"}`}>
            <div className="viewSelector">
                <button type='button' onClick={()=>toggleView('trabajo')} className={`viewButton ${(seleccionado == 'trabajo') ? "seleccionado" : ""}`}>Trabajo</button>
                <button type='button' onClick={()=>toggleView('educacion')} className={`viewButton ${(seleccionado == 'educacion') ? "seleccionado" : ""}`}>Educacion</button>
            </div>

            <div className="workInfo">
                <ul className="workList">
                    <li className="workItem">
                            <Experience fecha="Jul 2024 - Presente" trabajo="Modex" descripcion="Full Stack Web Developer" puntos={["Hola","chau"]} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Work;