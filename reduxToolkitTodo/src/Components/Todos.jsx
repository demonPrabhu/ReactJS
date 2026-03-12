import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos({todos}) {
    const dispatch = useDispatch()
   // const todos = useSelector(state => state.todos)
    return (
    <div>
        <input type="text" 
        value={todos.text}
        />
        <button
        onClick={
            (
                () => 
                {
                    console.log(todos.id);
                    //dispatch(()=>removeTodo(todos.id))
                    dispatch(removeTodo(todos.id))
                }
            )
        }
        >Delete</button>
    </div>
  )
}

export default Todos