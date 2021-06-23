import { FaStar, FaPencilAlt, FaTimes } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <header className="row">
        <h1 className="col-12">Gestión de mis 6 amigos</h1>
        <div className="col-12">
          <button type="button" className="btn btn-primary">
            Crear amigo
          </button>
        </div>
        <section className="sidebar col-12">
          <form className="formulario row">
            <div className="form-group col-3">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="form-group col-3">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" className="form-control" id="apellido" />
            </div>
            <div className="form-group col-2">
              <label htmlFor="valoracion">Valoración:</label>
              <input
                type="number"
                className="form-control"
                id="valoracion"
                value="0"
              />
            </div>
            <div className="botonera form-group d-flex flex-column col-4">
              <button type="submit" className="boton btn btn-primary">
                Crear
              </button>
              <button type="button" className="boton btn btn-primary">
                Cancelar
              </button>
            </div>
          </form>
        </section>
      </header>
      <main className="row">
        <article className="col-4">
          <div className="amigo d-flex justify-content-between">
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
            <div className="iconos">
              <i className="editar">
                <FaPencilAlt />
              </i>
              <i className="eliminar">
                <FaTimes />
              </i>
            </div>
          </div>
        </article>
        <article className="col-4">
          <div className="amigo d-flex justify-content-between">
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
            <div className="iconos">
              <i className="editar">
                <FaPencilAlt />
              </i>
              <i className="eliminar">
                <FaTimes />
              </i>
            </div>
          </div>
        </article>
        <article className="col-4">
          <div className="amigo d-flex justify-content-between">
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
            <div className="iconos">
              <i className="editar">
                <FaPencilAlt />
              </i>
              <i className="eliminar">
                <FaTimes />
              </i>
            </div>
          </div>
        </article>
        <article className="col-4">
          <div className="amigo d-flex justify-content-between">
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
            <div className="iconos">
              <i className="editar">
                <FaPencilAlt />
              </i>
              <i className="eliminar">
                <FaTimes />
              </i>
            </div>
          </div>
        </article>
        <article className="col-4">
          <div className="amigo d-flex justify-content-between">
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
            <div className="iconos">
              <i className="editar">
                <FaPencilAlt />
              </i>
              <i className="eliminar">
                <FaTimes />
              </i>
            </div>
          </div>
        </article>
        <article className="col-4">
          <div className="amigo d-flex justify-content-between">
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
            <div className="iconos">
              <i className="editar">
                <FaPencilAlt />
              </i>
              <i className="eliminar">
                <FaTimes />
              </i>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
