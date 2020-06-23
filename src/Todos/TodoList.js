import React from 'react';

function TodoList(props){
    return (
        <ul>
            {props.todos.map((todo, index) => {
               return (
                <li key={index} className={todo.completed ? 'completed' : ''}>
                    <input type="checkbox" onChange={() => props.todoCompleted(todo.id)} checked={todo.completed} />
                    {todo.title}
                    <button onClick={() => props.removeTodo(todo.id)}>delete</button>
                </li>
               )
            })}
        </ul>
    );
};

export default TodoList;