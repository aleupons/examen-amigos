import { Amigo } from "./Amigo";

export const Amigos = (props) => {
  const { amigos, setIdAmigo, setAccion, borrarAmigo } = props;

  return (
    <>
      {amigos.map((amigo) => (
        <Amigo
          key={amigo.id}
          amigo={amigo}
          setIdAmigo={setIdAmigo}
          setAccion={setAccion}
          borrarAmigo={borrarAmigo}
        />
      ))}
    </>
  );
};
