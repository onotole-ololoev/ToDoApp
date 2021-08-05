import React from "react";
import Btn from "../button";

import './todo-item.css';

const TodoItem = ({label}) => {
    return (
        <div className='todo-item'>
            <p>{label}</p>
            <Btn delete='false'/>
        </div>
    )
}

export default TodoItem;