import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos,settodos]=useState([
    {id:1,text:'todo 1',isFinished:true},
    {id:2,text:'todo 2',isFinished:true},
    {id:3,text:'todo 3',isFinished:true}
  ]);
  function addTodos(todoText){
    let nextId=todos.length+1;
    settodos([...todos,{id:nextId,isFinished:false,text:todoText}])
  }

  return (
    <>
    <AddTodo addtodos={addTodos}/>
     <TodoList todos={todos} settodos={settodos}/>
    </>
  )
}

export default App;
