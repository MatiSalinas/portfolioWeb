import Info from "../components/Info"
import Work from "../components/Work"
import PersonalProjects from '../components/Personalprojects';

const Inicio = () => {
    return (
        <div className="containerInicio">
        <Info />
        <Work />  
        <PersonalProjects />

        </div>
    )
}

export default Inicio;