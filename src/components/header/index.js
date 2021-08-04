import React from "react";
import TextInput from "../text-input";
import SubmitBtn from "../submit-button";
import './header.css';

const Header = () => {
    return (
        <>
            <h1>My todo List</h1>
            <div>
                <TextInput />
                <SubmitBtn />
            </div>
        </>
    )
}

export default Header;