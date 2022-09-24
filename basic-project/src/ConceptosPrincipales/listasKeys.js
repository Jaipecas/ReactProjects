import React, { Component } from "react";
//mirar mejores formas de pasar las key a los elementos del array,
// usar index no es una buena opc
//construir elementos html a través de arrays
const listItems = (numbers) =>
  numbers.map((number) => <li key={number.id}>{number.number}</li>);

class ListasKeys extends Component {
  render() {
    return (
      <div>
        <h1>Listas y keys</h1>
        <ul>{listItems(this.props.numbers)}</ul>
      </div>
    );
  }
}

export default ListasKeys;
