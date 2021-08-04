import React from "react";
import DelBtn from "../delete-button";

import './todo-item.css';

const TodoItem = () => {
    return (
        <li className='todo-item'>
            Ебануть пивка с посонами!
            <DelBtn />
        </li>
    )
}

export default TodoItem;