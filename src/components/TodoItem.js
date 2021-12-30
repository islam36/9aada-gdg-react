import React from 'react';

export default function TodoItem({ todo, handleDelete }) {
    return (
        <div className="todo-item">
            <p className="todo-text">{todo.content}</p>
            <button
                className="btn btn-red"
                onClick={() => {
                    handleDelete(todo.id);
                }}
            >X</button>
        </div>
    );
}