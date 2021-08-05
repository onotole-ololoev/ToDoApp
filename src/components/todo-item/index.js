import React, {Component} from "react";
import Btn from "../button";

import './todo-item.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
        this.onDone = this.onDone.bind(this);
    }

    onDone() {
        this.setState(({done}) => ({
            done: !done
        }))
    }

    render() {
        let classNames = 'post-text'
        if (this.state.done) {
            classNames += ' done';
        }
        const {label} = this.props;
        return (
            <div className='todo-item'>
                <p
                    onClick={this.onDone}
                    className={classNames}>{label}</p>
                <Btn delete='false'/>
            </div>
        )
    }
}



/*const TodoItem = ({label}) => {
    return (
        <div className='todo-item'>
            <p>{label}</p>
            <Btn delete='false'/>
        </div>
    )
}

export default TodoItem; */