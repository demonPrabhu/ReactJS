import React, {useState} from 'react'
import { useTodo } from '../Contexts/index'

function TodoItem(
    {todo}
) {
    
    const {updateTodo, deleteTodo, toggleComplete} = useTodo();

    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isEditing, setIsEditing] = useState(false)

    const editTodo = () => {
        updateTodo(todo.id, todoMsg)
        setIsEditing(false)
        // if(!isEditing) return
        // // updateTodo(todo.id, { ...todo, todo: todoMsg })
        // updateTodo(todo.id, todoMsg)
        // setIsEditing((prev)=>!prev)
    }

    console.log(todo);
    
 
    return (
    <div className={`text-white ${todo.isCompleted ? 'line-through' : 'font-bold' }    `}>

        <input 
        type= 'checkbox'
        checked= {todo.isCompleted}
        onChange= {()=> toggleComplete(todo.id)}
        />

        <input 
        type='text'
        className= {`${todo.isCompleted ? "line-through border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e)=>
            {setTodoMsg(e.target.value)
           // editTodo()
            console.log(`Input ${todoMsg}`)
        }}
        readOnly={!isEditing}
        />

        <button
        onClick={() => {
            if (todo.isCompleted) return
            if (isEditing) {
                editTodo()
            }else setIsEditing((prev) => !prev)
        }}
        // onClick= {()=> 
        //   // setIsEditing((prev)=>!prev)
        //    if(!isEditing) return
        // editTodo()
        // setIsEditing((prev)=>!prev)
        // }
        disabled= {todo.isCompleted}
        >
        {isEditing ? 'Save' : 'Edit'}    
        </button>

        <button
        onClick= {()=>deleteTodo(todo.id)}
        > Delete </button>

        {/* {
        todosDisp.map((tod)=>
        <li 
        key={tod.id}
        value={tod.todo}
        > 
        <input 
        className=  {` ${ tod.isCompleted ? 'line-through border-none ' : 'text-white'}  `} 
        type="text"
        value={tod.todo}
        placeholder='Test'
        readOnly={!tod.isEditing}
        onClick={()=> toggleComplete(tod.id) } 
        onChange={(e)=>updateTodo(tod.id, e.target.value)} 
            //{...tod, !tod.isCompleted} }
        />

        <button
        onClick={()=>setIsEditing((prev)=>!prev)}
        >✏️ </button> 
        
        <button
        onClick={()=> deleteTodo(tod.id)}
        >🗑️ </button>
        
        </li>
        )
        } */}


    </div>
  )
}

export default TodoItem