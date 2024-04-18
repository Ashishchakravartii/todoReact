import React from 'react'
import CreateTodo from './components/CreateTodo'
import ShowTodo from './components/ShowTodo'

const App = () => {
  return (
    <div>
      <h1>Todo Light </h1>
      <CreateTodo/>
      <p>Your Pending Todo will shown here...</p>

      <hr />
      <ShowTodo/>

      
       </div>
  )
}

export default App