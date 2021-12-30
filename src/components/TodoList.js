import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {

    function handleDelete(id) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        console.log(newTodos);
        setTodos(newTodos);
    }


    return (
        <div className="todos">
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            handleDelete={handleDelete}
                        />
                    );
                })
            }
        </div>
    );
}