import '../styles/PersonalProjects.css'
import Project from './Project';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
const FreelanceProjects = () =>{
    return (
        <div className="personalProjects">
            <motion.h2 className="subTitulo" initial={{translateX:'-150px'}} whileInView={{translateX:0}} transition={{duration:0.3}} viewport={{once:true}}>Proyectos Freelance</motion.h2>

            <motion.div className="projectContainer" initial={{rotateX:120}} whileInView={{rotateX:0}} transition={{duration:1}} viewport={{once:true}}>
            <Project
                url_imagen='/images/obema.gif'
                titulo="Landing page Obema S.A"
                descripcion='Landing page para la constructora riojana obema s.a, animaciones personalizadas con framer motion.'
                tecnologias={["React","Framer-Motion", "React-Hook-form", "Zod","html","css"]}
                links={{"url":"https://obemasa.com.ar/","svg":"/images/www.svg","texto":"Web"}}
                />
                <Project
                url_imagen='/images/invitacion.gif'
                titulo="Carta de invitacion"
                descripcion='Una carta con animaciones y la informacion para asistir a el cumpleaños de un cliente'
                tecnologias={["React","Framer", "html","css"]}
                links={{"url":"https://invitacionleobrigido.pages.dev/","svg":"/images/www.svg","texto":"Web"}}
                />
                <Project
                url_imagen='/images/menuqr.gif'
                titulo="Menu Qr"
                descripcion='Pagina web con accedida mediante un codigo qr en las mesas del restaurante Estancia38, sitio responsive y actualizacion de precios.'
                tecnologias={["Html","css"]}
                links={{"url":"https://estancia38.pages.dev/","svg":"/images/www.svg","texto":"Web"}}
                />
            
                <div className="verMas">
                    <Link to='/proyectos'>
                        <p>Ver mas </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>

            </motion.div>
        </div>
    )
}

export default FreelanceProjects;