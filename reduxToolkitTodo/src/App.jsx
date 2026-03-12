import { useEffect, useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { useSelector } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)
  const todos = useSelector(state => state.todos)
  //const [value, setValue] = useState(todos)


  return (
    <div className='flex flex-row h-lvh justify-center items-center bg-gray-700 text-white'>
      <div className='m-4 p-2 bg-gray-600 rounded-2xl'>
      <div className=' border-white m-2 p-2 rounded-xl'>
        <AddTodo />
      </div>
   
      <div className=' border-white m-2 p-2 rounded-xl'>
        <ul>
          {todos.map((todo => 
          <li
          key={todo.id}
    //      onChange={() => setValue(todos)}
          >
            <Todos todos={todo}/>
          </li> ))}
        </ul>
      </div>
   </div>
   </div>
  )
}

export default App
