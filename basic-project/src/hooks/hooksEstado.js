import React, { useState } from "react";

export default function HooksEstado(props) {
  const [count, setCount] = useState(0);
  
  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{props.tittle}</h2>
      <span>{count}</span>
      <button onClick={updateCount}>Pulsar</button>
    </div>
  );
}
