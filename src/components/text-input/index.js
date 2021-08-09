import React from "react";
import './text-input.css';

const TextInput = ({inputValue, value}) => {

    return (
        <input
            value={value}
            className='input'
            type='text'
            placeholder='Новая задача'
            onChange={inputValue}/>
    )
};

export default TextInput;