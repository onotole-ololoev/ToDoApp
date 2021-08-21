import React, {useState} from "react";
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
    // const {isEdited} = initState;
    //
    //
    // function setIsEdited(isEdited) {
    //         return isEdited;
    // }

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
                list: newArr,
                textInput: ''
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


        const completedTargets = state.list.filter(item => item.completed === true).length;
        const uncompletedTargets = state.list.filter(item => item.completed === false).length;


        return (

            <div className='app'>
                <Header
                    saveTarget={saveList}
                    isEdited={state.isEdited}
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