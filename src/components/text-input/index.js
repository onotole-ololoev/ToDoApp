import React from "react";
import './text-input.css';

const TextInput = ({text}) => {



    return (
        <input
            className='input'
            type='text'
            placeholder='Новая задача'
            onChange={(e) => {
                e.target = text;
            }}
        />
    )
}

export default TextInput;