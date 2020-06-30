import React, { useMemo } from 'react';
import { Tabs, Tab, Button } from '@material-ui/core';
import { setVisibilityFilter, clearCompleted } from '../actions';
import { connect } from 'react-redux';
import { createSelector } from "reselect";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
  }
);

function TodoFooter(props){
    const leftTodos = useMemo( () => props.todos.filter(todo => !todo.completed), [props.todos])
    const [value, setValue] = React.useState(2);
    const completedTodo = props.todos.length - leftTodos.length;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="footer">
            <span className="items-left">{leftTodos.length} {leftTodos.length === 1 ? "item left" : "items left"}</span>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab className="button-status" label="All" onClick={() => props.setVisibilityFilter('SHOW_ALL')} />
                <Tab className="button-status" label="Active" onClick={() => props.setVisibilityFilter('SHOW_ACTIVE')} />
                <Tab className="button-status" label="Completed" onClick={() => props.setVisibilityFilter('SHOW_COMPLETED')} />
            </Tabs>
            {useMemo( () => props.todos.filter(todo => todo.completed).length, [props.todos]) ? 
                <Button
                    size="small" 
                    variant="contained" 
                    color="primary"
                    className="button-clear"
                    onClick={() => props.clearCompleted()}
                >
                    Clear completed [{completedTodo}]
                </Button>
             : 
                <div className="button-clear"></div>}
        </div>
    );
};

const mapStateToProps = store => ({todos: getVisibleTodos(store)})
  
const mapDispatchToProps = {
        setVisibilityFilter,
        clearCompleted
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFooter);