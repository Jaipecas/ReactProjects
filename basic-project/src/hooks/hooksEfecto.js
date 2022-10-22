import React, { useState, useEffect } from "react";

function HooksEfecto() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //funcionaría como componentDidMount y componentDidUpdate
    document.title = `Has hecho click ${count} veces`;
    //Si se hace un return se sanearan los efectos anteriores a montar el componente
    //NO ES NECESARIO SI CAUSA PROBLEMAS PERO ES UNA BUENA PRACTICA
    return () => {
      document.title = "";
    };
    //este parametro sirve para indicar si se ejecuta el efecto o no
    //si count no ha cabiado en relación al renderizado anterior no se ejecuta el efecto
  }, [count]);

  return (
    <div>
      <h2>Hooks efecto</h2>
      <label>{count}</label>
      <button onClick={() => setCount(count + 1)}>Pulsar2</button>
    </div>
  );
}

export default HooksEfecto;
