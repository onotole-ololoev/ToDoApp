import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            textInput: '',
            targets: []
        }
        this.deleteTarget = this.deleteTarget.bind(this);
        this.addTarget = this.addTarget.bind(this);
        this.onInputValue = this.onInputValue.bind(this);
        this.onCompleted = this.onCompleted.bind(this);


    }

    deleteTarget(id) {
        const targets = this.state.targets.filter(item => item.id !==id);
        this.setState({targets});

    }

    addTarget() {
       const newLabel = {
                label: this.state.textInput,
                completed: false,
                id: uuidv4()
        };
        this.setState(({targets}) => {
            const newArr = [...targets, newLabel];
            return {
                targets: newArr,
                textInput: ''
            }
        });

    }

    onInputValue(e) {
        this.setState(
            {textInput: e.target.value}
        )
    }

    onCompleted() {
        this.setState({completed: true});
        console.log(this.state.targets.completed);
        const targets = this.state.targets.map((item) => item.completed === false);
        this.setState({targets});
    }

    render() {

        return (
            <div className='app'>
                <Header
                    addTarget={this.addTarget}
                    onInputValue={this.onInputValue}
                    value={this.state.textInput}/>
                <div className='todolist'>
                    <div className='todo-box'>
                        <h2>Need to do</h2>
                        <TodoList
                            onCompleted={this.onCompleted}
                            posts={this.state.targets}
                            onDelete={this.deleteTarget}/>
                    </div>
                    <div className='done-box'>
                        <h2>Done!</h2>
                        <TodoList
                            onCompleted={this.onCompleted}
                            posts={this.state.targets}
                            onDelete={this.deleteTarget}/>
                    </div>
                </div>
            </div>
        )
    }
}
