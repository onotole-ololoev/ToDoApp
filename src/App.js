import React, {Component, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';



const App = () => {

    const [textInput, setTextInput] = useState('');
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState('');
    const [targets, setDeleteTargets] = useState([]);
    const [targets, setAddTargets] = useState([]);
    const [target, setSaveTarget] = useState();


    function setIsEdited(isEdited) {
            return isEdited;
    }

    function setEditedId(editedId) {
        return editedId;
    }

    function setDeleteTarget(id) {
            const newArr = targets.filter(item => item.id !==id);
            return newArr;
         }

    function setAddTarget() {
            const newLabel = {
                    label: textInput,
                    completed: false,
                    id: uuidv4()
            };

            const newArr = [...targets, newLabel];
            return newArr;

    }

    function setTextInput(e) {
        const textInput = e.target.value;
        return textInput;

     }

    function onChecked(e, todoId) {
        const newArr = targets.map((item) => {
            if (item.id === todoId) {
                return {...item, completed: e.target.checked}
            } else {
                return item
            }
        })
        return newArr;
    }


    function onEdit(id){
        const editedItem = targets.find((item) => item.id === id);
        setIsEdited(true);
        setTextInput(editedItem.label);
        setEditedId(editedItem.id);
    }

    function saveTarget() {
        const editedArr = targets.map((item) => {
            if (item.id === editedId) {
                return {...item, label: textInput}
            } else {
                return {item}
            }
        })
        setIsEdited(false);
        setTextInput('');
        setEditedId('');
        return editedArr;
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
        const completedTargets = targets.filter(item => item.completed === true).length;
        const uncompletedTargets = targets.filter(item => item.completed === false).length;


        return (

            <div className='app'>
                <Header
                    saveTarget={saveTarget}
                    isEdited={setIsEdited}
                    addTarget={setAddTarget}
                    onInputValue={setTextInput}
                    value={textInput}/>
                <p>Выполнено - {completedTargets} задач, осталось - {uncompletedTargets}.</p>
                <div className='todolist'>
                    <div className='todo-box'>
                        <h2>Need to do</h2>
                        <TodoList
                            onChecked={onChecked}
                            posts={targets.filter(item => !item.completed)}
                            onDelete={setDeleteTarget}
                            onEdit={onEdit}
                            isEdited
                        />
                    </div>
                    <div className='done-box'>
                        <h2>Done!</h2>
                        <TodoList

                            onChecked={onChecked}
                            posts={targets.filter(item => item.completed)}
                            onDelete={setDeleteTarget}/>
                    </div>
                </div>
            </div>
        )


}

export default App;