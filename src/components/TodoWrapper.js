import React , {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodo from './EditTodo'

export default function TodoWrapper() {
    const[todos , setTodos] = useState([])
    // add the todo
    function addTodo(todo) {
        if(todo.text==="") {
            return
        }
        setTodos((prevTodos) => ([todo,...prevTodos]))  
            
    }
    // deletes the todo
    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id!==id))
    }
    function handleEdit(id) {
        const newTodos = todos.map((todo) => {
            if(todo.id===id) {
                todo.isEditing = !todo.isEditing
                return todo  
            } else {
                return todo
            }
        })
        setTodos(newTodos)
    }
    function edit(value) {
        const newTodos = todos.map((todo) => {
            if(todo.id===value.id) {
                todo.text = value.text
                todo.isEditing = false
                return todo 
            } else {
                return todo
            }
        })
        setTodos(newTodos)
    }
    

  return (
    <div>
        <h1 className='title'>What's the Plan today ?</h1>
        <TodoForm addTodo={addTodo} />
        
        {   
            todos.map((todo) => {
                if(!todo.isEditing) {
                    return <Todo id={todo.id} todo={todo.text} deleteTodo={deleteTodo} isCompleted={todo.isCompleted} handleEdit={handleEdit} key={todo.id} />
                } else {
                    return < EditTodo value={todo} editTodo={edit} key={todo.id}/>
                }
            })            
        }
    </div>
  )
}
