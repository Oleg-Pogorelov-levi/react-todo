import { todo_store } from "../localStorage/localStorage"

const filters = (state = todo_store.filters, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
  }
}

export default filters