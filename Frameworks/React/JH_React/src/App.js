
import './App.css';
import axios from 'axios';
import React from "react";

function App() {
  const [pokemons, setpokemons] = React.useState(null);
  axios.get('https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json').then((response) => {
    setpokemons(response.data)
  })
  console.log(pokemons)
  return (
    <div>
    <h6 className="App-header">
      Pkemons
    </h6>

    <table style={{ width: "100%" }}>
      <thead>
        <tr>
        <th>Name</th>
        <th>Type</th>
        </tr>
      </thead>
      <tbody>
        { pokemons.map((el) => (
          <tr>
            <td>el.name.english</td>
          </tr>
        )) }
      </tbody>
    </table>


    </div>
  );
}

export default App;
