import React, { createContext, useContext } from "react"

// Step1: Create Context
export const TodoContext = React.createContext(
    
    // Defining Boiler Plate as Props, not defining entire Functionailty, as it can be different for Local Storage / Database...
    {
        // array of objects
        todos : [
            {
                id: '1',
                todo: 'Todo Message',
                isCompleted: 'false'
            }
        ],
        addTodo : (todo) => {},
        updateTodo : (id, todo) => {},
        deleteTodo : (id) => {},
        toggleComplete : (id) => {}
    }
)

// Step2: Create Context Provider
export const TodoContextProvider = TodoContext.Provider;


// Step3: Create Custom Hook for Context
export const useTodo = () => 
     useContext(TodoContext)
