import { useState } from 'react'
import '../App.css';

export const Greet = (props) => {
    return (
        <div className="App">
          {props.name}
        </div>
      );
}

export const Reset = () => {
  const [ message, setMessage ] = useState('Learning React 18')
  return (
    <div>
      <h6>{ message }</h6> 
      <button onClick={ () => setMessage("Heading updated via useState")}>Reset Heading</button>
    </div>
  )
}