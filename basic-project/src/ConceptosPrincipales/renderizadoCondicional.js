import React from "react";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

class RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userh1: false,
    };
  }

  UserGreeting = () => {
    console.log("Entra en funcion");
    return <h2>Hello {this.props.name}</h2>;
  };

  GuestGreeting() {
    return <h2>Please sign up.</h2>;
  }

  showName() {
    this.setState((state, props) => {
      return { userh1: !state.userh1 };
    });
  }

  username(){
    return <h2>Hello {this.props.name}</h2>;
  }

  render() {
    return (
      <div>
        <h1>Renderizado Condicional</h1>
        {this.props.isLogged ? this.UserGreeting() : this.GuestGreeting()}
        <LoginButton onClick={this.showName} />
        {this.userh1 ? this.username() : null}
      </div>
    );
  }
}

export default RenderizadoCondicional;
