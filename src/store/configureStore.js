import { createStore } from 'redux';
import rootReducer from '../reducers/index.js'

const todo_store = JSON.parse(localStorage.getItem('todo')) || [];

const store = createStore(rootReducer, {todos: todo_store.todos, filters: todo_store.filters});

export default store;