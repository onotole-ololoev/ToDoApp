import React, {Component, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';

const initState = {
    textInput: '',
    isEdited: false,
    editedId: '',
    list: []
}

const App = () => {

    const [state, setState] = useState(initState);

    function isEdited() {
            return state.isEdited;
    }

    function deleteList(id) {
            const newArr = state.list.filter(item => item.id !==id);
            setState({
                ...state,
                list: newArr
            })
         }

    function addList() {
            const newLabel = {
                    label: state.textInput,
                    completed: false,
                    id: uuidv4()
            };

            const newArr = [...state.list, newLabel];
            setState({
                ...state,
                list: newArr
            });
    }

    function setTextInput(e) {
        const newTextInput = e.target.value;
        setState({
            ...state,
            textInput: newTextInput
        })
     }

    function onChecked(e, todoId) {
        const newArr = state.list.map((item) => {
            if (item.id === todoId) {
                return {...item, completed: e.target.checked}
            } else {
                return item
            }
        })
        setState({
            ...state,
            list: newArr
        })
    }


    function onEdit(id){
        const editedItem = state.list.find((item) => item.id === id);
        setState({
            ...state,
            textInput: editedItem.label,
            isEdited: true,
            editedId: editedItem.id
        })
    }

    function saveList() {
        const editedArr = state.list.map((item) => {
            if (item.id === state.editedId) {
                return {...item, label: state.textInput}
            } else {
                return {item}
            }
        })
        setState({
            ...state,
            isEdited: false,
            textInput: '',
            editedId: '',
            list: editedArr
        })
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         textInput: '',
    //         isEdited: false,
    //         editedId: '',
    //         targets: []
    //     }
    //     this.deleteTarget = this.deleteTarget.bind(this);
    //     this.addTarget = this.addTarget.bind(this);
    //     this.onInputValue = this.onInputValue.bind(this);
    //     this.onChecked = this.onChecked.bind(this);
    //     this.onEdit=this.onEdit.bind(this);
    //     this.saveTarget=this.saveTarget.bind(this);
    //
    //
    // }
    //
    // deleteTarget(id) {
    //     const targets = this.state.targets.filter(item => item.id !==id);
    //     this.setState({targets});
    //
    // }
    //
    // addTarget() {
    //    const newLabel = {
    //             label: this.state.textInput,
    //             completed: false,
    //             id: uuidv4()
    //     };
    //     this.setState(({targets}) => {
    //         const newArr = [...targets, newLabel];
    //         return {
    //             targets: newArr,
    //             textInput: ''
    //         }
    //     });
    //
    // }
    //
    // onInputValue(e) {
    //     this.setState(
    //         {textInput: e.target.value}
    //     )
    // }
    //
    // onChecked(e, todoId) {
    //     const newArr = this.state.targets.map((item) => {
    //         if (item.id === todoId) {
    //             return {...item, completed: e.target.checked}
    //         } else {
    //             return item
    //         }
    //     })
    //     this.setState({targets : newArr});
    // }
    //
    // onEdit(id){
    //     const editedItem = this.state.targets.find((item) => item.id === id);
    //     this.setState({
    //         isEdited: true,
    //         textInput: editedItem.label,
    //         editedId: editedItem.id
    //         })
    //     console.log(editedItem.id, editedItem.label);
    //
    // }
    //
    // saveTarget() {
    //     const editedArr = this.state.targets.map((item) => {
    //         if (item.id === this.state.editedId) {
    //             return {...item, label: this.state.textInput}
    //         } else {
    //             return {item}
    //         }
    //     })
    //
    //     this.setState({
    //         isEdited: false,
    //         targets: editedArr,
    //         textInput: '',
    //         editedId: ''
    //     })
    //
    // }
        const completedTargets = state.list.filter(item => item.completed === true).length;
        const uncompletedTargets = state.list.filter(item => item.completed === false).length;


        return (

            <div className='app'>
                <Header
                    saveTarget={saveList}
                    isEdited={isEdited}
                    addTarget={addList}
                    onInputValue={setTextInput}
                    value={state.textInput}/>
                <p>Выполнено - {completedTargets} задач, осталось - {uncompletedTargets}.</p>
                <div className='todolist'>
                    <div className='todo-box'>
                        <h2>Need to do</h2>
                        <TodoList
                            onChecked={onChecked}
                            posts={state.list.filter(item => !item.completed)}
                            onDelete={deleteList}
                            onEdit={onEdit}
                            isEdited
                        />
                    </div>
                    <div className='done-box'>
                        <h2>Done!</h2>
                        <TodoList

                            onChecked={onChecked}
                            posts={state.list.filter(item => item.completed)}
                            onDelete={deleteList}/>
                    </div>
                </div>
            </div>
        )


}

export default App;