import React from "react";
import './text-input.css';

const TextInput = ({addInput}) => {



    return (
        <input
            className='input'
            type='text'
            placeholder='Новая задача'
            onChange={(e) => addInput(e.target.value)}
        />
    )
}

export default TextInput;