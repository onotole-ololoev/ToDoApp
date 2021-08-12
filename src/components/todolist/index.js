import React from "react";
import TodoItem from "../todo-item";

import './todolist.css';


const TodoList = ({posts, onDelete, onChecked, onEdit}) => {

    const elements = posts.map(element => {

        return (
            <li key={element.id} className='li-style'>
                <TodoItem
                label={element.label}
                onDelete={() => onDelete(element.id)}
                onChecked={(e) => onChecked(e, element.id)}
                checked={element.completed}
                onEdit={(e) => onEdit(e, element.label)}
                />
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