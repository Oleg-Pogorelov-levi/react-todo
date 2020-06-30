import { combineReducers } from 'redux'
import todos from './todos'
import filters from './visibilityFilter'

export default combineReducers({
    todos,
    filters
})