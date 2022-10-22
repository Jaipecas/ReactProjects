import "./App.css";
import {
  PresentandoJSU,
  PresentandoJSX,
} from "./ConceptosPrincipales/presentandoJSX";
import RenderizadoElemntos from "./ConceptosPrincipales/renderizadoElementos";
import ComponentesPropiedades from "./ConceptosPrincipales/componentesPropiedades";
import EstadoCicloVida from "./ConceptosPrincipales/estadoCicloVida";
import ManejandoEventos from "./ConceptosPrincipales/manejandoEventos";
import RenderizadoCondicional from "./ConceptosPrincipales/renderizadoCondicional";
import ListasKeys from "./ConceptosPrincipales/listasKeys";
import Formularios from "./ConceptosPrincipales/formularios";
import LevantarEstado from "./ConceptosPrincipales/levantarEstado";
import ComposicionHerencia from "./ConceptosPrincipales/composicionHerencia";
import ContextPrueba from "./ConceptosPrincipales/context/context";
import { PrimerVistazoHookEstado, PrimerVistazoHookEfecto } from "./hooks/primerVistazo";
import HooksEstado from "./hooks/hooksEstado";
import HooksEfecto from "./hooks/hooksEfecto";


const user = {
  name: "Pepe",
  surname: "Perez",
};

function addId(array) {
  return array.map((element, index) => {
    return { id: index, number: element };
  });
}

const App = () => {
  return (
    <div className="App">
      <PresentandoJSU />
      <PresentandoJSX />
      <RenderizadoElemntos />
      <ComponentesPropiedades user={user} />
      <EstadoCicloVida name={user.name} />
      <ManejandoEventos />
      <RenderizadoCondicional isLogged={false} name={user.name} />
      <ListasKeys numbers={addId([1, 2, 3, 4, 5])} />
      <Formularios></Formularios>
      <LevantarEstado/>
      <ComposicionHerencia/>
      <ContextPrueba/>
      <h1>HOOKS</h1>
      <PrimerVistazoHookEstado/>
      <PrimerVistazoHookEfecto/>
      <HooksEstado tittle = "Hooks Estado"/>
      <HooksEfecto/>
    </div>
  );
};

export default App;
