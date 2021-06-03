import './todoList.scss';
import {TodoItemInput} from '../todo-item-input/todoItemInput'
import { useState } from 'react';

export const TodoList = () => {
    const [list, setList] = useState(['do something', 2, 3])

    return (
        <div className="todo-list-container">
            <h2>Todo List</h2>
            <div className="todo-list-box">
                <ul>
                {list.map((value, index) => {
                    return <li key={index.toString()}>{value}</li>
                })}
                </ul>
            </div>
            <TodoItemInput />
        </div>
    )
}