import React from 'react';
import _ from './InputField.module.css';

export const InputField = ({todos, setTodos}, todo) => {
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    );
  };
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodoComplete(todo.id)}
    />
  );
};
