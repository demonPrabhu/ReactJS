import { useState,useEffect } from 'react'
import { TodoContextProvider, useTodo } from './Contexts/index'
import {TodoForm, TodoItem} from './Components/index'

function App() {
  const [todos, setTodos] = useState([])

  const [loaded, setLoaded] = useState(false) // flag

  const addTodo = (todo) => {
    setTodos((prev)=>(
       [...prev, 
        {id:Date.now(),
      todo,
    isCompleted:false
  }]
        )
  ) 
}
  

  // Check todo is object so spread operator
  const updateTodo = (id,todo) => {
  //  setTodos((prev)=>( prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))  ))
      setTodos((prev)=>( prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo,todo: todo} : prevTodo))  ))
}


  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id ) )
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? ({...prevTodo, isCompleted: !prevTodo.isCompleted}) : prevTodo))
  }


  // Load todos once when the app mounts 
  useEffect(() => { const saved = localStorage.getItem("todos") 
    if (saved) 
      { setTodos(JSON.parse(saved)) } 
    setLoaded(true) 
    }, []) 
    // mark as loaded 
    
    // Save todos whenever they change, but only after load 
    useEffect(() => { if (loaded) { localStorage.setItem("todos", JSON.stringify(todos)) } }, [todos, loaded])
 



  
//   useEffect(()=>{ 
//     const saved= localStorage.getItem("todos")
//       if (saved){
//         setTodos(JSON.parse(saved))
//       }
// }, [])

//   useEffect( ()=>
//    { localStorage.setItem("todos", JSON.stringify(todos))
//   },[todos])




  return (
  <TodoContextProvider value={{addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className=' flex bg-gray-700 justify-center items-center w-full h-lvh '>
    <div className='flex flex-col bg-gray-500 p-10 m-5 rounded-xl'> 

    <div>
    <TodoForm />
    </div>
    
    <div  >
      {
        todos.map((todo)=> (
        <li key={todo.id} value= {todo.todo} className='list-none bg-gray-600 m-3 p-3 border-solid rounded-xl '>
          <TodoItem todo = {todo} />
           </li>
        ))
      }
    </div>
    
    </div>
    </div>
  </TodoContextProvider> 
  )
}

export default App;


//   useEffect(()=>{ 
//     const saved= localStorage.getItem("todos")
//       if (saved){
//         setTodos(JSON.parse(saved))
//       }
// }, [todos])