import React, {Component} from "react";
import TextInput from "../text-input";
import Button from "../button";
import './header.css';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        }
        this.onInput = this.onInput.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onInput(e) {
        // console.log(e.target.value);
        this.setState({
            textInput: e.target.value
        })
    }

    onAdd() {
        this.props.onSave(this.state.textInput);
        this.setState({
            textInput: ''
        })
    }



    render() {
        return (
            <>
                <h1>My todo List</h1>
                <div className='header'>
                    <TextInput
                        inputValue={this.onInput}
                        value={this.state.textInput}/>
                    <Button
                        label={'Добавить'}
                        variant={'add'}
                       // onClick={() => this.props.onSave(this.state.textInput)}
                        onClick={this.onAdd}
                    />
                </div>
            </>
        )
    }
}

/*const Header = ({onSave}) => {


    return (
        <>
            <h1>My todo List</h1>
            <div className='header'>
                <TextInput inputValue={(e) => {
                    const text = e.target.value;
                    return console.log(text);
                }}/>
                <Button
                    label={'Добавить'}
                    variant={'add'}
                    onClick={() => onSave('....')}/>
            </div>
        </>
    )
};

export default Header; */