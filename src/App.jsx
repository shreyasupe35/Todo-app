import { useEffect, useReducer, useState } from 'react';
import './App.css'

import TodoList from './components/TodoList/TodoList';

import todocontext from './context/todocontext.js';
import todoReducer from './Reducer/todoReducer.js';
import AddTodo from './components/AddTodo/AddTodo.jsx';

function App() {
  
  const {todos,dispatch}=useReducer(todoReducer,[]);

  

  return (
    <>
    <todocontext.Provider value={{todos,dispatch}}>
    <AddTodo/>
     <TodoList />
    </todocontext.Provider>
    </>
  )
}

export default App;
