import React from "react";
import TodoItem from "../todo-item";

import './todolist.css';


const TodoList = ({posts, onDelete, onCompleted}) => {

    const elements = posts.map(element => {

        return (
            <li key={element.id} className='li-style'>
                <TodoItem
                label={element.label}
                onDelete={() => onDelete(element.id)}
                onCompleted={onCompleted}/>
            </li>
        )
    });

    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList;