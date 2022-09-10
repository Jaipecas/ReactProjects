import React, { Component } from "react";
import UserContext from "./userContext";

export default class ContextComponent2 extends Component {
  static contextType = UserContext;
  render() {
    return <h5>{this.context.name}</h5>;
  }
}
