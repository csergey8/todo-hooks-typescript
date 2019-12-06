import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[];
    toggleHandler(id: number):void;
    deleteHandler(id: number):void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleHandler, deleteHandler }) => {
    const renderTodos = () => {
        return todos.map(todo => (
            <li key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleHandler(todo.id)} />
                    <span>{todo.title}</span>
                    <span onClick={deleteHandler.bind(null, todo.id)}>X</span>
                </label>
            </li>
        ))

    }
    return (
        <div>
            <ul>
                {
                    renderTodos()
                }
            </ul>
        </div>
    )
}
