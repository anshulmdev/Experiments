
import './App.css';

function App() {
  return (
    <div>
    <h6 className="App-header">
      Sample Heading
    </h6>
    <div style={{
      width: 800,
      margin: "auto"
    }}>
      Heading 2 without styling
    </div>

    <table style>
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
