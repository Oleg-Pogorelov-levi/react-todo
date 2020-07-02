import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

function TodoInput(props){

    function createTodo(event){
        if (event.keyCode === 13){
            let input = document.querySelector('.input-todo')
            if (input.value.trim()){
                props.addTodo(input.value, event)
                input.value = ''
            }
        }
    }

    return (
        <input
            className="input-todo"
            id="outlined-basic" 
            variant="outlined" 
            placeholder="What needs to be done?"
            onKeyDown={event => createTodo(event)} 
            tabIndex="0"
        />
    );
};
  
const mapDispatchToProps = {
    addTodo
}

export default connect(
    null,
    mapDispatchToProps
)(TodoInput);