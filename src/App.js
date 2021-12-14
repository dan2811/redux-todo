import React from 'react';
import Input from './Components/Input';
import './App.css';
import TodoItem from './Components/TodoItem';

const todoList = [{
  name: 'todo',
  done: false,
  id: 123649873498734
}, {
  name: 'todo2',
  done: true,
  id: 987498733
}];


function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
        {
          todoList.map(item => (
            <TodoItem 
            name={item.name}
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
