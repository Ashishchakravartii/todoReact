import React, { useContext, useState } from 'react'
import { todoCon } from '../todoContext';
import { v4 as uuidv4 } from "uuid";

const CreateTodo = () => {
   const {todo, setTodo } = useContext(todoCon);
   const [currTodo, setCurrTodo] = useState("")

    const todoHandler= ()=>{
    setTodo([...todo, { currTodo, id: uuidv4() }]);
    setCurrTodo("");
   }

  return (
    <div>
      <h3>Create Your Todos From Here!!!</h3>
        <input  value={currTodo} onChange={(e)=> setCurrTodo(e.target.value)}  type="text" placeholder="Create Todo" />
        <button onClick={todoHandler}>Create</button>
    </div>
  );
}

export default CreateTodo