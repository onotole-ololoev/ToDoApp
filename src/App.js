import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            isEdited: false,
            editedId: '',
            targets: []
        }
        this.deleteTarget = this.deleteTarget.bind(this);
        this.addTarget = this.addTarget.bind(this);
        this.onInputValue = this.onInputValue.bind(this);
        this.onChecked = this.onChecked.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.saveTarget=this.saveTarget.bind(this);


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

    onChecked(e, todoId) {
        const newArr = this.state.targets.map((item) => {
            if (item.id === todoId) {
                return {...item, completed: e.target.checked}
            } else {
                return item
            }
        })
        this.setState({targets : newArr});
    }

    onEdit(id){
        const editedItem = this.state.targets.find((item) => item.id === id);
        this.setState({
            isEdited: true,
            textInput: editedItem.label,
            editedId: editedItem.id
            })
        console.log(editedItem.id, editedItem.label);

    }

    saveTarget(editedId) {
        const editedArr = this.state.targets.map((item) => {
            if (item.id === editedId) {
                return {...item, label: this.state.textInput}
            } else {
                return {item}
            }
        })

        this.setState({
            isEdited: false,
            targets: editedArr,
            textInput: '',
            editedId: ''
        })

    }


    render() {

        const completedTargets = this.state.targets.filter(item => item.completed === true).length;
        const uncompletedTargets = this.state.targets.filter(item => item.completed === false).length;


        return (

            <div className='app'>
                <Header
                    saveTarget={this.saveTarget}
                    isEdited={this.state.isEdited}
                    addTarget={this.addTarget}
                    onInputValue={this.onInputValue}
                    value={this.state.textInput}/>
                <p>Выполнено - {completedTargets} задач, осталось - {uncompletedTargets}.</p>
                <div className='todolist'>
                    <div className='todo-box'>
                        <h2>Need to do</h2>
                        <TodoList
                            onChecked={this.onChecked}
                            posts={this.state.targets.filter(item => !item.completed)}
                            onDelete={this.deleteTarget}
                            onEdit={this.onEdit}
                            isEdited
                        />
                    </div>
                    <div className='done-box'>
                        <h2>Done!</h2>
                        <TodoList

                            onChecked={this.onChecked}
                            posts={this.state.targets.filter(item => item.completed)}
                            onDelete={this.deleteTarget}/>
                    </div>
                </div>
            </div>
        )
    }
}
