import '../styles/PersonalProjects.css'
import Project from './Project';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
const PersonalProjects = () =>{
    return (
        <div className="personalProjects">
            <motion.h2 className="subTitulo" initial={{translateX:'-150px'}} whileInView={{translateX:0}} transition={{duration:0.3}} viewport={{once:true}}>Proyectos Personales</motion.h2>

            <motion.div className="projectContainer" initial={{rotateX:50}} whileInView={{rotateX:0}} transition={{duration:1}} viewport={{once:true}}>
                <Project
                url_imagen='/images/pdv1.png'
                titulo="Punto de venta para tienda de bebidas"
                descripcion='Un punto de venta con entradas/salidas, recaudacion diaria, gestion de inventario, promociones y cierre de caja.'
                tecnologias={["Python","PyQt", "sqlite3"]}
                links={{"url":"http://localhost:5173/","svg":"/images/github.svg","texto":"Source"}}
                />
                <Project
                url_imagen='/images/bottiweb.png'
                titulo="Pagina web, catalogo online"
                descripcion='Pagina web con usuarios, panel de adminitracion, catalogo de productos, caja de comentarios y mas.'
                tecnologias={["Python","Django", "html","css"]}
                links={{"url":"https://matixxdpls.pythonanywhere.com/productos/","svg":"/images/www.svg","texto":"Web"}}
                />
                <Project
                url_imagen='/images/unc.gif'
                titulo="Landing page laboratorio U.N.C"
                descripcion='Landing page para el laboratorio de computacion de la unviversidad nacional de Cordoba.'
                tecnologias={["React","Framer-Motion", "React-Hook-form", "Zod","html","css"]}
                links={{"url":"https://github.com/Esc-IngComp-UNC/computer-laboratory-web-page","svg":"/images/github.svg","texto":"Source"}}
                />
                <div className="verMas">
                    <Link to='/proyectos'>
                        <p>Ver mas </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link></div>

            </motion.div>
        </div>
    )
}

export default PersonalProjects;