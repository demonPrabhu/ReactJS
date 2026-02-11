import { useState } from "react"


function App() {

  const [ color,setColor ] = useState("olive")

  return (
    <>
    <div className=" w-full h-screen  duration-200" 
    style={{backgroundColor: color}}
    >
      <div id='buttons' className=" fixed bottom-12 flex flex-wrap inset-x-0 px-2 justify-center bg-white " >
        <button className="bg-red-500 border-2 rounded-full px-4 py-1 shadow-lg"
        onClick= { ()=> setColor('red')  }
        >
          Red
        </button>

        <button className="bg-yellow-500 border-2 rounded-full px-4 py-1 shadow-lg "
        onClick= { ()=> setColor('#1a1a1a')  }
        >
          Yellow
        </button>
      </div>

    </div>
    </>
  )
}

export default App
