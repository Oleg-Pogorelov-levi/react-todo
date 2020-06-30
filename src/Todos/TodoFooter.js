import React from 'react';
import { Tabs, Tab, Button } from '@material-ui/core';
import { getVisibleTodos } from '../selectors';
import { setVisibilityFilter, clearCompleted } from '../actions';
import { connect } from 'react-redux';

function TodoFooter(props){
    const leftTodos = props.todos.filter(todo => !todo.completed)
    const [value, setValue] = React.useState(2);

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
                <Tab className="button-status" label="All" onClick={() => props.setVisibilityFilterAction('SHOW_ALL')} />
                <Tab className="button-status" label="Active" onClick={() => props.setVisibilityFilterAction('SHOW_ACTIVE')} />
                <Tab className="button-status" label="Completed" onClick={() => props.setVisibilityFilterAction('SHOW_COMPLETED')} />
            </Tabs>
            {props.todos.filter(todo => todo.completed).length ? 
                <Button
                    size="small" 
                    variant="contained" 
                    color="primary"
                    className="button-clear"
                    onClick={() => props.clearCompletedAction()}
                >
                    Clear completed [{props.todos.filter(todo => todo.completed).length}]
                </Button>
             : 
                <div className="button-clear"></div>}
        </div>
    );
};

const mapStateToProps = store => {
    return {todos: getVisibleTodos(store)}
}
  
const mapDispatchToProps = dispatch => {
    return {
        setVisibilityFilterAction: (filter) => dispatch(setVisibilityFilter(filter)),
        clearCompletedAction: () => dispatch(clearCompleted()),
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoFooter);