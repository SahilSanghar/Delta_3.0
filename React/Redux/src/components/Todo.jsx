import React from 'react'
import { useSelector } from 'react-redux'
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("Delete", id);
        dispatch(deleteTodo(id));
    }

return (
    <>
        <AddForm />
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (
            <li 
                key={todo.id}>
                {todo.task}
                <button onClick={() => clickHandler(todo.id)}>Delete</button>
            </li>))}
        </ul>
    </>
)
}

export default Todo