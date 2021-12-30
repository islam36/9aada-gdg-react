import React, { useState } from 'react';
import TodoList from './TodoList';
import './Main.css'

let id = 1;

export default function Main() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);


    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick() {
        setTodos([...todos, {
            content: text,
            id: id++
        }]);
        
        setText('');
    }

    return (
        <div className="main">
            <h1 className="title">TODO app</h1>
            
            <div className="input-container">
                <input
                    className="input"
                    type="text"
                    value={text}
                    onChange={handleChange}
                />

                <button
                    className="btn btn-green"
                    onClick={handleClick}
                >add</button>
            </div>
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
}