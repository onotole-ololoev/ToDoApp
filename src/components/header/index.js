import React, {Component} from "react";
import TextInput from "../text-input";
import Button from "../button";
import './header.css';


const Header = ({addTarget, onInputValue, value, isEdited, saveTarget}) => {


        return (
            <>
                <h1>My todo List</h1>
                <div className='header'>
                    <TextInput
                        onInputValue={onInputValue}
                        value={value}
                        />
                    <Button
                        label={isEdited ? 'Сохранить' : 'Добавить'}
                        variant={isEdited ? 'save' : 'add'}
                        onClick={isEdited ? saveTarget : addTarget}
                    />
                </div>
            </>
        )

}
export default Header;
