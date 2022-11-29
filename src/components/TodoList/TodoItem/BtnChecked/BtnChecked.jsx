import React from 'react';
import _ from './BtnChecked.module.css';

export const BtnChecked = () => {
  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }
  return (
    <button
      className="delete"
      onClick={() => removeTodo(todo.id)}
    >
      &#10007;
    </button>
  );
};
