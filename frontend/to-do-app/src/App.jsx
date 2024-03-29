import { useEffect, useState } from 'react'

import './App.css'

import useTodo from "./hooks/usetodo.js"

function App() {

  const todos = useTodo();
  console.log(todos, "todos")

  
  
  


    


  

  return (
    <>
      { todos.map(todo =><Todo title={todo.title} description={todo.description}/>)
      }
      

    </>
  )
}


function Todo (props) {
  return <div style={{background:"red"}}>
    {props.title}
    <br />
    {props.description}
  </div>
}

export default App
