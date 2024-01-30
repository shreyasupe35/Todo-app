import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"
import todocontext from "../../context/todocontext";

function TodoList(){
const {todos,dispatch}=useContext(todocontext);
    function ondeletetodo(id){
        
        dispatch[{type:'delete_todo',payload:{id}}];
    }
    function edittodo(id,newTodo){
        dispatch({type:'edit_todo',payload:{id,newTodo}})
    }
    function onfinishTodo(id,state){
        dispatch({type:'finish_todo',payload:{id,state}});
    }
 return (
    <>
    {todos && todos.map(
        (todo) => <Todo 
        key={todo.id} 
        text={todo.text} 
       
        isFinished={todo.isFinish}
        deletetodo={()=>ondeletetodo(todo.id)}
        edittodo={(newTodo)=>edittodo(todo.id,newTodo)}
        finishtodo={(state)=>onfinishTodo(todo.id,state)}/>)}
        
    </>
 )

}
export default TodoList;