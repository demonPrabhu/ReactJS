import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [todoMsg, setTodoMsg] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch( addTodo(todoMsg) )
        setTodoMsg('')
    } 

  return (
    <div>
        <form onSubmit= {handleSubmit} >
            <input 
            type="text"
            placeholder='Write Todo'
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddTodo