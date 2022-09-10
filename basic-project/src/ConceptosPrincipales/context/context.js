/**
 * Context está diseñado para compartir datos
 * que pueden considerarse “globales” para un árbol de componentes en React,
 * como el usuario autenticado actual, el tema o el idioma preferido.
 * Context se usa principalmente cuando algunos datos tienen que ser accesibles
 * por muchos componentes en diferentes niveles de anidamiento
 */

import React, { Component } from "react";
import ContextComponent1 from "./contextComponent1";
import UserContext from "./userContext";

export default class ContextPrueba extends Component {
  render() {
    return (
      <UserContext.Provider value={{ name: "Jaime" }}>
        <h2>Context</h2>
        <ContextComponent1 />
      </UserContext.Provider>
    );
  }
}
