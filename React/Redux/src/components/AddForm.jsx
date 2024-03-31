import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddForm = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
            evt.preventDefault();
            console.log(task);
            dispatch(addTodo(task))
        }

return (
    <>
    <form onSubmit={submitHandler}>
        <input type='text' onChange={(e) => setTask(e.target.value)}></input>
        <button>Add</button>
    </form>
    </>
)
}

export default AddForm