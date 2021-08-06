import React from "react";
import TextInput from "../text-input";
import Button from "../button";
import './header.css';

const Header = ({onSave}) => {


    return (
        <>
            <h1>My todo List</h1>
            <div className='header'>
                <TextInput />
                <Button
                    label={'Добавить'}
                    variant={'add'}
                    onClick={() => onSave('text')}/>
            </div>
        </>
    )
};

export default Header;