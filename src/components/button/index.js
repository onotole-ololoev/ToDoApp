import React, {Component} from "react";
import './button.css';

const Button = ({label, variant, onClick}) => {
    let classNames = variant ? `btn btn--${variant}`: 'btn';
    return (
        <button
            type='button'
            className={classNames}
            onClick={onClick}
            >{label}</button>
            )
}


export default Button;