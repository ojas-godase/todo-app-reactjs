import React , {useState} from 'react'

export default function EditTodo(props) {
    const[value,setValue] = useState(props.value)
    function handleChange(e) { 
        setValue({id:props.value.id , text : e.target.value , isCompleted:false , isEditing:false})
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.editTodo(value)
        
    }

  return (
    <div>
        <form action="" className="edit-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='edit-todo-input'
                placeholder="Add a Task"
                onChange={handleChange}
                value={value.text}
            />
            <button type="submit" className="todo-button" >Done</button>
        </form>
    </div>
  )
}
