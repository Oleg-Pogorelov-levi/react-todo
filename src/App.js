import React, { useState } from 'react';
import TodoTitle from './Todos/TodoTitle';
import './App.css';
import TodoInput from './Todos/TodoInput';
import TodoList from './Todos/TodoList';
import TodoFooter from './Todos/TodoFooter';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || []);
  localStorage.setItem('todo', JSON.stringify(todos));

  function addTodo(value) {
    setTodos(
      todos.concat([{id: Date.now(), title: value, completed: false}])
    )
  }

  function todoCompleted(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <TodoTitle />
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} todoCompleted={todoCompleted} removeTodo={removeTodo} />
      <TodoFooter />
    </div>
  );
};

export default App;
