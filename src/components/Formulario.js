import { useEffect, useState } from "react";

export const Formulario = (props) => {
  const { formulario, accion, amigos, idAmigo, nuevoAmigo, modificarAmigo } =
    props;

  const idMasAlta = amigos.reduce((acumulador, amigo) => {
    if (amigo.id > acumulador) {
      acumulador = amigo.id;
      return amigo.id;
    } else {
      return acumulador;
    }
  }, 0);

  const [amigo, setAmigo] = useState({
    id: idMasAlta + 1,
    nombre: "",
    apellido: "",
    valoracion: 0,
  });

  useEffect(() => {
    if (accion === "modificar") {
      setAmigo(
        amigos.find((amigoAModificar) => amigoAModificar.id === idAmigo)
      );
    }
  }, [accion, amigos, idAmigo]);

  const submitFormulario = (e) => {
    e.preventDefault();
    if (accion === "anyadir") {
      nuevoAmigo(amigo);
    } else if (accion === "modificar") {
      modificarAmigo(amigo);
    }
  };

  return (
    <form
      className="formulario row"
      style={{ display: formulario }}
      noValidate
      onSubmit={submitFormulario}
    >
      <div className="form-group col-3">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={amigo.nombre}
          onChange={(e) => setAmigo({ ...amigo, nombre: e.target.value })}
        />
      </div>
      <div className="form-group col-3">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          value={amigo.apellido}
          onChange={(e) => setAmigo({ ...amigo, apellido: e.target.value })}
        />
      </div>
      <div className="form-group col-2">
        <label htmlFor="valoracion">Valoración:</label>
        <input
          type="number"
          className="form-control"
          id="valoracion"
          value={amigo.valoracion}
          onChange={(e) => setAmigo({ ...amigo, valoracion: e.target.value })}
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
  );
};
