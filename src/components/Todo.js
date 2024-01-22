import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa"
import { MdModeEdit } from "react-icons/md"

export default function Todo(props) {
    const[done , setDone] = useState(props.isCompleted)
    function toggleCompleted() {
        setDone((prevDone) => !prevDone)
    }
    
  return (
    <div className='todo'>
        {done===false ? <p className='todo-text'>{props.todo}  </p> :
             <p className='todo-text'> <s>{props.todo} </s> </p>
        }
        <div className="options">
            {done===false ? <div className="circle" onClick={toggleCompleted}></div> :
                <div className="checkmark" onClick={toggleCompleted}>&#10004;</div>
            }
            <MdModeEdit size={25} className='edit' onClick={()=>props.handleEdit(props.id)}/>
            <FaTrash size={25} className='delete' onClick={()=>props.deleteTodo(props.id)}/>
        </div>
        
        
        
    </div>
  )
}
