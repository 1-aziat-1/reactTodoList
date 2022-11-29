import React from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import _ from './TodoList.module.css';

export const TodoList = (todos) => {
  console.log();
  return (
    <ul>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <TodoItem todo={todo}/>
          </div>
        ))
      }
    </ul>
  );
};
