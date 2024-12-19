import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Helloo!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="pizza" />
      <Food fav="bread" />
    </div>
  );
}

export default App;
