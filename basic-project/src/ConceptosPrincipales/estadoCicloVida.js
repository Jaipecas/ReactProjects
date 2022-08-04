import React from "react";

class EstadoCicloVida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  incrementCounter = () => {
    this.setState((prestate) => {
      return { counter: prestate.counter + 1 };
    });
  }

  render() {
    return (
      <div>
        <p>
          Hola {this.props.name} son las: {this.state.date.toLocaleTimeString()}
        </p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Pulsar</button>
      </div>
    );
  }
}

export default EstadoCicloVida;
