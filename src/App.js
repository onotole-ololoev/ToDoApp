import React from "react";
import Header from './components/header';
import TodoList from "./components/todolist";


import './App.css';



const App = () => {

    const data = [
        {label: 'Ебануть пивка с друзьями', id: 1},
        {label: 'Культурно выпить с женой', id: 2},
        {label: 'Наебениться водяры с котом', id: 3}
    ]

        return (
            <div className='app'>
                <Header />
                <TodoList posts={data}/>
            </div>
        )
}

export default App;