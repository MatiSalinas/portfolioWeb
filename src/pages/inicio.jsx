import Info from "../components/Info"
import Work from "../components/Work"
import PersonalProjects from '../components/Personalprojects';
import { useEffect } from "react";

const Inicio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="containerInicio">
        <Info />
        <Work />  
        <PersonalProjects />

        </div>
    )
}

export default Inicio;