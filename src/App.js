import React, {Component} from "react";
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targets: [
                {label: 'Ебануть пивка с друзьями', done: false, id: 1},
                {label: 'Культурно выпить с женой', done: false, id: 2},
                {label: 'Наебениться водяры с котом', done: false, id: 3}
            ]
        }
        this.deleteTarget = this.deleteTarget.bind(this);
        this.addInput = this.addInput.bind(this);

        this.maxId = 4;
    }

    deleteTarget(id) {
        this.setState(({targets}) => {
            const index = targets.findIndex(item => item.id === id);

            const previos = targets.slice(0, index);
            const after = targets.slice(index + 1);
            const newTargets = [...previos, ...after];

            return {
                targets: newTargets
            }
        });

    }

    addInput(text) {
        console.log(text);
    }

    render() {

        return (
            <div className='app'>
                <Header onAddInput={this.addInput}/>
                <TodoList
                    posts={this.state.targets}
                    onDelete={this.deleteTarget}/>
            </div>
        )
    }
}
