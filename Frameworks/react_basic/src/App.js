import logo from './logo.svg';
import './App.css';
import { Greet, Reset } from './components/Greet'
import { Parent } from './components/Parent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Basic React Application
        </p>
        <Parent />
        <Reset name = "Change state via prop"/>
      </header>
    </div>
  )
}

export default App;
