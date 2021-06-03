import './todoList.scss';
import {TodoItemInput} from '../todo-item-input/todoItemInput'
import { useState } from 'react';

export const TodoList = () => {
    const [list, setList]: [string[], Function] = useState([])


    const addItem = (item: string) => {
        if(item) {
            const newList = [...list, item];
            setList(newList);
        }
    }

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
            <TodoItemInput addItemCallback={addItem}/>
        </div>
    )
}