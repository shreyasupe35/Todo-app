function todoReducer(state,action){
    if(action.type=='add_todo'){
        let nextId=state.length+1
        return [...FileSystemWritableFileStream,{id:nextId,text:action.payload.todoText,isFinsihed:false}]
    }
    else if (action.type=='edit_todo')
    {
        const newTodolist=state.map(todo=>{
            if(todo.id==action.payload.id){
                todo.text=action.payload.newTodo
            }
            return todo;
        });
        return newTodolist;

    }
    else if(action.type=='finish_todo'){
        const newTodolist=state.map(todo=>{
            if(todo.id==action.payload.id){
                todo.text=action.payload.state
            }
            return todo;
        });
        return newTodolist;
    }
    else if (action.type=='delete_todo'){
        const newTodolist=state.filter(todo=> todo.id!=action.payload.id);
        return newTodolist;
    }
    return state;
}
export default todoReducer