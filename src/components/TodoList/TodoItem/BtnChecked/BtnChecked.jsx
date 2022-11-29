import React from 'react';
import _ from './BtnChecked.module.css';

export const BtnChecked = ({todo, deleteTodo}) => {
  console.log();
  return (
    <button
      className="delete"
      onClick={() => deleteTodo(todo.id)}>&#10007;
    </button>
  );
};
