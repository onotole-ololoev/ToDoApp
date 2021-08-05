import React from "react";
import './text-input.css';

const TextInput = () => {

function doInput(e) {
        console.log(e.target.value)
    }

    return (
        <input
            className='input'
            type='text'
            placeholder='Новая задача'
            onChange={doInput}
        />
    )
}

export default TextInput;