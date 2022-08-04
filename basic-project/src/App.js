import "./App.css";

const urlReact = "https://www.reactjs.org";

const user = {
  name: "Jaime",
  surname: "Perez",
};

const element = (
  <div>
    <h1>Hello World</h1>
  </div>
);

const getCompleteName = (name, surname) => {
  return (
    <p>
      Hola {name} {surname}, visita <a href={urlReact}> este link</a>
    </p>
  );
};

const App = () => {
  return (
    <div className="App">
      {element}
      {getCompleteName(user.name, user.surname)}
    </div>
  );
};

export default App;
