
import './App.css';
import axios from 'axios';
import React from "react";

function App() {
  const [pokemons, setpokemons] = React.useState(null);
  axios.get('https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json').then((response) => {
    setpokemons(response)
  })
  console.log(pokemons)
  return (
    <div>
    <h6 className="App-header">
      Sample Heading
    </h6>

    <table style= {{ margin: "auto" }}>
      <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>John</td>
        <td>35</td>
      </tr></tbody>
    </table>


    </div>
  );
}

export default App;
