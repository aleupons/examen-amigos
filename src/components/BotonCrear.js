export const BotonCrear = (props) => {
  const { setFormulario, setAccion } = props;

  return (
    <div className="col-12">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setFormulario(true);
          setAccion("anyadir");
        }}
      >
        Crear amigo
      </button>
    </div>
  );
};
