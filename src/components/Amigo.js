import { FaStar, FaPencilAlt, FaTimes } from "react-icons/fa";

export const Amigo = (props) => {
  const { amigo, setIdAmigo, setAccion, borrarAmigo, setFormulario } = props;
  const { id, nombre, apellido, valoracion } = amigo;
  const valoracionArray = Array.from(Array(valoracion).keys());

  return (
    <article className="col-4">
      <div className="amigo d-flex justify-content-between">
        <ul className="list-unstyled">
          <li>Nombre: {nombre}</li>
          <li>Apellido: {apellido}</li>
          <li>
            Valoración:{" "}
            {valoracionArray.map((i) => (
              <i className="estrella">
                <FaStar key={i} />
              </i>
            ))}
          </li>
        </ul>
        <div className="iconos">
          <i
            className="editar"
            onClick={() => {
              setAccion("modificar");
              setIdAmigo(id);
              setFormulario(true);
            }}
          >
            <FaPencilAlt />
          </i>
          <i className="eliminar" onClick={() => borrarAmigo(amigo)}>
            <FaTimes />
          </i>
        </div>
      </div>
    </article>
  );
};
