const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(), 
                    title: action.title, 
                    completed: false, 
                    isEdit: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'EDIT_TODO':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, isEdit: true } : todo
            )
        case 'CANCELE_EDIT_TODO':
            return state.map(todo => 
                todo.id !== action.id ? { ...todo, isEdit: false } : todo
            )
        case 'SAVE_TODO':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, title: action.value, isEdit: false, } : todo
            )
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}
  
export default todos
