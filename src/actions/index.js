export const addTodo = (title) => ({
    type: 'ADD_TODO',
    title
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const editTodo = (id) => ({
    type: 'EDIT_TODO',
    id
})

export const saveTodo = (id, value) => ({
    type: 'SAVE_TODO',
    id,
    value
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const canceleEditTodo = (id) => ({
    type: 'CANCELE_EDIT_TODO',
    id
})

export const clearCompleted = () => ({
    type: 'CLEAR_COMPLETED'
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}