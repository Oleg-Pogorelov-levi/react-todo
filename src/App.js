import React from 'react';
import TodoTitle from './Todos/TodoTitle';
import './App.css';
import TodoInput from './Todos/TodoInput';
import TodoList from './Todos/TodoList';
import TodoFooter from './Todos/TodoFooter';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { addTodo, removeTodo, editTodo, toggleTodo, saveTodo, canceleEditTodo } from './actions';
import { connect } from 'react-redux';


function App(props) {
  localStorage.setItem('todo', JSON.stringify(props.todos));
  return (
    <Container maxWidth="sm" className="app">
      <CssBaseline />
      <TodoTitle />
      <TodoInput addTodo={props.addTodoAction}/>
      <TodoList 
        todos={props.todos}
        filters={props.filters}
        todoCompleted={props.toggleTodoAction} 
        removeTodo={props.removeTodoAction} 
        editTodo={props.editTodoAction}
        saveTodo={props.saveTodoAction}
        canceleEditTodo={props.canceleEditTodoAction}
      />
      <TodoFooter 
        todos={props.todos}
        setVisibilityFilter={props.setVisibilityFilterAction}
        clearCompletedTodos={props.clearCompletedAction}
      />
    </Container>
  );
};

const mapStateToProps = store => {
  return store
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoAction: (title) => dispatch(addTodo(title)),
    removeTodoAction: (id) => dispatch(removeTodo(id)),
    editTodoAction: (id) => dispatch(editTodo(id)),
    saveTodoAction: (id, value) => dispatch(saveTodo(id, value)),
    canceleEditTodoAction: (id) => dispatch(canceleEditTodo(id)),
    toggleTodoAction: (id) => dispatch(toggleTodo(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);