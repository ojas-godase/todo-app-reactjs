import React , {useState} from 'react'

export default function TodoForm(props) {
    const[value,setValue] = useState({id:null , text:"" , isCompleted:false , isEditing:false})
    function handleChange(e) { 
        setValue({id:null , text : e.target.value , isCompleted:false , isEditing:false})
    }
    function handleSubmit(e) {
        e.preventDefault()
        // to get the random id 
        value.id = Math.floor(Math.random() * 10000000)
        value.text = value.text.trim()
        props.addTodo(value)
        setValue( {id:null , text:"" , isCompleted:false , isEditing:false})
        
    }

  return (
    <div>
        <form action="" className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='todo-input'
                placeholder="Add a Task"
                onChange={handleChange}
                value={value.text}
            />
            <button type="submit" className="todo-button" > + New Task</button>
        </form>
    </div>
  )
}
