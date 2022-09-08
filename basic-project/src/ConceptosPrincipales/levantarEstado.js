import React, { Component } from "react";

class LevantarEstado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
    };
  }

  handleChangeTemperature = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>Inserte la temperatura en Celsius</legend>
          <input
            value={this.temperature}
            onChange={this.handleChangeTemperature}
          />
          <p>{this.state.temperature}</p>
        </fieldset>
      </div>
    );
  }
}

export default LevantarEstado;
