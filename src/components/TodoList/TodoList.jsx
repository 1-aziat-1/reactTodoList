import React from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import _ from './TodoList.module.css';

export const TodoList = ({todos, toggleTodoComplete, deleteTodo}) => {
  console.log(todos);
  return (
    <ul>
      {
        todos.map(todo =>
          <div key={todo.id}>
            <TodoItem
              todo={todo}
              toggleTodoComplete={toggleTodoComplete}
              deleteTodo={deleteTodo}
            />
          </div>
        )
      }
  </ul>
  );
};
