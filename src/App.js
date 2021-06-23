import { useEffect, useState } from "react";
import { Amigos } from "./components/Amigos";
import { BotonCrear } from "./components/BotonCrear";
import { Formulario } from "./components/Formulario";

function App() {
  const urlApi = "http://localhost:3001/amigos/";
  const [amigos, setAmigos] = useState([]);
  const [formulario, setFormulario] = useState("none");
  const [accion, setAccion] = useState("anyadir");
  const [idAmigo, setIdAmigo] = useState(null);

  const getAmigos = async () => {
    const response = await fetch(urlApi);
    if (!response.ok) {
      return;
    }
    const amigos = await response.json();
    if (amigos) {
      setAmigos(amigos);
    }
  };
  useEffect(() => {
    getAmigos();
  }, []);

  const nuevoAmigo = async (amigoNuevo) => {
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigoNuevo),
    });
    if (!response.ok) {
      return;
    } else {
      setAmigos([...amigos, amigoNuevo]);
    }
  };

  const modificarAmigo = async (amigoAModificar) => {
    const response = await fetch(urlApi + amigoAModificar.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigoAModificar),
    });
    if (!response.ok) {
      return;
    } else {
      setAmigos(
        amigos.map((amigo) => {
          if (amigoAModificar.id === amigo.id) {
            return amigoAModificar;
          } else {
            return amigo;
          }
        })
      );
    }
  };

  const borrarAmigo = async (amigoABorrar) => {
    const response = await fetch(urlApi + amigoABorrar.id, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    } else {
      setAmigos(amigos.filter((amigo) => amigoABorrar.id !== amigo.id));
    }
  };

  return (
    <div className="container">
      <header className="row">
        <h1 className="col-12">Gestión de mis 6 amigos</h1>
        <BotonCrear setFormulario={setFormulario} setAccion={setAccion} />
        <section className="sidebar col-12">
          <Formulario
            formulario={formulario}
            setformulario={setFormulario}
            accion={accion}
            amigos={amigos}
            idAmigo={idAmigo}
            nuevoAmigo={nuevoAmigo}
            modificarAmigo={modificarAmigo}
          />
        </section>
      </header>
      <main className="row">
        <Amigos
          amigos={amigos}
          setIdAmigo={setIdAmigo}
          setAccion={setAccion}
          borrarAmigo={borrarAmigo}
        />
      </main>
    </div>
  );
}

export default App;
