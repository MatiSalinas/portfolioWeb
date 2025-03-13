import FreelanceProjects from "../components/FreelanceProjects";
import PersonalProjects from "../components/Personalprojects";
import { useEffect } from "react";

const Proyectos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="proyectosPageContainer">
            <FreelanceProjects />
            <PersonalProjects />
        </div>
    )
}

export default Proyectos;