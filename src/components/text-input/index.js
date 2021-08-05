import React from "react";
import './text-input.css';

const TextInput = () => {
    return (
        <input
            className='input'
            type='text'
            placeholder='Новая задача'
        />
    )
}

export default TextInput;