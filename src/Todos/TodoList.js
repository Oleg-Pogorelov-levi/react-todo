import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
    let filteredTodos;
    if (props.activeTodos) {
        filteredTodos = props.todos.filter(todo => !todo.completed)
    } else if (props.completedTodos) {
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
                />
               )
            })}
        </ul>
    );
};

export default TodoList;