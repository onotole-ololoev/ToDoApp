import React from "react";
import './text-input.css';

const TextInput = ({inputValue}) => {


    return (
        <input
            className='input'
            type='text'
            placeholder='Новая задача'
            // onChange={(e) => {
            //     console.log(e.target.value);
            //
            // }}
            onChange={inputValue}
        />
    )
}

export default TextInput;