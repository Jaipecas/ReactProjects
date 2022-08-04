
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

const PresentandoJSX = () => {
  return (
    <div>
      {element}
      <p>Hola JSX, {user.name}</p>
      {getCompleteName(user.name, user.surname)}
    </div>
  );
};

const PresentandoJSU = () => {
  return (
    <div>
      {element}
      <p>Hola JSU, {user.name}</p>
      {getCompleteName(user.name, user.surname)}
    </div>
  );
};


export  {PresentandoJSX, PresentandoJSU};
