import React from "react";
import Button from "../button";

import './todo-item.css';

const TodoItem = ({label, onDelete, onChecked, checked, onEdit}) => {

        return (
            <div className='todo-item'>
                <p>{label}</p>
                    <div>
                         <input
                                type={'checkbox'}
                                onChange={onChecked}
                                checked={checked}/>
                         <Button
                                label={'Удалить'}
                                variant={'delete'}
                                onClick={onDelete}/>
                        <Button
                            label={'Изм.'}
                            variant={'save'}
                            onClick={onEdit}/>
                    </div>
            </div>
        )

}

export default TodoItem;
