import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Checkbox, TextField } from '@material-ui/core';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem(props){
    const [value, setValue] = useState(props.todo.title);

    function saveTodo(event, id){
        if (event.keyCode === 13 && value.trim()){
          props.setTodos(props.todos.map(todo => {
            if (todo.id === id) {
              todo.title = value
              todo.isEdit = false
            }
            return todo
          }))
        }
    }

    function canceleEditTodo(id){
        setValue(props.todo.title)
        props.setTodos(props.todos.map(todo => {
            if (todo.id !== id) {
            todo.isEdit = false
            }
            return todo
        }))
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
                    onKeyDown={event => saveTodo(event, props.todo.id)}
                />
            </li>
        )
    } else {
        return (
            <li 
                className={`todo-item ${props.todo.completed ? 'completed' : ''}`}
                onClick={() => canceleEditTodo(props.todo.id)} 
            >
                <Checkbox 
                    icon={<RadioButtonUncheckedTwoToneIcon color="primary"/>} 
                    checkedIcon={<CheckCircleOutlineIcon />} color="primary"
                    onChange={() => props.todoCompleted(props.todo.id)}
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

export default TodoItem;