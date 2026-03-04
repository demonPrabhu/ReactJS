import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Contexts/index'

function TodoForm() {

    const [todo,setTodo] = useState('');

    const {addTodo} = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Todo from TodoForm  ${todo}`);
        addTodo(todo)
        setTodo('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        
        <input type="text" 
        placeholder='Write Todos'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        
        <button type="submit"
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >Submit</button>

        </form>
        </div>
  )
}

export default TodoForm