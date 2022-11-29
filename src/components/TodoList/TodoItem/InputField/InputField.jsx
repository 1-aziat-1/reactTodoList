import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../../../../store/todoSlice';
import _ from './InputField.module.css';

export const InputField = ({todo}) => {
  const dispatch = useDispatch();
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => dispatch(toggleTodoComplete(todo.id))}
    />
  );
};
