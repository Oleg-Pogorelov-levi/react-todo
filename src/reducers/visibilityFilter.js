import { visibilityFilters } from "../actions"

const initialState = {
    filters: visibilityFilters.SHOW_ALL,
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
  }
}

export default filters