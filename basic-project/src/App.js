import "./App.css";
import {
  PresentandoJSU,
  PresentandoJSX,
} from "./ConceptosPrincipales/presentandoJSX";
import RenderizadoElemntos from "./ConceptosPrincipales/renderizadoElementos";
import ComponentesPropiedades from "./ConceptosPrincipales/componentesPropiedades";
import EstadoCicloVida from "./ConceptosPrincipales/estadoCicloVida";

const user = {
  name: "Jaime",
  surname: "Perez",
};

const App = () => {
  return (
    <div className="App">
      <PresentandoJSU />
      <PresentandoJSX />
      <RenderizadoElemntos />
      <ComponentesPropiedades user={user} />
      <EstadoCicloVida name="Jaime" />
    </div>
  );
};

export default App;
