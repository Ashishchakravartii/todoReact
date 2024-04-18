import React, { useContext } from 'react'
import { todoCon } from '../todoContext';

const ShowTodo = () => {
     const { todo, setTodo } = useContext(todoCon);

     const deleteHandler=(tid)=>{
        setTodo( todo.filter((t)=> tid !== t.id) )
     }

  return (
    <div>
      <h2>Your Todos</h2>
      <ul>
      {todo.map((t) => (
          <li key={t.id}> {t.currTodo} <button onClick={()=>(deleteHandler(t.id))}>❌</button> </li>  
        ))}
        </ul>
    </div>
  );
}

export default ShowTodo