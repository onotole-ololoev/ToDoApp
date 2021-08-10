import React from "react";
import './text-input.css';

const TextInput = ({onInputValue, value}) => {

    return (
        <input
            value={value}
            className='input'
            type='text'
            placeholder='Новая задача'
            onChange={onInputValue}/>
    )
};

export default TextInput;