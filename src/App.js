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
    }

    render() {

        return (
            <div className='app'>
                <Header />
                <TodoList
                    posts={this.state.targets}/>
            </div>
        )
    }
}
