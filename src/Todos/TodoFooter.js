import React from 'react';

function TodoFooter(props){
    return (
        <div>
            <span>items left</span>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <button>Clear completed</button>
        </div>
    );
};

export default TodoFooter;