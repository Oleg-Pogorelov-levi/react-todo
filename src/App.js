import React from 'react';
import TodoTitle from './Todos/TodoTitle';
import './App.css';
import TodoInput from './Todos/TodoInput';
import TodoList from './Todos/TodoList';
import TodoFooter from './Todos/TodoFooter';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Container maxWidth="sm" className="app">
      <CssBaseline />
      <TodoTitle />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </Container>
  );
};

export default App;