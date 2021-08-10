import React from "react";
import Button from "../button";

import './todo-item.css';

const TodoItem = ({label, onDelete, onCompleted}) => {

        return (
            <div className='todo-item'>
                <p>{label}</p>
                    <div>
                         <input
                                type={'checkbox'}
                                onChange={onCompleted}/>
                         <Button
                                label={'Удалить'}
                                variant={'delete'}
                                onClick={onDelete}/>
                    </div>
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