import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //completed: false,
            textInput: '',
            targets: []
        }
        this.deleteTarget = this.deleteTarget.bind(this);
        this.addTarget = this.addTarget.bind(this);
        this.onInputValue = this.onInputValue.bind(this);
        this.onChecked = this.onChecked.bind(this);


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

    onChecked(e) {
        console.log(e.target.checked);
    }

    render() {

        let completedTargets = this.state.targets.filter(item => item.completed === true).length;
        let uncompletedTargets = this.state.targets.filter(item => item.completed === false).length;


        return (

            <div className='app'>
                <Header
                    addTarget={this.addTarget}
                    onInputValue={this.onInputValue}
                    value={this.state.textInput}/>
                <p>Выполнено - {completedTargets} задач, осталось - {uncompletedTargets}.</p>
                <div className='todolist'>
                    <div className='todo-box'>
                        <h2>Need to do</h2>
                        <TodoList
                            onChecked={this.onChecked}
                            posts={this.state.targets}
                            onDelete={this.deleteTarget}/>
                    </div>
                    <div className='done-box'>
                        <h2>Done!</h2>

                    </div>
                </div>
            </div>
        )
    }
}
