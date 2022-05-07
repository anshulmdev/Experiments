import logo from './logo.svg';
import './App.css';
import { Greet, Reset } from './components/Greet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Basic React Application
        </p>
        <Greet name = "Anshul Mishra"/>
        <Reset />
      </header>
    </div>
  )
}

export default App;
