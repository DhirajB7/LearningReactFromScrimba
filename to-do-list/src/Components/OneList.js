import React from 'react'


function OneList(props) {

    return (
        <p className="todo-item">
            <input type="checkbox" checked={props.task.completed} onChange={()=>{ props.handleChange(props.task.id)}}/> <span>{props.task.text}</span>
        </p>
    )
}

export default OneList