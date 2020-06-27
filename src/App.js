import React, { useState } from 'react';
import TodoTitle from './Todos/TodoTitle';
import './App.css';
import TodoInput from './Todos/TodoInput';
import TodoList from './Todos/TodoList';
import TodoFooter from './Todos/TodoFooter';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || []);
  const [activeTodos, setActiveTodos] = useState(false);
  const [completedTodos, setCompletedTodos] = useState(false);

  localStorage.setItem('todo', JSON.stringify(todos));

  function addTodo(value) {
    setTodos(
      todos.concat([{
        id: Date.now(), 
        title: value, 
        completed: false, 
        isEdit: false
      }])
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

  function editTodo(id){
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isEdit = true
      }
      return todo
    }))
  }

  function showActiveTodos(){
    setActiveTodos(true);
    setCompletedTodos(false);
  }

  function showAllTodos(){
    setActiveTodos(false);
    setCompletedTodos(false);
  }

  function showCompletedTodos(){
    setActiveTodos(false);
    setCompletedTodos(true);
  }

  function clearCompletedTodos(){
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <Container maxWidth="sm" className="app">
      <CssBaseline />
      <TodoTitle />
      <TodoInput addTodo={addTodo}/>
      <TodoList 
        todos={todos} 
        todoCompleted={todoCompleted} 
        removeTodo={removeTodo} 
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        editTodo={editTodo}
        setTodos={setTodos}
      />
      <TodoFooter 
        todos={todos} 
        showActiveTodos={showActiveTodos} 
        showAllTodos={showAllTodos} 
        showCompletedTodos={showCompletedTodos}
        clearCompletedTodos={clearCompletedTodos}
      />
    </Container>
  );
};

export default App;
