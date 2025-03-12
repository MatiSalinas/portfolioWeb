const Experience = ({ fecha, trabajo, descripcion, puntos, url_imagen, direccion="" }) => {
    return (
        <div className="experience">
            <p className="fechaExp">{fecha}</p>
            <h3 className="tituloExp">{trabajo}</h3>
            <p className="descripcionExp">{descripcion}</p>
            <ul className="workPoints">
                {puntos.map((punto, index) => (
                    <li key={index}>{punto}</li>
                ))}
            </ul>
            <a href={direccion} className="imgExp">
                <img src={url_imagen} alt="LogoExperencia" />
            </a>
        </div>
    );
};

export default Experience;