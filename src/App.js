import React, { useState } from 'react';
import './App.css';

import TodoItem from "./components/TodoItem";
import Bar from "./components/Bar";

const todos = [
    { id: 1, name: 'Go to the supermarket', complete: false },
    { id: 2, name: 'Call Alice', complete: false },
    { id: 3, name: 'Ask Alice to call Bob', complete: false },
    { id: 4, name: 'Do the dishes', complete: false },
    { id: 5, name: 'Change car tyres', complete: false }
];

function App() {
    const [state, setState] = useState({
        newTodoName: "",
        todos
    });

    const generateNewId = () => state.todos.length + 1;

    const onSubmit = event => {
        event.preventDefault();

        const newTodo = {
            id: generateNewId(),
            name: state.newTodoName,
            complete: false
        };

        setState({
            newTodoName: "",
            todos: [...state.todos, newTodo]
        });
    }

    const onClick = id => {
        const newTodos = state.todos.map(todo => {
            if (todo.id === id) todo.complete = !todo.complete;
            return todo;
        });

        setState({ ...state, todos: newTodos });
    }

    const onChange = event => {
        setState({ ...state, newTodoName: event.target.value });
    }

    const onRemoveClick = id => {
        const newTodos = state.todos.filter(todo => todo.id !== id);

        setState({ ...state, todos: newTodos });
    }

    return (
        <div className="app">
            {
                state.todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onClick={onClick}
                        onRemoveClick={onRemoveClick}
                    />
                )
            }
            <Bar
                onSubmit={onSubmit}
                newTodoName={state.newTodoName}
                onInputChange={onChange}
            />
        </div>
    );
}

export default App;