import React from "react";
import TextInput from "../text-input";
import Button from "../button";
import './header.css';

const Header = ({onAddInput}) => {

    const onAdd = () => {
        console.log('addddd');
    }

    return (
        <>
            <h1>My todo List</h1>
            <div className='header'>
                <TextInput
                    addInput={onAddInput}/>
                <Button
                    label={'Добавить'}
                    variant={'add'}
                    onClick={onAdd}/>
            </div>
        </>
    )
};

export default Header;