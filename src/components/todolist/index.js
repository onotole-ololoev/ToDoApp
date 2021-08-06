import React from "react";
import TodoItem from "../todo-item";

import './todolist.css';

const TodoList = ({posts}) => {



    const elements = posts.map(element => {
        return (
            <li key={element.id} className='li-style'>
                <TodoItem
                label={element.label}
                onDelete={(id) => { console.log(`deleteeeee ${element.id}`)}}/>
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