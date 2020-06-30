import { visibilityFilters } from '../actions';

export const todo_store = JSON.parse(localStorage.getItem('todo')) || 
    {
        filters: visibilityFilters.SHOW_ALL,
        todos: []
    };