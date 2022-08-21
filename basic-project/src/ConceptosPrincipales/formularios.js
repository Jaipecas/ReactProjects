import React, { Component } from "react";
/*
En HTML, los elementos de formularios como los <input>, <textarea> y el <select> normalmente mantienen sus propios estados y los actualizan de acuerdo a la interacción del usuario. 
En React, el estado mutable es mantenido normalmente en la propiedad estado de los componentes, y solo se actualiza con setState().

Podemos combinar ambos haciendo que el estado de React sea la “única fuente de la verdad”. 
De esta manera, los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario. 
Un campo de un formulario cuyos valores son controlados por React de esta forma es denominado “componente controlado”.

Al final de lo que se trate es de controlar los valores del formulario desde las variables state
 */

class Formularios extends Component {
  state = {
    valueInput: "",
    valueTextArea: "Texto prueba",
    valueSelect: "coconut",
    isGoing: true,
    numberOfGuests: 2,
  };

  formAlert(event, value) {
    alert("A name was submitted: " + value);
    event.preventDefault();
  }

  handleChange = (event) => {
    /*En un principio comporbaba el tipo de control que se pasaba luego se añadió la propiedad name a los elementos del html*/
    if (event.target.name === "inputForm1")
      return this.setState({ valueInput: event.target.value });

    if (event.target.name === "textArea")
      return this.setState({ valueTextArea: event.target.value });

    if (event.target.name === "selectForm3")
      return this.setState({ valueSelect: event.target.value });
  };

  handleSubmitForm1 = (event) => {
    this.formAlert(event, this.state.valueInput);
  };

  handleSubmitForm2 = (event) => {
    this.formAlert(event, this.state.valueTextArea);
  };

  handleSubmitForm3 = (event) => {
    this.formAlert(event, this.state.valueSelect);
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm1}>
          <label>
            Name:
            <input
              type="text"
              name="inputForm1"
              value={this.state.valueInput}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmitForm2}>
          <label>
            Essay:
            <textarea
              name="textArea"
              value={this.state.valueTextArea}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmitForm3}>
          <label>
            Pick your favorite flavor:
            <select
              name="selectForm3"
              value={this.state.valueSelect}
              onChange={this.handleChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form /* 
        Cuando necesitas manejar múltiples elementos input controlados, 
        puedes agregar un atributo name a cada uno de los elementos 
        y dejar que la función controladora decida que hacer basada en el valor de event.target.name.

        Aqui hace un truco que es llamar al state igual que el nombre del control mirar la funcion handleinputchange
        */
        >
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Formularios;
