import React, {useState} from 'react';
import './App.css';
import Custom from './custom';


function App() {

  const [counter,setcounter] = useState(100)

  function meclicking(){
    console.log('I clicked the button')
  }

  function clicker(){
    setcounter(counter => counter+1)
  }

  return <div>
        <h1>This is the header</h1>
        <Custom name='Aalam'/>
        <button onClick={meclicking}>Click me</button>
        <h2>Number: {counter}</h2>
        <button onClick={clicker}>Increase</button>
        <button onClick={clicker}>Decrease</button>
  </div>
  
}

export default App;
