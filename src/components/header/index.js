import React from "react";
import TextInput from "../text-input";
import Btn from "../button";
import './header.css';

const Header = () => {
    return (
        <>
            <h1>My todo List</h1>
            <div>
                <TextInput />
                <Btn delete={false}/>
            </div>
        </>
    )
}

export default Header;