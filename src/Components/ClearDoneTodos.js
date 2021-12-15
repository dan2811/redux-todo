import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanTodos, selectTodoList } from '../features/todoSlice';



const ClearDoneTodos = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);

    const cleanUp = () => {
        const completeTodos = todoList.filter(todo => todo.done === true);
        dispatch(cleanTodos(completeTodos));
    }

    return (
        <div>
            <button onClick={cleanUp}>Clean up!</button>
        </div>
    )
}

export default ClearDoneTodos
