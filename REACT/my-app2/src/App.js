import React, {useState,useEffect} from "react";

const quotes = ['Aalam loves rara-chan','Aalam can do anything for rara-chan',
                'Aalam wanna hug ra ra',"Aalam loves ra ra' cheeks"]

function App() {

  const [quote,setquote] = useState(quotes[0])
  const [counter,setcounter] = useState(0)

  useEffect(()=>{
    console.log('checking....',counter)
  },[counter])



  function randomquote(){
    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    setquote(randomQuote)
  }

  function increment(){
    setcounter(200)
  }

  return (
    <div className="App">
      <div>Quote : {quote}</div>
      <button onClick={randomquote}>Click me</button> */
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default App;
