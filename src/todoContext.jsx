import React, { createContext, useState } from 'react'

export const todoCon = createContext();

const TodoContext = ({children}) => {
    const [todo, setTodo] = useState([])
  return (
    <todoCon.Provider value={{todo,setTodo}}>
     {children}
    </todoCon.Provider>
  )
}

export default TodoContext