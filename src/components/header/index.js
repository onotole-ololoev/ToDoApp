import React from "react";
import TextInput from "../text-input";
import Button from "../button";
import './header.css';

const Header = () => {

    return (
        <>
            <h1>My todo List</h1>
            <div className='header'>
                <TextInput />
                <Button
                    label={'Добавить'}
                    variant={'add'}
                    onClick={() => {console.log('addddd')}}/>
            </div>
        </>
    )
};

export default Header;