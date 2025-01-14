const Experience = ({ fecha, trabajo, descripcion, puntos }) => {
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
        </div>
    );
};

export default Experience;