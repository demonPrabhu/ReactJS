import { useState, useCallback,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)
  
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  
   useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const generatePassword = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass =""

    if(numberAllowed){
      str+="0123456789"
    }

    if(charAllowed){
      str+="!@#$%^&*()-_=+[}]{|"
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor((Math.random() * str.length))
      pass+=str[char]
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed] )

  return (
    //  This is main div like body tag to make entire background gray and it's content at center using flex
    <div className='h-screen w-screen bg-gray-900  flex justify-center'>
      
      {/* This div is to make Card max-h-fit means height of card auto fit based on content*/}
      <div className='w-full max-w-md max-h-fit mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>

          {/* This div is for input to display Password and Copy Button */}
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          className='outline-none w-full py-1 px-1 bg-white rounded-md' 
          value={password}
          ref={passwordRef}
          readOnly
          placeholder='Password'
          />
          <button 
          className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-md m-4 '
          onClick={()=>copyPasswordToClipboard()}
          >
            Copy
            </button>
        </div >

      {/* For Slider for Length */}
      <div
      className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        onChange={(e)=> setLength(Number(e.target.value)) }
        min={6}
        max={20} 
        className='cursor-pointer'
         />
         <label htmlFor="length">Length: {length} </label>
        </div>

      {/* For Checkbox of Number Allowed */}
        <div className='flex items-center gap-x-1'> 
        <input
        className='text-white'
        onChange={ ()=>setNumberAllowed((prev)=>!prev) } 
        type="checkbox" 
        placeholder='Number' />
        <label htmlFor="number">Numbers</label>
        </div>

      {/* For Checkbox of Characters Allowed */}
        <div className='flex items-center gap-x-1'>
        <input
        className='text-white'
        onChange={ ()=>setCharAllowed((prev)=>!prev) } 
        type="checkbox" 
        placeholder='Characters' />
        <label htmlFor="charInput">Characters</label>  
        </div>

        </div>  

      </div>
    </div>
  )
}

export default App
