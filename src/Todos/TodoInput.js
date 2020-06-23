import React, {useState} from 'react';

function TodoInput({addTodo}){
    const [value, setValue] = useState('');

    function createTodo(event){
        if (event.keyCode === 13 && value.trim()){
            addTodo(value, event)
            setValue('')
        }
    }

    return (
        <input 
            value={value} 
            onChange={event => setValue(event.target.value)}
            onKeyDown={event => createTodo(event)} 
            type="text" 
            tabIndex="0"
            placeholder="What needs to be done?" 
        />
    );
};

export default TodoInput;