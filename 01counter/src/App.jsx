import { useState } from 'react'
import './App.css'

function App() {
    
    let [counter , setCounter] = useState(15);

    let incrCount = () => {
       
       setCounter(counter < 20 ? counter = counter + 1 : counter);
    }

    let decCount = () => {
       
      setCounter(counter > 0 ? counter = counter - 1 : counter);
    }

    return (
      <>
         <h2>counter is {counter}</h2>
         <button onClick={incrCount}>increase counter</button>
         <br />
         <br />
         <button onClick={decCount}>decrease counter</button>
         <p>counter is {counter}</p>
      </>
    )
  
}

export default App
