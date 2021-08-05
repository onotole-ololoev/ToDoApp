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
        const {label} = this.props;
        const {done} = this.state;
        let classNames = 'post-text'
        if (done) {
            classNames += ' done';
        }
        return (
            <div className='todo-item'>
                <p
                    onClick={this.onDone}
                    className={classNames}>{label}</p>
                <Btn delete/>
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