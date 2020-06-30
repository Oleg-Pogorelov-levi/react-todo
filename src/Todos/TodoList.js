import React, { useMemo } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList(props){
    localStorage.setItem('todo', JSON.stringify(props.todo_store));
    const { todos, filters } = props.todo_store;
        
    let filteredTodos = useMemo(() => {
        switch (filters) {
            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed)
            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }, [filters, todos])

    return (
        <ul className="todo-list">
            {useMemo((todos) => filteredTodos.map((todo, index) => {
               return (
                <TodoItem
                    key={index}
                    todo={todo}
                    todos={todos}
                />
               )
            }), [filteredTodos])}
        </ul>
    );
};

const mapStateToProps = store => {
    return {todo_store: store}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);