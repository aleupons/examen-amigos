import { FaStar, FaPencilAlt, FaTimes } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gestión de mis 6 amigos</h1>
        <button type="button" className="btn btn-primary">
          Crear amigo
        </button>
        <section className="sidebar">
          <form className="formulario">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" className="form-control" id="apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="valoracion">Valoración:</label>
              <input type="number" className="form-control" id="valoracion" />
            </div>
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
            <button type="button" className="btn btn-primary">
              Cancelar
            </button>
          </form>
        </section>
      </header>
      <main>
        <article className="amigo">
          <i className="editar">
            <FaPencilAlt />
          </i>
          <i className="eliminar">
            <FaTimes />
          </i>
          <ul className="list-unstyled">
            <li>Nombre: Juan</li>
            <li>Apellido: González</li>
            <li>
              Valoración:{" "}
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
            </li>
          </ul>
        </article>
        <article className="amigo">
          <i className="editar">
            <FaPencilAlt />
          </i>
          <i className="eliminar">
            <FaTimes />
          </i>
          <ul className="list-unstyled">
            <li>Nombre: Juan</li>
            <li>Apellido: González</li>
            <li>
              Valoración:{" "}
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
            </li>
          </ul>
        </article>
        <article className="amigo">
          <i className="editar">
            <FaPencilAlt />
          </i>
          <i className="eliminar">
            <FaTimes />
          </i>
          <ul className="list-unstyled">
            <li>Nombre: Juan</li>
            <li>Apellido: González</li>
            <li>
              Valoración:{" "}
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
            </li>
          </ul>
        </article>
        <article className="amigo">
          <i className="editar">
            <FaPencilAlt />
          </i>
          <i className="eliminar">
            <FaTimes />
          </i>
          <ul className="list-unstyled">
            <li>Nombre: Juan</li>
            <li>Apellido: González</li>
            <li>
              Valoración:{" "}
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
            </li>
          </ul>
        </article>
        <article className="amigo">
          <i className="editar">
            <FaPencilAlt />
          </i>
          <i className="eliminar">
            <FaTimes />
          </i>
          <ul className="list-unstyled">
            <li>Nombre: Juan</li>
            <li>Apellido: González</li>
            <li>
              Valoración:{" "}
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
            </li>
          </ul>
        </article>
        <article className="amigo">
          <i className="editar">
            <FaPencilAlt />
          </i>
          <i className="eliminar">
            <FaTimes />
          </i>
          <ul className="list-unstyled">
            <li>Nombre: Juan</li>
            <li>Apellido: González</li>
            <li>
              Valoración:{" "}
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
              <i className="estrella">
                <FaStar />
              </i>
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
