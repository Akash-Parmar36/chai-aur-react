import { useState } from 'react'

function App() {
  
  let [bgColor , setBgColor] = useState("olive");

  let changeBgColor = (color) => {
     setBgColor(color);
  }

  return (  

    <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
        <div className='absolute bottom-20 left-80 bg-white p-2 rounded-2xl'>
         <button onClick={() => changeBgColor("red")} className='text-white bg-red-700 w-16 rounded-2xl mr-2 p-1'>Red</button>
         <button onClick={() => changeBgColor("green")} className='text-white bg-green-700 w-16 rounded-2xl mr-2 p-1'>Green</button>
         <button onClick={() => changeBgColor("blue")} className='text-white bg-blue-700 w-16 rounded-2xl mr-2 p-1'>Blue</button>
         <button onClick={() => changeBgColor("olive")} className='text-white bg-yellow-600 w-16 rounded-2xl mr-2 p-1'>Olive</button>
         <button onClick={() => changeBgColor("Gray")} className='text-white bg-gray-400 w-16 rounded-2xl mr-2 p-1'>Gray</button>
         <button onClick={() => changeBgColor("yellow")} className='text-black bg-yellow-400 w-16 rounded-2xl mr-2 p-1'>Yellow</button>
         <button onClick={() => changeBgColor("pink")} className='text-black bg-pink-300 w-16 rounded-2xl mr-2 p-1'>Pink</button>
         <button onClick={() => changeBgColor("purple")} className='text-white bg-fuchsia-800 w-16 rounded-2xl mr-2 p-1'>Purple</button>
         <button onClick={() => changeBgColor("lavender")} className='text-black bg-neutral-300 w-20 rounded-2xl mr-2 p-1'>Lavender</button>
         <button onClick={() => changeBgColor("white")} className='text-black bg-white w-16 rounded-2xl mr-2 p-1 border border-gray-200'>White</button>
         <button onClick={() => changeBgColor("black")} className='text-white bg-black w-16 rounded-2xl mr-2 p-1'>Black</button>
     </div>
    </div>
    
  )
}

export default App
