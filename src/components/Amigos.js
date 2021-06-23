import { Amigo } from "./Amigo";

export const Amigos = (props) => {
  const { amigos, setIdAmigo, setAccion, borrarAmigo, setFormulario } = props;

  return (
    <>
      {amigos.map((amigo) => (
        <Amigo
          key={amigo.id}
          amigo={amigo}
          setIdAmigo={setIdAmigo}
          setAccion={setAccion}
          borrarAmigo={borrarAmigo}
          setFormulario={setFormulario}
        />
      ))}
    </>
  );
};
