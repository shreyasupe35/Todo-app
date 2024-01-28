import { useState } from 'react';
import './AddTodo.css'

function AddTodo({addtodos}){
    const [todoText,setTodoText]=useState('')
    return (
        <>
        <input type="text" placeholder='Add your next TOdO' 
        onChange={(e)=> setTodoText(e.target.value)}
        value={todoText}/>
        <button
        onClick={()=>{
         addtodos(todoText)
         setTodoText("")
        }}>Submit</button>
        </>
    )
}

export default AddTodo;