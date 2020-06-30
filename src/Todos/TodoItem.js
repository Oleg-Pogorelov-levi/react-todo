import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Checkbox, TextField } from '@material-ui/core';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removeTodo, editTodo, saveTodo, canceleEditTodo, toggleTodo } from '../actions';

function TodoItem(props){
    const [value, setValue] = useState(props.todo.title);

    function onSaveTodo(event, id, value){
        if (event.keyCode === 13 && value.trim()){
          props.saveTodo(id, value)
        }
    }

    function onCanceleEditTodo(id){
        setValue(props.todo.title)
        props.canceleEditTodo(id)
    }

    if (props.todo.isEdit) {
        return (
            <li className="todo-item">
                <TextField
                    className="todo-edit-input"
                    id="outlined-basic" 
                    variant="outlined" 
                    placeholder="What needs to be done?"
                    value={value} 
                    onChange={event => setValue(event.target.value)}
                    onKeyDown={event => onSaveTodo(event, props.todo.id, value)}
                />
            </li>
        )
    } else {
        return (
            <li 
                className={`todo-item ${props.todo.completed ? 'completed' : ''}`}
                onClick={() => onCanceleEditTodo(props.todo.id)} 
            >
                <Checkbox 
                    icon={<RadioButtonUncheckedTwoToneIcon color="primary"/>} 
                    checkedIcon={<CheckCircleOutlineIcon />} color="primary"
                    onChange={() => props.toggleTodo(props.todo.id)}
                    checked={props.todo.completed} 
                />
                <p 
                    className="title-todo" 
                    onDoubleClick={() => props.editTodo(props.todo.id)}
                >
                    {props.todo.title}
                </p>
                <DeleteIcon 
                    className="delete-icon"
                    color="primary"
                    onClick={() => props.removeTodo(props.todo.id)}
                />
            </li>
        )
    }
};

const mapStateToProps = store => {
    return store
}

const mapDispatchToProps = {
        removeTodo,
        editTodo,
        saveTodo,
        canceleEditTodo,
        toggleTodo,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem);