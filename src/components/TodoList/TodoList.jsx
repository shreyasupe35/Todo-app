import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"
import todocontext from "../../context/todocontext";

function TodoList(){
const {todos,settodos}=useContext(todocontext);
    function ondeletetodo(id){
        const newTodoList=todos.filter(todo=> todo.id!= id);
        settodos(newTodoList);
    }
    function edittodo(id,newTodo){
        const newTodoList=todos.map(todo=>{
            if(todo.id=id){
                todo.text=newTodo;
            }
            return todo;
        });
        settodos(newTodoList);
    }
    function onfinishTodo(id,state){
        const newTodoList=todos.map(todo=>{
            if(todo.id=id){
                todo.isFinish=state;
            }
            return todo;
        });
        settodos(newTodoList);
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