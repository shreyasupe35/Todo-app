import { useState } from "react";
import "./Todo.css"

function Todo({edittodo,text,isFinish,deletetodo}){

const [isEditing,setEditing]=useState(false);
const [todoText,setTodoText]=useState(text)
 return (
    <div>
    <input type="checkbox"  checked={isFinish}/>
    {isEditing?<input onChange={(e)=> setTodoText(e.target.value)}/>:<span>{todoText}</span>}
    
    <button onClick={()=>{setEditing(!isEditing);
    edittodo(todoText)}}>{isEditing? 'save':'edit'}</button>
    <button onClick={deletetodo}>Delete</button>
    </div>
 )

}
export default Todo;