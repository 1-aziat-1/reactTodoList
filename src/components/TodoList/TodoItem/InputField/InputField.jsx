import React from 'react';
import _ from './InputField.module.css';

export const InputField = ({todo, toggleTodoComplete}) => {
  console.log();
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodoComplete(todo.id)}
    />
  );
};
