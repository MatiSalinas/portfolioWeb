import { ThemeContext } from '../utils/ThemeContext';
import { useContext,useState } from 'react';
import '../styles/Work.css';
import Experience from './experience';
import {motion} from 'framer-motion'
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

            <div className="workInfo"  >
                {seleccionado == 'trabajo' ? 
                <motion.ul className="workList" animate={(seleccionado=='trabajo') ? {rotateY:[0,170,0]} : {opacity:0} } transition={{duration:.5}}>
                    <li className="workItem">
                            <Experience fecha="Jul 2024 - Presente" 
                            trabajo="Modex" 
                            descripcion="Full Stack Web Developer" 
                            puntos={
                                ["Desarrolle la base de datos(MySQL) , el backend(Express),el frontend(react) de la tienda online para insumos informaticos",
                                "Scripts para la carga automatica y actualizacion de precios usando apis de proveedores/ listado de precios ",
                                "Integre Modo y MercadoPago en la pasarela de Pagos",
                                "Me encargue del deploy del proyecto en una vps de donweb"
                            ]}
                            url_imagen='/images/modex.jpeg'
                            direccion='https://modex.com.ar/'
                            />
                    </li>
                            <li className="workItem">
                                <Experience fecha="Oct 2024 - Nov 2024"
                                trabajo="Obema S.A"
                                descripcion="Web Developer"
                                puntos={
                                    ["Desarrole la landing page de la empresa constructora obema",
                                    "Implemente animaciones complejas usando framer motion",
                                    "Me encargue del hosting de este proyecto utilizando hostinger"
                                ]}
                                url_imagen='/images/obema.png'
                                direccion='https://obemasa.com.ar/'
                                />
                            </li>
                            <li className="workItem">
                                <Experience fecha="Nov 2023 - Presente"
                                trabajo="Estancia 38"
                                descripcion="Web Developer"
                                puntos={
                                    ["Desarrolle un menu responsive para el restaurante estancia 38",
                                    "Deploy usando cloudflare",
                                    "Me encargo del mantenimiento del sitio"
                                ]}
                                url_imagen='/images/estancia38.png'
                                direccion='https://estancia38.pages.dev/'
                                />
                            </li>
                            <li className="workItem">
                                <Experience fecha="Feb 2023 - Nov 2023"
                                trabajo="YPF Horacio Brigido"
                                descripcion="Software Developer"
                                puntos={
                                    ["Desarrolle un sistema de cupones, que permite la generacion de pdfs y administracion de cupones.",
                                    "una aplicacion para que los playeros pudieran scannear los cupones y verificar su autenticidad y darlos de baja."
                                ]} 
                                url_imagen='/images/ypf.png'
                                direccion='https://www.facebook.com/ypfhoraciobrigido/'
                                />
                            </li>
                </motion.ul>
                : 
                <motion.ul className="eduList" animate={(seleccionado=='educacion') ? {rotateY:[0,180,0]} : {opacity:0} } transition={{duration:.5}} >
                    <li className="eduItem">
                    <Experience fecha="Feb 2023 - Feb 2025" 
                            trabajo="U.T.N" 
                            descripcion="Tecnicatura Universitaria en Programación" 
                            puntos={
                                ["Me gradue con un promedio de 9.22",
                                "Fui invitado a cursos extra curriculares de parte de los profesores",
                                "Trabaje junto a un grupo de compañeros en un proyecto en el que desarrollamos un Punto de venta/gestor de inventario"
                            ]}
                            url_imagen='/images/UTN_logo.jpg'
                            direccion='http://www.frlr.utn.edu.ar/'
                            />
                    </li>
                    <li className="eduItem">
                    <Experience fecha="Oct 2022 - Dic 2022" 
                            trabajo="CoderHouse" 
                            descripcion="Python Django" 
                            puntos={
                                ["Expandi mis conocimientos sobre Python y el patron Model View Template",
                                "Aprendi a utilizar el framework Django para el desarrollo de aplicaciones web",
                                "Proyecto final en el que desarrolle una aplicacion web para el inventario de una tienda de bebidas"
                            ]}
                            url_imagen='/images/coder.png'
                            direccion='https://www.coderhouse.com/ar'
                            />
                    </li>
                    <li className="eduItem">
                    <Experience fecha="Mar 2022 - Jul 2022" 
                            trabajo="Codo a Codo 4.0" 
                            descripcion="Big Data(Ciencia de Datos) " 
                            puntos={
                                ["Aprendi a interpretar y analizar datos",
                                "Utilice librerias de python tales como pandas, numpy, matplotlib, seaborn",
                                "Aprendi a utilizar herramientas como jupyter notebook y google colab"
                            ]}
                            url_imagen='/images/codo.jpeg'
                            direccion='https://buenosaires.gob.ar/educacion/noticias/codo-codo-40-ya-abrio-la-inscripcion-para-cursar-en-el-segundo-cuatrimestre'
                            />
                    </li>
                </motion.ul>
                    }
                
            </div>
        </div>
    )
}

export default Work;