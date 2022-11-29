import React from 'react';
import { InputField } from './InputField/InputField';
import { BtnChecked } from './BtnChecked/BtnChecked';
import _ from './TodoItem.module.css';

export const TodoItem = ({todo}) => {
  console.log();
  return (
    <li key={todo.id}>
      <InputField todo={todo}/>
      <span>{todo.text}</span>
      <BtnChecked todo={todo}/>
    </li>
  );
};
