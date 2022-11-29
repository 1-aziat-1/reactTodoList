import React from 'react';
import { InputField } from './InputField/InputField';
import { BtnChecked } from './BtnChecked/BtnChecked';
import _ from './TodoItem.module.css';

export const TodoItem = () => {
    console.log();
  return (
    <li key={todo.id}>
      <InputField/>
      <span>{todo.text}</span>
      <BtnChecked/>
    </li>
  );
};
