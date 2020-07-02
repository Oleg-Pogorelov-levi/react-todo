import React from 'react';
import TodoTitle from './Todos/TodoTitle';
import './App.css';
import TodoInput from './Todos/TodoInput';
import TodoList from './Todos/TodoList';
import TodoFooter from './Todos/TodoFooter';

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <TodoTitle />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default App;