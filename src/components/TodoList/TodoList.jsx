import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import _ from './TodoList.module.css';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {
        todos.map(todo =>
          <div key={todo.id}>
            <TodoItem
              todo={todo}
            />
          </div>
        )
      }
    </ul>
  );
};
