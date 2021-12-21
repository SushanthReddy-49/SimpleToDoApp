import React from 'react'
import './Task.css'

const Task = (props) => {

    const deleteHandler = () =>{
        props.delHandler(props.id)
    }

    if (props.content===""){
        return null
    }
    return (
        <li className='task-item' onDoubleClick={deleteHandler}>
            {props.content}
        </li>
    )
}

export default Task
