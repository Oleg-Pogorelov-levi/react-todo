import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

function TodoInput({addTodo}){
    const [value, setValue] = useState('');

    function createTodo(event){
        if (event.keyCode === 13 && value.trim()){
            addTodo(value, event)
            setValue('')
        }
    }

    return (
        <TextField
            id="outlined-basic" 
            variant="outlined" 
            placeholder="What needs to be done?"
            value={value} 
            onChange={event => setValue(event.target.value)}
            onKeyDown={event => createTodo(event)} 
            tabIndex="0"
        />
    );
};

export default TodoInput;