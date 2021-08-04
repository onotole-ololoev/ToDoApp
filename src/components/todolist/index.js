import React from "react";
import TodoItem from "../todo-item";

import './todolist.css';

const TodoList = () => {
    return (
        <ul className='todo-list'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}

export default TodoList;