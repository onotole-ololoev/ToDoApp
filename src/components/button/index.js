import React, {Component} from "react";
import './button.css';

const Button = ({label, variant, onClick}) => {
    let typeBtn = variant ? `submit`: 'button';
    let classNames = variant ? `btn btn--${variant}`: 'btn';
    return (
        <button
            type={typeBtn}
            className={classNames}
            onClick={onClick}
            >{label}</button>
            )
}


export default Button;