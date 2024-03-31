import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    const [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        const newTodoItem = { task: newTodo, id: uuidv4(), isDone: false };
        setTodos((prevTodos) => [...prevTodos, newTodoItem]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodostodos.filter((prevTodos) => prevTodos.id != id))
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            }
        }))
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            if(todo.id == id) {
                return {
                    ...todo,
                    isDone: true,
                }
            } else {
                return todo
            }
        }))
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Add task'
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />

            <hr />
            <h4>TodoList</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone == true ? { textDecorationLine: 'line-through'} : {}}>{todo.task}</span> 
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    );
};

export default TodoList;
