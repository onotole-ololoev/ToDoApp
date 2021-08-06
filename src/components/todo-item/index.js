import React, {Component} from "react";
import Button from "../button";

import './todo-item.css';

const TodoItem = ({label, onDelete}) => {

        return (
            <div className='todo-item'>
                <p>{label}</p>
                <Button
                    label={'Удалить'}
                    variant={'delete'}
                    /*onClick={() => { console.log('deleteeeee')}} */
                    onClick={onDelete}/>
            </div>
        )

}

export default TodoItem;

/*const TodoItem = ({label}) => {
    return (
        <div className='todo-item'>
            <p>{label}</p>
            <Btn delete='false'/>
        </div>
    )
}

export default TodoItem; */