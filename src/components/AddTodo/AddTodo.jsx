import { useContext, useState } from 'react';
import './AddTodo.css'
import todocontext from '../../context/todocontext';


function AddTodo(){
    
    const [todoText,setTodoText]=useState('')

    

    const {dispatch}=useContext(todocontext);
    function addtodo(todoText){
        
        dispatch({type:'add_todo',payload:{todoText}});
    }
    return (
        <>
        <input placeholder='Add your next TOdO' 
        onChange={(e)=> setTodoText(e.target.value)}
        value={todoText}/>
        <button
        onClick={()=>{
         addtodo(todoText)
         setTodoText('')
        }}>Submit</button>
        </>
    )
}

export default AddTodo;