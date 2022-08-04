const ComponentesPropiedades = (props) => {
  return (
    <div>
      <p>Hola, {props.user.name} {props.user.surname}</p>
    </div>
  );
};

export default ComponentesPropiedades;
