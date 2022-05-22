import { useState } from 'react'
import '../App.css';

export const Greet = (props) => {
    return (
        <div className="App">
          {props.name}
        </div>
      );
}

export const Reset = (props) => {
  const [ message, setMessage ] = useState('Learning React 18')
  return (
    <div>
      <h6>{ message }</h6> 
      <button onClick={ () => setMessage(props.name)}>Reset Heading</button>
    </div>
  )
}