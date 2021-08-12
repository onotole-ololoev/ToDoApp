import React from "react";
import Button from "../button";

import './todo-item.css';

const TodoItem = ({label, onDelete, onChecked, checked, onEdit, isEdited}) => {

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
                        {isEdited ? <Button
                            label={'Изм.'}
                            variant={'save'}
                            onClick={onEdit}
                                    /> : null}

                    </div>
            </div>
        )

}

export default TodoItem;
