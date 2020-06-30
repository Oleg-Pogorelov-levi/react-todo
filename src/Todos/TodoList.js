import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
    let filteredTodos;

    if (props.filters === 'SHOW_ACTIVE') {
        filteredTodos = props.todos.filter(todo => !todo.completed)
    } else if (props.filters === 'SHOW_COMPLETED') {
        filteredTodos = props.todos.filter(todo => todo.completed)
    } else {
        filteredTodos = props.todos
    }

    return (
        <ul className="todo-list">
            {filteredTodos.map((todo, index) => {
               return (
                <TodoItem
                    key={index}
                    todo={todo}
                    todos={props.todos}
                    todoCompleted={props.todoCompleted} 
                    removeTodo={props.removeTodo}
                    editTodo={props.editTodo}
                    setTodos={props.setTodos}
                    saveTodo={props.saveTodo}
                    canceleEditTodo={props.canceleEditTodo}
                />
               )
            })}
        </ul>
    );
};

export default TodoList;