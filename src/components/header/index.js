import React, {Component} from "react";
import TextInput from "../text-input";
import Button from "../button";
import './header.css';


const Header = ({addTarget, onInputValue, value}) => {


        return (
            <>
                <h1>My todo List</h1>
                <div className='header'>
                    <TextInput
                        onInputValue={onInputValue}
                        value={value}
                        />
                    <Button
                        label={'Добавить'}
                        variant={'add'}
                        onClick={addTarget}
                    />
                </div>
            </>
        )

}
export default Header;
