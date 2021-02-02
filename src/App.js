import ColorBox from './components/ColorBox';
import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFrom from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
      { id: 1, title: 'I love Easy Frontend! 😍 ' },
      { id: 2, title: 'We love Easy Frontend! 🥰 ' },
      { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
  }

  return (
    <div className="App">
      <h1>Welcome to react hooks</h1>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
      <TodoFrom onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
