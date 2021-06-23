export const BotonCrear = (props) => {
  const { setFormulario, setAccion } = props;
  setAccion("anyadir");

  return (
    <div className="col-12">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setFormulario(false);
        }}
      >
        Crear amigo
      </button>
    </div>
  );
};
