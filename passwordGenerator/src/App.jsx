import { useState , useEffect , useRef, useCallback} from 'react'
import './App.css'

function App() {
      
  let [length , setLength] = useState(8);
  let [number , setNumber] = useState(false);
  let [character , setCharacter] = useState(false);
  let [password , setPassword] = useState("");

   const passwordRef = useRef(null);

   useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

   if(number) str += "012345678";
   if(character) str += "!@#$%^&*(){}[]?"

   for(let i = 1 ; i <= length ; i++){
       let index = Math.floor(Math.random()*str.length);
       pass += str.charAt(index);
   }

   setPassword(pass);

  } , [length , number , character , setPassword]) //setPassword has been used here for optimization


  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  },[password]);

  
  
  return (
    <>
         <div className='bg-gray-500 w-2/5 h-40 relative left-96 top-24 flex flex-wrap items-center rounded-3xl '>
             <div className='w-full relative left-8'>
                   
                        <input type="text" ref={passwordRef} className='outline-none h-12 w-9/12 rounded-l-xl text-orange-600 py-1 px-3 text-2xl' value={password} readOnly/>
                        <button className='outline-none bg-blue-500 text-white h-12 w-20 rounded-r-xl px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
                  
             </div>
             <div className='relative left-8 text-lg'>
                 
                        <input type="range" min={8} max={100} value={length} onChange={(event) => setLength(event.target.value)} id='range'/>
                        &nbsp;&nbsp;
                        <label htmlFor="range" className='text-orange-600 cursor-pointer'>Length ({length})</label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="checkbox" id='number' onChange={() => setNumber((prev) => !prev)}/>
                        &nbsp;&nbsp;
                        <label htmlFor="number" className='text-orange-600'>Numbers</label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="checkbox" id='character' onChange={() => setCharacter((prev) => !prev)}/>
                        &nbsp;&nbsp;
                        <label htmlFor="character" className='text-orange-600'>Characters</label>
                 
             </div>
         </div>
    </>
  )
}

export default App
