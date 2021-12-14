import React from 'react';
import Input from './Components/Input';
import './App.css';
import TodoItem from './Components/TodoItem';
import ClearDoneTodos from './Components/ClearDoneTodos';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
        <ClearDoneTodos/>
        {
          todoList.map(item => (
            <TodoItem 
            name={item.item}
            done={item.done}
            id={item.id}
            />
          ))
        }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
